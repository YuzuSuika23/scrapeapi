import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([{
    message: "Credit to by rizkyhaksono",
    GitHub: "https://github.com/rizkyhaksono",
    Support: "https://saweria.co/natee",
  },],
    { status: 200 }
  )
}
