import express from "express";
import dotenv from 'dotenv'
import Connection from "./src/BD/Mongo.js";

const app = express();

dotenv.config();

app.use(express.json());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(8080, () => {
    console.log('Servidor funcionando na porta 8080');
});