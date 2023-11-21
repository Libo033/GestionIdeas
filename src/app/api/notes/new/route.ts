import clientPromise from "@/libs/mongodb";
import { Db, MongoClient } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  // CREATE NOTE
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");
    const data = await req.json();

    if (mySession === undefined) {
      return Response.json({ Error: "Account doesn't exist" }, { status: 401 });
    }

    const db: Db = client.db(mySession.value);

    const new_note = {
      title: data.title,
      content: data.content,
      create_date: new Date().toLocaleString(),
      expire_date: data.expire_date,
    };

    return Response.json(new_note, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}
