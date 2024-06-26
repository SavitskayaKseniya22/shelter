/* eslint-disable import/prefer-default-export */
import { NextResponse } from "next/server"
import json from "../../../../public/json/pets.json"


export async function GET() {
  return NextResponse.json({ animals: json })
}