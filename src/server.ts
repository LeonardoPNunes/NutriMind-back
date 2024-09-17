import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv"
import { Routes } from "./routes.ts"

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((err,request,tofront)=>{
    tofront.code(500).send({message: err.message})
})

const start = async () =>{
 app.register(cors)
 app.register(Routes)

 try {
    await app.listen({port: 3333, host:"0.0.0.0"})

    console.log(`servidor rodando no http://localhost:3333`)
 } catch (err) {
    console.log(err)
 }
}
start();