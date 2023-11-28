
export async function DELETE() {  // BORRAR UN ITEM 
  try {
    return Response.json({}, {status: 200});
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ Error: error.message }, { status: 500 });
    }
  }
}