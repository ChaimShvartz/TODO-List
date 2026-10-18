import TodosList from "../components/TodosList";
import { useTodosStore } from "../store/useTodosStore";

const TodosPage = () => {
    const todos = useTodosStore((state) => state.todos);
    return <TodosList todos={todos} />;
};

export default TodosPage;
