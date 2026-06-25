import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const { email } = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");

    const result = await db.collection("users").updateOne(
      { email },
      {
        $set: {
          membership: "pro",
        },
      }
    );

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}