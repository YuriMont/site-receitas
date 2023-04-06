import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";
import dayjs from "dayjs";
import jsonwebtoken from "jsonwebtoken";

export class UserController {
  async create(req: Request, res: Response) {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
      confirmation_password: z.string(),
    });

    const { name, email, password, confirmation_password } =
      createUserBody.parse(req.body);

    const userExits = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExits) {
      return res.status(400).json({ msg: "Endereço de email já cadastrado" });
    }

    if (password != confirmation_password) {
      return res.status(400).json({ msg: "As senhas devem ser iguais" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordEncrypted = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        name,
        email,
        password: passwordEncrypted,
      },
    });

    return res.status(201).json({ msg: "Usuário criado com sucesso!" });
  }

  async forgot(req: Request, res: Response) {
    const forgotPasswordBody = z.object({
      email: z.string(),
    });

    const { email } = forgotPasswordBody.parse(req.body);

    const userExits = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExits) {
      return res.status(400).json({ msg: "Endereço de email não cadastrado" });
    }

    let codigo = Math.floor(Math.random() * 9999) - 1000;
    if(codigo < 1000){
      codigo+=1000;
    }

    //criar forgot
    await prisma.user.update({
      where: {
        id: userExits.id
      },
      data: {
        forgot_password: {
          create: {
            resetPasswordCode: String(codigo),
            resetPasswordCodeExpires: dayjs().add(15, "minute").format(),
          }
        }        
      }
    })

    const forgot_request =
      await prisma.forgotPassword.findUnique({
        where: {
          userId: userExits.id
        }
      });

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    transporter.sendMail(
      {
        from: process.env.EMAIL,
        to: userExits.email,
        subject: "Código de verficação",
        html: `<h4>Código para redefinir sua senha:</h4><h1>${codigo}</h1>`,
      },
      (error) => {
        if (error) {
          return res.status(400).json({ error });
        }
        return res.status(200).json({id: forgot_request?.id});
      }
    );
  }

  async verifyCode(req: Request, res: Response) {
    const { id } = z.object({ id: z.string() }).parse(req.params);

    const { code } = z.object({ code: z.string() }).parse(req.body);

    const resquestExits = await prisma.forgotPassword.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (
      code != resquestExits?.resetPasswordCode &&
      dayjs().isAfter(resquestExits?.resetPasswordCodeExpires)
    ) {
      return res.status(200).json({ msg: "Código inválido!" });
    }

    return res.status(200).json({ userId: resquestExits?.userId });
  }

  async resetPassword(req: Request, res: Response) {
    const { id } = z
      .object({
        id: z.string(),
      })
      .parse(req.params);

    const { password, confirmation_password } = z
      .object({
        password: z.string(),
        confirmation_password: z.string(),
      })
      .parse(req.body);

    if (password !== confirmation_password) {
      return res.status(400).json({ msg: "As senhas devem ser iguais" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordEncrypted = await bcrypt.hash(password, salt);

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: passwordEncrypted,
      },
    });

    await prisma.forgotPassword.delete({
      where: {
        userId: id,
      },
    });

    return res.status(200).json({
      msg: "Senha alterada com sucesso!",
    });
  }

  async login(req: Request, res: Response) {
    const { email, password } = z
      .object({
        email: z.string(),
        password: z.string(),
      })
      .parse(req.body);

    const userExits = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExits) {
      return res.status(400).json({ msg: "Usuário não encontrado" });
    }

    const checkPassword = await bcrypt.compare(password, userExits.password);

    if (!checkPassword) {
      return res.status(400).json({ msg: "Senha invalida" });
    }

    const token = jsonwebtoken.sign(
      {
        id: userExits.id,
      },
      String(process.env.SECRET),
      {
        expiresIn: "4h",
      }
    );

    res.status(200).json({token: token});
  }
}
