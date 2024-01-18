import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
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
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleAddTask(newTask, isAdd) {
    // console.log("adding task", task);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }
  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }
  function handleDeleteTask(taskId) {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  }
  function handleDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }
  function handleFav(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        {/* Search Box  */}
        <SearchTask />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* task action start */}

          <TaskAction
            onDeleteAllClick={handleDeleteAllClick}
            onAddClick={() => setShowAddModal(true)}
          />

          {/* task action end */}

          {/* task list start */}

          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFav={handleFav}
          />

          {/* task list end */}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
