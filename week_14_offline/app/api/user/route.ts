import { NextRequest, NextResponse } from "next/server";

export  function GET(){
    const body = {
        name : "kedar" , email : "kedar@mail.com"
    }
    return NextResponse.json(body)
}