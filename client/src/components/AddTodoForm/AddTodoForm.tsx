import React, { useState } from "react";
import type { Todo } from "../../types/Todo";
import { useTodosStore } from "../../store/useTodosStore";
import styles from "./AddTodoForm.module.css";

type TodoForm = Omit<Todo, "id" | "isDone">;
const INITIAL_FORM = { title: "", description: "" };

const AddTodoForm = () => {
    const [form, setForm] = useState<TodoForm>(INITIAL_FORM);
    const addTodo = useTodosStore((state) => state.addTodo);
    const todos = useTodosStore((state) => state.todos);
    const onSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        const id = Math.max(...todos.map((t) => t.id), 0) + 1;
        addTodo({ id, ...form, isDone: false });
        alert(`TODO: '${form.title}' added successfully`);
        setForm(INITIAL_FORM);
    };
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <form id={styles.addTodoForm} onSubmit={onSubmit}>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={onChange}
                autoFocus
            />
            <label>Description</label>
            <textarea
                name="description"
                value={form.description}
                rows={5}
                onChange={onChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddTodoForm;
