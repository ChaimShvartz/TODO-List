import { useState } from "react";
import TodosList from "../components/TodosList";
import { useTodosStore } from "../store/useTodosStore";
import AddTodoForm from "../components/AddTodoForm";

const TodosPage = () => {
    const [activeTab, setActiveTab] = useState<"todos" | "addTodo">("todos");

    const todos = useTodosStore((state) => state.todos);
    const clearTodos = useTodosStore((state) => state.clearTodos);
    const removeDoneTodos = useTodosStore((state) => state.removeDoneTodos);
    return (
        <>
            <button type="button" onClick={() => setActiveTab("todos")}>
                TODOs List
            </button>
            <button type="button" onClick={() => setActiveTab("addTodo")}>
                Add TODO
            </button>
            {activeTab === "todos" ? (
                <>
                    <button type="button" onClick={clearTodos}>
                        Remove All
                    </button>
                    <button type="button" onClick={removeDoneTodos}>
                        Remove Done Todos
                    </button>
                    <TodosList
                        todos={todos.sort((a, b) => +a.isDone - +b.isDone)}
                    />
                </>
            ) : (
                <AddTodoForm />
            )}
        </>
    );
};

export default TodosPage;
