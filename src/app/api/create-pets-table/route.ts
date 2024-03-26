import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE [IF NOT EXISTS] Customer ( id SERIAL PRIMARY KEY, 
        first_name VARCHAR (50) NOT NULL,
        last_name VARCHAR (50) NOT NULL,
        password VARCHAR (50) NOT NULL,
        email VARCHAR (255) UNIQUE NOT NULL,
        created_at TIMESTAMP NOT NULL,
       );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
