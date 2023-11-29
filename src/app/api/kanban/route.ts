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
    const kanban = await db.collection("kanban").find().toArray();

    return Response.json(kanban, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}

export async function POST() {  // CREAR UN KANBAN
  try {
    return Response.json({}, {status: 200});
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}

/*  ESTRUCTURA DEL KANBAN
{
  "_id": { "$oid": "65677fd6c0593a185047eb43" },
  "name": "IDEARIO",
  "create_date": "27/11/2023, 16:37",
  "content": [
    {
      "data": "Acomodar toda la API.",
      "status": "to do",
      "_id": {
        "$oid": "656780d0cc11907c6d2d0ba1"
      }
    }
  ]
}
*/