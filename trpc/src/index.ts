import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone';
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

//use the adapters to server the api

const server = createHTTPServer({
    router : appRoter
});
server.listen(3000);
console.log('server is runnning on port 3000')

export type AppRouter = typeof appRoter;  