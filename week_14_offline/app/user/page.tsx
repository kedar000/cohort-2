import axios from "axios";

async function fetchData(){

    const response = await axios.get("http://localhost:3000/api/user")
    return response.data;
}

export async function user(){
    
    const data =await fetchData();
    
    return (
        <>
        <div>{data.name }</div>
        <div>{data.email}</div>
        </>
    )
}