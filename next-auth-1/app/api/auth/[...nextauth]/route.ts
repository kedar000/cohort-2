import nextAuth from "next-auth";
import CredentialsProvider   from 'next-auth/providers/credentials'

const handler = nextAuth({
    providers : [
        CredentialsProvider({
            name : "Email" ,
            credentials : {
                username : {lable : "username", type : "text", placeholder : "email"},
                password : {lable : "password", type : "password", placeholder : "password"}
            },
            async authorize(credentials : any){
                return {
                    id : "user1"
                }
            }
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
})

export const GET = handler ;
export const POST = handler