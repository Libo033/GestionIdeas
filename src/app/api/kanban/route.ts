import clientPromise from "@/libs/mongodb";
import { Db, MongoClient } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { JWTPayload, JWTVerifyResult, jwtVerify } from "jose";

export async function GET() {
  // OBTENER TODOS LOS KANBAN
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    if (mySession === undefined) {
      return Response.json(
        { Error: "Account doesn't exist", status: 401 },
        { status: 401 }
      );
    }

    const value: JWTVerifyResult<JWTPayload> = await jwtVerify(
      mySession.value,
      secret_key
    );

    if (typeof value.payload.uid !== "string") {
      throw new Error();
    }

    const db: Db = client.db(value.payload.uid);
    const kanban = await db.collection("kanban").find().toArray();

    return Response.json(kanban, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { Error: error.message, status: 500 },
        { status: 500 }
      );
    }
  }
}

export async function POST(req: Request) {
  // CREAR UN KANBAN
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    const data = await req.json();

    if (mySession === undefined) {
      return Response.json(
        { Error: "Account doesn't exist", status: 401 },
        { status: 401 }
      );
    }

    const value: JWTVerifyResult<JWTPayload> = await jwtVerify(
      mySession.value,
      secret_key
    );

    if (typeof value.payload.uid !== "string") {
      throw new Error();
    }

    const db: Db = client.db(value.payload.uid);

    const new_kanban = {
      name: data.name,
      create_date: new Date().toLocaleString(),
      content: [],
    };

    const new_kanban_created = await db
      .collection("kanban")
      .insertOne(new_kanban);

    return Response.json(
      { created: new_kanban_created.acknowledged, status: 201 },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { Error: error.message, status: 500 },
        { status: 500 }
      );
    }
  }
}
