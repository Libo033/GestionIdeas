import clientPromise from "@/libs/mongodb";
import { Db, MongoClient, ObjectId } from "mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function DELETE({ params }: { params: { id: string } }) {
  // DELETE 1 NOTE
  try {
    const client: MongoClient = await clientPromise;
    const mySession: RequestCookie | undefined = cookies().get("mySession");

    if (mySession === undefined) {
      return Response.json({ Error: "Account doesn't exist" }, { status: 401 });
    }

    const my_db_name = mySession.value.replaceAll(".", "-");
    const db: Db = client.db(my_db_name);

    const note_deleted = await db
      .collection("notes")
      .deleteOne(new ObjectId(params.id));

    return Response.json(
      { deleted: note_deleted.acknowledged },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(error.message, { status: 500 });
    }
  }
}
