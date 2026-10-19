import { useTodosStore } from "../../store/useTodosStore";
import type { Todo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodosList.module.css";

const TodosList = () => {
    const todos = useTodosStore((state) => state.todos).sort(
        (a, b) => +a.isDone - +b.isDone,
    );
    const clearTodos = useTodosStore((state) => state.clearTodos);
    const removeDoneTodos = useTodosStore((state) => state.removeDoneTodos);
    const renderTodo = (todo: Todo) => <TodoItem key={todo.id} todo={todo} />;

    return (
        <>
            <div id={styles.btnsContainer}>
                <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={clearTodos}
                >
                    Remove All
                </button>
                <button
                    type="button"
                    className={styles.removeBtn}
                    onClick={removeDoneTodos}
                >
                    Remove Done Todos
                </button>
            </div>
            <ul id={styles.todosContainer}>{todos.map(renderTodo)}</ul>
        </>
    );
};

export default TodosList;
