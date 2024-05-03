import { DeleteButton } from "./DeleteButton";
import { revalidateTag } from "next/cache";

async function getTodos() {
  let res = await fetch(
    `https://bxg98szdc8.execute-api.eu-west-2.amazonaws.com/dev/todos`,
    {
      cache: "no-store",
      next: { tags: ["todos"] },
    }
  );
  return res.json();
}

async function deleteTodo() {
  "use server";

  try {
    let res = await fetch(
      `https://bxg98szdc8.execute-api.eu-west-2.amazonaws.com/dev/todos`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: "04ceb972-b11f-4a6b-a077-ed2c56150ee6",
        }),

        //   cache: "no-store",
      }
    );
    revalidateTag("todos");
    return res.json();
  } catch (e) {
    console.error("err");
  }
}

export const Todos = async () => {
  let todos = await getTodos();

  return (
    <div>
      <h3>Todos</h3>
      {todos &&
        todos.map((todo) => {
          return <div key={todo.id}>{todo.id}</div>;
        })}
      <DeleteButton DeleteButton={deleteTodo} />
    </div>
  );
};
