import { useTodosStore } from "../store/useTodosStore";
import type { Todo } from "../types/Todo";

interface TodosListProps {
    todos: Todo[];
}

const TodosList = ({ todos }: TodosListProps) => {
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
    );
};

export default TodosList;
