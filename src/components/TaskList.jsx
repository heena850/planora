import { useNavigate } from "react-router-dom"

const priorityClass = {
  High: 'task-badge--high',
  Medium: 'task-badge--medium',
  Low: 'task-badge--low',
}

const statusClass = {
  Pending: 'task-badge--pending',
  'In Progress': 'task-badge--progress',
  Completed: 'task-badge--completed',
}

const Tasklist = ({filteredData, setFilter}) => {
  const navigate = useNavigate()

   return (
    <>
     {/* Filter Tabs */}
        <section className="task-filters">
          <button className="task-filter task-filter--active" onClick={()=>setFilter("All")}>All</button>
          <button className="task-filter" onClick={()=>setFilter("Pending")}>Pending</button>
          <button className="task-filter" onClick={()=> setFilter("In Progress")} >In Progress</button>
          <button className="task-filter" onClick={()=> setFilter("Completed")}>Completed</button>
        </section>

    <section className="task-card task-card--list">
          <div className="task-list__header">
            <h2>Your Tasks</h2>
            <button className="task-button task-button--primary" onClick={() => navigate('/add-task')}>
              + Add Task
            </button>
          </div>


          <div className="task-items">
            {
              filteredData.length === 0 ?  (
                <p className="empty-task">No tasks added yet</p>
              )
            :  (      
            filteredData.map((item) => (
              <div
                className={`task-item ${item.status === 'Completed' ? 'task-item--done' : ''}`}
                key={item.id}
              >
                <div className="task-item__info">
                  <div className="task-item__header">
                    <h3>{item.tasks}</h3>
                    <span className={`task-badge ${statusClass[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="task-item__desc">{item.description}</p>
                  <div className="task-item__meta">
                    <span className={`task-badge ${priorityClass[item.priority]}`}>
                      {item.priority}
                    </span>
                    <span className="task-item__meta-text">
                      {item.category}
                    </span>
                    <span className="task-item__meta-text">
                    {new Date(item.date).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                </div>
                <div className="task-item__actions">
                  <button className="task-action task-action--edit" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </button>
                  <button className="task-action task-action--delete" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            )))}
          </div>
        </section>
        </>
  )
}

export default Tasklist
