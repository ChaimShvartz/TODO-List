import type { Tab } from "../../types/Tab";
import "./Tabs.css";

interface TabsProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const Tabs = ({ setActiveTab, activeTab }: TabsProps) => {
    return (
        <div id="container">
            <button
                type="button"
                id={activeTab === "todos" ? "activeTab" : undefined}
                className="tab"
                onClick={() => setActiveTab("todos")}
                >
                TODOs List
            </button>
            <button
                type="button"
                id={activeTab === "addTodo" ? "activeTab" : undefined}
                className="tab"
                onClick={() => setActiveTab("addTodo")}
            >
                Add TODO
            </button>
        </div>
    );
};

export default Tabs;
