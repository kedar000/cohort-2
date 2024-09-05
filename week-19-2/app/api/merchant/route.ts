import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        mssh : "hi from merchant"
    })
}

