import { NextRequest, NextResponse  } from "next/server";

let reqCount = 0 
export function middleware(req : NextRequest){
    console.log(req.url)
    reqCount ++;
    const res = NextResponse.next();
    console.log("request count : " + reqCount);
    // return res;


    // if the url is starting have api/merchant return to the user route
    if(req.nextUrl.pathname.startsWith('/api/merchant')){
        return NextResponse.redirect(new URL('/api/user' , req.url))
    }

    return res;
}

export const config = {
    matcher : '/api/:path*',
} 