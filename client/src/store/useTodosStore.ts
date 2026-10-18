import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Todo } from "../types/Todo";

interface TodosStore {
    todos: Todo[];
    addTodo: (newTodo: Todo) => void;
    removeTodo: (id: number) => void;
    toggleTodoDone: (id: number) => void;
    updateTodo: (id: number, data: Partial<Todo>) => void;
    removeDoneTodos: () => void;
    clearTodos: () => void;
}

export const useTodosStore = create<TodosStore>()(
    persist(
        (set) => ({
            todos: [
                {
                    id: 1,
                    title: "Test 1",
                    description: "Des for test 1",
                    isDone: false,
                },
                {
                    id: 2,
                    title: "Test 2",
                    description: "Des for test 2",
                    isDone: true,
                },
            ],
            addTodo: (newTodo: Todo) =>
                set(({ todos }) => ({ todos: [...todos, newTodo] })),
            removeTodo: (id: number) =>
                set(({ todos }) => ({
                    todos: todos.filter((t) => t.id !== id),
                })),
            removeDoneTodos: () =>
                set(({ todos }) => ({
                    todos: todos.filter((t) => !t.isDone),
                })),
            toggleTodoDone: (id: number) =>
                set(({ todos }) => ({
                    todos: todos.map((t) =>
                        t.id === id ? { ...t, isDone: !t.isDone } : t,
                    ),
                })),
            updateTodo: (id: number, data: Partial<Todo>) =>
                set(({ todos }) => ({
                    todos: todos.map((t) =>
                        t.id === id ? { ...t, ...data } : t,
                    ),
                })),
            clearTodos: () => set(() => ({ todos: [] })),
        }),
        { name: "todos-storage" },
    ),
);
