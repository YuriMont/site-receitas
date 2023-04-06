import express from "express";
import cors from "cors";
import userRoutes from "./http/routes/UserRoutes";
//Lembre-se de executar o prisma migrate

const app = express();

app.use(express.json());
app.use(cors())

app.use("/user", userRoutes);

app.listen(3333, () => {
    console.log("Server Running");
});