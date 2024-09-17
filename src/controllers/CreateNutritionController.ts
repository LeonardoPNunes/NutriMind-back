import {
    FastifyRequest,
    FastifyReply
} from "fastify"
import { CreateNutritionService } from "../services/CreateNutritionService";

export interface DataProps{
    name: string;
    weight: string;
    height: string; 
    age: string;
    gender: string;
    objective: string; 
    level: string;
}
class CreateNutritionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, weight, height, age, gender, objective, level } = request.body as DataProps
    
        const NutritionService = new CreateNutritionService();
        const nutrition = await NutritionService.execute({
            name, 
            weight, 
            height, 
            age, 
            gender, 
            objective, 
            level});

        reply.send(nutrition)
    }
}
export { CreateNutritionController }