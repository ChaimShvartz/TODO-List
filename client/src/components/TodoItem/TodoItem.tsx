import { useTodosStore } from "../../store/useTodosStore";
import type { Todo } from "../../types/Todo";
import styles from "./TodoItem.module.css";
import btnStyles from "../TodosList/TodosList.module.css";
import { memo } from "react";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const { id, title, description, isDone } = todo;
    const removeTodo = useTodosStore((state) => state.removeTodo);
    const toggleTodoDone = useTodosStore((state) => state.toggleTodoDone);
    
    return (
        <li>
            <article className={styles.todo}>
                <input
                    type="checkbox"
                    onChange={() => toggleTodoDone(id)}
                    checked={isDone}
                />
                <h2>{title}</h2>
                <h4>{description}</h4>
                <button
                    type="button"
                    className={btnStyles.removeBtn}
                    id={styles.removeTodoBtn}
                    onClick={() => removeTodo(id)}
                >
                    🗑️ Remove
                </button>
            </article>
        </li>
    );
};

export default memo(TodoItem);
