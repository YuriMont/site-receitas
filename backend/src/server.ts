import express from "express";
import userRoutes from "./http/routes/UserRoutes";
//Lembre-se de executar o prisma migrate

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.listen(3333, () => {
    console.log("Server Running");
});