import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; 

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  // Assuming you want to create a user in the database
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
      // Other fields as needed
    },
  });

  return NextResponse.json(user); // Return the created user object
}
