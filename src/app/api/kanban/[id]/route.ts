import clientPromise from "@/libs/mongodb";
import { Db, MongoClient, ObjectId } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { JWTPayload, JWTVerifyResult, jwtVerify } from "jose";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  // OBTENER UN KANBAN
  try {
    const client: MongoClient = await clientPromise;
    const id = params.id;
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
    const kanban = await db
      .collection("kanban")
      .find({ _id: new ObjectId(id) })
      .toArray();

    return Response.json(kanban[0], { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { Error: error.message, status: 500 },
        { status: 500 }
      );
    }
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  // EDITAR UN KANBAN
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    const id = params.id;
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    const data: { name: string } = await req.json();

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

    const kanbanModified = await db.collection("kanban").findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          name: data.name,
        },
      }
    );

    return Response.json({ kanban: kanbanModified, status: 200 }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  // BORRAR UN KANBAN
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    const id = params.id;
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

    const kanban_deleted = await db
      .collection("kanban")
      .deleteOne({ _id: new ObjectId(id) });

    return Response.json(
      { deleted: kanban_deleted.acknowledged, status: 200 },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}
