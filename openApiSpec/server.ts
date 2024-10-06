import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { openapispecJson } from './openapispecjson';
// import

const app = express();
const port = 3000;

let users =[
    {id : 1 , name : "kedar"},
    {id : 2 , name : "tarun"}
];


app.get('/users' , (req , res)=>{
    const { name } = req.query;

    if(name){
        const filterdata = users.filter(user => user.name.toLowerCase());
        res.json(filterdata);
    }else{
        res.json({mssg : "invalid name "})
    }
})

app.use('/docs' , swaggerUi.serve , swaggerUi.setup(openapispecJson));

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`);
});
