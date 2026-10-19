import { useState } from "react";
import TodosList from "../components/TodosList/TodosList";
import AddTodoForm from "../components/AddTodoForm/AddTodoForm";
import type { Tab } from "../types/Tab";
import Tabs from "../components/Tabs/Tabs";

const TodosPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("todos");

    return (
        <>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab}/>
            {activeTab === "todos" ? <TodosList /> : <AddTodoForm />}
        </>
    );
};

export default TodosPage;
