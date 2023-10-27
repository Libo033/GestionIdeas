export async function POST() {
  try {
    return Response.json({ test: "ok" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ test: "failed" }, { status: 500 });
    }
  }
}