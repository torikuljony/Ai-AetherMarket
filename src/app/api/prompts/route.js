export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const client = await clientPromise;
    const db = client.db("aetherMarketDB");
    const promptsCollection = db.collection("prompts");

    if (email) {
      const prompts = await promptsCollection
        .find({ creatorEmail: email })
        .sort({ createdAt: -1 })
        .toArray();

      return NextResponse.json(prompts);
    }

    const prompts = await promptsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(prompts);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}