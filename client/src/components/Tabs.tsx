import type { Tab } from "../types/Tab";

interface TabsProps {
    setActiveTab: (tab: Tab) => void;
}

const Tabs = ({ setActiveTab }: TabsProps) => {
    return (
        <>
            <button type="button" onClick={() => setActiveTab("todos")}>
                TODOs List
            </button>
            <button type="button" onClick={() => setActiveTab("addTodo")}>
                Add TODO
            </button>
        </>
    );
};

export default Tabs;
