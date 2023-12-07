import clientPromise from "@/libs/mongodb";
import { Db, MongoClient, ObjectId } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { JWTPayload, JWTVerifyResult, jwtVerify } from "jose";
import { IKanban, IKanbanItem } from "@/libs/interfaces";

export async function POST(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    const data = await req.json();
    const idKanban: string | undefined = data.idKanban;
    const item: string | undefined = data.item;

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
      .findOne({ _id: new ObjectId(idKanban) });

    if (kanban && item) {
      let kanban_obj: IKanban = JSON.parse(JSON.stringify(kanban));
      let item_to_add: IKanbanItem = {
        _id: new ObjectId().toString(),
        data: item,
        status: "to do",
      };
      let content_to_update = kanban_obj.content;
      content_to_update.push(item_to_add);

      await db.collection("kanban").findOneAndUpdate(
        { _id: new ObjectId(idKanban) },
        {
          $set: {
            content: content_to_update,
          },
        }
      );

      return Response.json(
        { Item: item_to_add, kanban: idKanban, status: 201 },
        { status: 201 }
      );
    } else {
      throw new Error("Something went wrong with the kanban ID");
    }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { Error: error.message, status: 500 },
        { status: 500 }
      );
    }
  }
}

export async function PATCH(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    const data = await req.json();

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
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}

export async function PUT(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    let secret_key: Uint8Array = new TextEncoder().encode(
      process.env.JWT_SECRET
    );
    const data = await req.json();

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
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    const { searchParams } = new URL(req.url);
    const idKanban = searchParams.get("kanban");
    const idItem = searchParams.get("item");

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

    if (typeof value.payload.uid !== "string") throw new Error();

    const db: Db = client.db(value.payload.uid);

    if (idKanban && idItem) {
      const kanban = await db
        .collection("kanban")
        .findOne({ _id: new ObjectId(idKanban) });

      if (!kanban) throw new Error();

      let kanban_obj: IKanban = JSON.parse(JSON.stringify(kanban));

      await db.collection("kanban").findOneAndUpdate(
        { _id: new ObjectId(idKanban) },
        {
          $set: {
            content: kanban_obj.content.filter((k) => k._id !== idItem),
          },
        }
      );

      return Response.json({ Delete: "successfully" }, { status: 200 });
    } else {
      return Response.json(
        { Error: "Params cannot be undefined" },
        { status: 401 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}
