import './Tasks.css';
import Collapsible from '../Collapsible/Collapsible';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import { dateFormat } from '../../utils';

function Task() {
  // local states
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDateTime, setTaskDateTime] = useState('');
  const [search, setSearch] = useState('');
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  // create dispatch function
  const dispatch = useDispatch();

  // run on first render
  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  // get Global state from redux store with useSelector hook
  const tasks = useSelector((state) => state.tasks);

  console.log(tasks);

  // filtered with search box
  let filteredTasks = [];
  if (tasks && tasks.data.length) {
    filteredTasks = tasks.data.filter(
      (task) => task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );
  }

  // saveHandler add new task
  const saveHandler = () => {
    // dispatch
    dispatch(
      actions.createTask({
        id: Math.floor(Math.random() * 10000000),
        taskTitle: taskTitle,
        taskDateTime: taskDateTime,
      })
    );
    setTaskTitle('');
    setTaskDateTime('');
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  // cancel new task
  const cancelHandler = () => {
    setIsNewTaskOpen(!isNewTaskOpen);
  };

  // deleteHandler
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure to delete the task?'))
      // dispatch
      dispatch(actions.deleteTask(id));
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>
              Tasks
              {tasks.loading && <i className="fa fa-spinner fa-spin"></i>}
            </h1>
            {tasks.error && <h2>{tasks.error.message}</h2>}
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
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Task Title"
                className="text-box"
                id="task-title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="task-data-time" className="form-label">
                Task Date and Time:
              </label>
              <div className="form-input">
                <input
                  value={taskDateTime}
                  onChange={(e) => setTaskDateTime(e.target.value)}
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
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* task starts */}
          {filteredTasks.map((task) => (
            <div className="task" key={task.id}>
              <div className="task-body">
                <div className="task-title">
                  <i className="fa fa-thumb tack"></i>
                  <span className="task-title-text">{task.taskTitle}</span>
                </div>
                <div className="task-subtitle">
                  <i className="fa fa-clock"></i>
                  <span className="task-subtitle-text">{dateFormat(task.taskDateTime)}</span>
                </div>
              </div>

              <div className="task-options">
                <button className="icon-button" onClick={() => deleteHandler(task.id)}>
                  &times;
                </button>
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
