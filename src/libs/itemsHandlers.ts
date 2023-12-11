
export const handleMoveItemTo = async (
  idKanban: string,
  idItem: string,
  moveTo: "to do" | "doing" | "done"
) => {
  try {
    await fetch(`/api/kanban/items`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idKanban,
        idItem,
        moveTo,
      }),
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
