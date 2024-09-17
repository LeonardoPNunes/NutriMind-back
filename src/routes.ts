import{
FastifyInstance,
FastifyPluginOptions,
FastifyRequest,
FastifyReply
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController.ts"

export async function Routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste",(request: FastifyRequest, reply:FastifyReply) =>{
        
        const responseText = "```json\n{\n  \"nome\": \"Leo\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 21,\n  \"altura\": 1.70,\n  \"peso\": 62,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego com granola\"\n      ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada verde\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 batata doce média\",\n        \"1 scoop de whey protein\"\n      ]\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de carne vermelha magra\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try {
            const jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
            const jsonObj = JSON.parse(jsonString);
            return reply.send({ data:jsonObj })
        } catch (err) {
            return console.error(err)
        }
    })
    fastify.post("/create", async (request: FastifyRequest, reply:FastifyReply)=>{
        return new CreateNutritionController().handle(request, reply)
    })
}