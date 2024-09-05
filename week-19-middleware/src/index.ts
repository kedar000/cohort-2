import express from "express";
const app = express()

let requestcount = 0;

function middleware(req : any , res : any , next : any){
    requestcount++;
    next()
}

app.use(middleware);

app.get("/" , (req , res)=>{
 res.send("hello kedar");
})

app.post("/requestcount" , (req , res)=>{
    res.json({
        mssg : requestcount
    })


})

console.log("server is running")

app.listen(3000)