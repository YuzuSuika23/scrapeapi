import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([{
    message: "Used for Otakuddesu data scrape purpose by myself and also Credit to rizkyhaksono for making this repo",
    GitHub: "https://github.com/rizkyhaksono",
    Support: "https://saweria.co/natee",
  },],
    { status: 200 }
  )
}
