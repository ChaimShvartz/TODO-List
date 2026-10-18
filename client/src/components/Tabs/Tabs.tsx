import type { Tab } from "../../types/Tab";
import styles from "./Tabs.module.css";

interface TabsProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const Tabs = ({ setActiveTab, activeTab }: TabsProps) => {
    return (
        <div id={styles.container}>
            <button
                type="button"
                id={activeTab === "todos" ? styles.activeTab : undefined}
                className={styles.tab}
                onClick={() => setActiveTab("todos")}
            >
                TODOs List
            </button>
            <button
                type="button"
                id={activeTab === "addTodo" ? styles.activeTab : undefined}
                className={styles.tab}
                onClick={() => setActiveTab("addTodo")}
            >
                Add TODO
            </button>
        </div>
    );
};

export default Tabs;
