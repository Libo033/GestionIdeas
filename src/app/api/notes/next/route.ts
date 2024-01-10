import clientPromise from "@/libs/mongodb";
import { Db, MongoClient } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { JWTPayload, JWTVerifyResult, jwtVerify } from "jose";

export async function GET() {
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    if (mySession === undefined) {
      return Response.json({ Error: "Account doesn't exist" }, { status: 401 });
    }

    const value: JWTVerifyResult<JWTPayload> = await jwtVerify(
      mySession.value,
      secret_key
    );

    if (typeof value.payload.uid !== "string") {
      throw new Error();
    }

    const db: Db = client.db(value.payload.uid);
    const all_notes = await db.collection("notes").find().toArray();
    const next_notes = all_notes
      .filter(
        (note) =>
          note.expire_date !== 0 && note.expire_date > new Date().getTime()
      )
      .sort((a, b) => a.expire_date - b.expire_date);

    return Response.json(next_notes, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}
