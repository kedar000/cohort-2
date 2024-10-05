import express from 'express'

const app = express();
const port = 3000;

let users =[
    {id : 1 , name : "kedar"},
    {id : 2 , name : "tarun"}
];


app.get('/' , (req , res)=>{
    const { name } = req.query;

    if(name){
        const filterdata = users.filter(user => user.name.toLowerCase())
        res.json(filterdata);
    }else{
        res.json(users)
    }
})

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`);
});