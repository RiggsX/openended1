import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "OPENENDED API",
    version: "0.1.0",
    status: "ok",
  });
}
