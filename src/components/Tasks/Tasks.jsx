import './Tasks.css';
import Collapsible from '../Collapsible/Collapsible';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import actions from '../../actions';

function Task() {
  // get state from redux store with useSelector hook
  const tasks = useSelector((state) => state.tasks);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  // Add new task
  const saveHandler = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  // cancel new task
  const cancelHandler = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container">
            {!isNewTaskOpen && (
              <button
                className="button create-button"
                onClick={() => setIsNewTaskOpen(!isNewTaskOpen)}
              >
                <i className="fa fa-calendar-plus"></i>&nbsp;&nbsp; Create
              </button>
            )}
          </div>
        </div>

        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* form starts */}
            <div className="form-group">
              <label htmlFor="task-title" className="form-label">
                Task Title:
              </label>
              <input type="text" placeholder="Task Title" className="text-box" id="task-title" />
            </div>

            <div className="form-group">
              <label htmlFor="task-data-time" className="form-label">
                Task Date and Time:
              </label>
              <div className="form-input">
                <input
                  type="datetime-local"
                  placeholder="Task Date and Time"
                  className="text-box"
                  id="task-data-time"
                />
              </div>
            </div>
            {/* form ends */}

            <div className="button-group">
              <button className="button save-button" onClick={saveHandler}>
                <i className="fa fa-save"></i>&nbsp;&nbsp; Save Task
              </button>
              <button className="button cancel-button" onClick={cancelHandler}>
                <i className="fa fa-cancel"></i>&nbsp;&nbsp; Cancel
              </button>
            </div>
          </div>
        </Collapsible>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* task starts */}
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-body">
                <div className="task-title">
                  <i className="fa fa-thumb tack"></i>
                  <span className="task-title-text">{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  <i className="fa fa-clock"></i>
                  <span className="task-subtitle-text">{task.taskDataTime}</span>
                </div>
              </div>

              <div className="task-options">
                <button className="icon-button">&times;</button>
              </div>
            </div>
          ))}
          {/* task ends */}
        </div>
      </div>
    </div>
  );
}

export default Task;
