import ItemTodoList from "./ItemTodoList";

export function TodoList() {
  return (
    <div>
      <ItemTodoList id="1" text="Playing game" />
      <ItemTodoList id="2" text="Watching Film" />
      <ItemTodoList id="3" text="Playing Sport" />
    </div>
  );
}