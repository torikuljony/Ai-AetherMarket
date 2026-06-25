import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE ORDER
export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const ordersCollection = db.collection("orders");

    const existing = await ordersCollection.findOne({
      buyerEmail: body.buyerEmail,
      promptId: body.promptId,
    });

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "Already purchased",
      });
    }

    const result = await ordersCollection.insertOne({
      ...body,
      status: "completed",
      createdAt: new Date(),
    });

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

// GET ORDERS
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const ordersCollection = db.collection("orders");

    if (email) {
      const orders = await ordersCollection
        .find({ buyerEmail: email })
        .sort({ createdAt: -1 })
        .toArray();

      return NextResponse.json(orders);
    }

    const allOrders = await ordersCollection.find({}).toArray();

    return NextResponse.json(allOrders);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}