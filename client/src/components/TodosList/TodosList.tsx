import { useTodosStore } from "../../store/useTodosStore";
import type { Todo } from "../../types/Todo";
import styles from "./TodosList.module.css";

const TodosList = () => {
    const todos = useTodosStore((state) => state.todos).sort(
        (a, b) => +a.isDone - +b.isDone,
    );
    const clearTodos = useTodosStore((state) => state.clearTodos);
    const removeDoneTodos = useTodosStore((state) => state.removeDoneTodos);
    const removeTodo = useTodosStore((state) => state.removeTodo);
    const toggleTodoDone = useTodosStore((state) => state.toggleTodoDone);
    const renderTodo = (todo: Todo) => {
        const { id, title, description, isDone } = todo;
        return (
            <tr key={id}>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                    <input
                        type="checkbox"
                        onChange={() => toggleTodoDone(id)}
                        checked={isDone}
                    ></input>
                </td>

                <td>
                    <button type="button" onClick={() => removeTodo(id)}>
                        Remove
                    </button>
                </td>
            </tr>
        );
    };
    return (
        <>
            <div id={styles.container}>
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
            <table>
                <caption>TODO List</caption>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Dscription</td>
                        <td>Is Done?</td>
                    </tr>
                </thead>
                <tbody>{todos.map(renderTodo)}</tbody>
            </table>
        </>
    );
};

export default TodosList;
