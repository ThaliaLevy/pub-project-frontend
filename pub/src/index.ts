import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './database/dbConnect';
import { router } from './routes'
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json())
server.use(router)
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
const port = 5000 || process.env.PORT;

db.on("error", () => console.log("Erro na conexão com o banco"));
db.once("open", () => console.log("Conexão com o banco iniciada com sucesso"));

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}.\nAbra http://localhost:${port}/docs para ver a documentação no Swagger\nAbra https://documenter.getpostman.com/view/16835317/VUxRPm9a para ver a documentação no Postman`)
})