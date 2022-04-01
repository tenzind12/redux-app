import './Tasks.css';

function Task() {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>

          <div className="create-button-container">
            <button className="button create-button">
              <i className="fa fa-calendar-plus"></i>&nbsp;&nbsp; Create
            </button>
          </div>
        </div>

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
            <button className="button save-button">
              <i className="fa fa-save"></i>&nbsp;&nbsp; Save Task
            </button>
            <button className="button cancel-button">
              <i className="fa fa-cancel"></i>&nbsp;&nbsp; Cancel
            </button>
          </div>
        </div>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* tasks starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumb tack"></i>
                <span className="task-title-text">Bob's appointment</span>
              </div>
              <div className="text-subtitle">Sub title</div>
            </div>
          </div>
          {/* tasks ends */}
        </div>
      </div>
    </div>
  );
}

export default Task;
