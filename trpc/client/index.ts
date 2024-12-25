import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../src';

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

// if we change anythong in the input of the backend(zod) then it will directly reflects the changes in this with out any compilation 
async function main(){
   let response =  await trpc.todoCreate.mutate({
        title : " new todo added ",
        description : " descripotion of the todo "
    })

    console.log(response)
    
}
main()