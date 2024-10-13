import { publicProcedure, router } from "./trpc";
import { z } from "zod";

const todoCreateType = z.object({
    title : z.string(),
    description : z.string()
})
const appRoter = router({
    todoCreate : publicProcedure
        .input(todoCreateType)
        .mutation(async(opti) => {
            const title = opti.input.title;
            const description = opti.input.description
            
            // do db stuff here 
            return {
                id : 1,
                title : title,
                description :description
            };
        })
})

export type appRoter = typeof appRoter;  