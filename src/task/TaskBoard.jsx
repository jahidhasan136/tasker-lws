import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React App",
    description:
      "I want to Learn React such than i can treat it like my slave and make it do whatever i want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box  */}
        <SearchTask />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* task action start */}

          <TaskAction />

          {/* task action end */}

          {/* task list start */}

          <TaskList tasks={tasks} />

          {/* task list end */}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
