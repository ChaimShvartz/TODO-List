import TodosList from "../components/TodosList";
import { useTodosStore } from "../store/useTodosStore";

const TodosPage = () => {
    const todos = useTodosStore((state) => state.todos);
    const clearTodos = useTodosStore((state) => state.clearTodos);
    const removeDoneTodos = useTodosStore((state) => state.removeDoneTodos);
    return (
        <>
            <button type="button" onClick={clearTodos}>
                Remove All
            </button>
            <button type="button" onClick={removeDoneTodos}>
                Remove Done Todos
            </button>
            <TodosList todos={todos} />
        </>
    );
};

export default TodosPage;
