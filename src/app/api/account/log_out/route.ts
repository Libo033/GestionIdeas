import { cookies } from "next/headers";

export function DELETE() {
  try {
    cookies().delete("mySession");

    return Response.json({ deleted: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ test: "failed" }, { status: 500 });
    }
  }
}