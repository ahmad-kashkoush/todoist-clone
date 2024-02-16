import { useState } from 'react';
import './../Styles/App.css';
import './../Styles/Sidbar.css';
import { Sidebar } from './Sidebar';
import { AddTaskModal } from './Modals';
import { Content } from './Content';
import { AddSearchModal } from './Modals';

function App() {
  const [tasks, setTasks] = useState([
    { finished: true, filter: "inbox", id: 1, text: "item 1" },
    { finished: true, filter: "inbox", id: 2, text: "task 1" },
    { finished: true, filter: "inbox", id: 3, text: "Read More Books" },
    { finished: true, filter: "inbox", id: 4, text: "Enjoying" },
    { finished: false, filter: "today", id: 5, text: "Read Quran" },
    { finished: false, filter: "today", id: 6, text: "Journal" },
    { finished: false, filter: "today", id: 7, text: "Solve 10 Problems" },
    { finished: false, filter: "today", id: 8, text: "Build 50 Project" },
    { finished: false, filter: "today", id: 9, text: "Study Database" },
    { finished: false, filter: "today", id: 10, text: "Study OS" },
    { finished: false, filter: "upcoming", id: 11, text: "Study Distributed Systems " },
    { finished: false, filter: "upcoming", id: 12, text: "Clean My Room" },
    { finished: false, filter: "upcoming", id: 13, text: "and More" },
  ]);
  function handleAddTask(task) {

    setTasks(curTasks => [
      ...curTasks,
      { id: curTasks.length + 1, text: task, finished: false }
    ]);
  }
  function handleToggleTask(id) {
    setTasks(curTasks => {
      return curTasks.map(task => {
        if (task.id === id)
          return { ...task, finished: !task.finished };
        return task;
      })
    });
  }
  const [taskModalClass, setTaskModalClass] = useState("close");
  function handleOpenTaskModal() {
    setTaskModalClass("open");
  }
  function handleCloseTaskModal() {
    setTaskModalClass("close");
  }
  const [searchModalClass, setSearchModalClass] = useState("close");
  function handleOpenSearchModal() {
    setSearchModalClass("open");
  }
  function handleCloseSearchModal(e) {
    e.preventDefault();
    setSearchModalClass("close");
  }
  return (
    <div className="App">
      <AddTaskModal
        status={taskModalClass}
        onAddTask={handleAddTask}
        onCloseModal={handleCloseTaskModal}
      />
      <AddSearchModal
        status={searchModalClass}
        onCloseModal={handleCloseSearchModal}
        onToggleTask={handleToggleTask}
        tasks={tasks}
      />
      <Sidebar
        onOpenAddTaskModal={handleOpenTaskModal}
        onOpenSearchModal={handleOpenSearchModal} />
      <Content
        tasks={tasks}
        onToggleTask={handleToggleTask} />
    </div>
  );
}
export default App;
