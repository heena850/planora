import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const TaskForm = ({data,setData,filter,setFilter}) => {
  const navigate = useNavigate()

  const [form,setForm] = useState(
    {
      tasks:'',
      category:'',
      description:'',
      priority:'',
      date:'',
      status:'',
    }
  )

  const [error,setError] = useState({});


  const validate= () =>{
    let newErrors = {};

    if(!form.tasks.trim()){
      newErrors.tasks = "Task is required";
    }

    if(!form.category.trim()){
      newErrors.category="Category is required";
    }
     if(!form.description.trim()){
      newErrors.description="Description is required";
    }
     if(!form.priority.trim()){
      newErrors.priority="Priority is required";
    }
     if(!form.date){
      newErrors.date="Date is required";
    }
     if(!form.status.trim()){
      newErrors.status="Status is required";
    }

    return newErrors;
  }


  const formOnchange=(e) =>{
    setForm({...form, [e.target.name]: e.target.value})
    setError((prev)=>({...prev, [e.target.name]: ""}))
  }
 



  const addData=(e) =>{

    e.preventDefault();
    const validationErrors = validate();

    if(Object.keys(validationErrors).length>0){
      setError(validationErrors);
      return;
    }

    const newdata ={
      id:Date.now(),
      tasks:form.tasks.trim(),
      category:form.category,
      description:form.description,
      priority:form.priority,
      date:form.date,
      status:form.status,
    }

    setData((prev) => [...prev, newdata]);
    setForm({
      tasks: "",
      category: "",
      description: "",
      priority: "",
      date: "",
      status: "",
    });
    setError({});
  }

  const removeData = ()=>{
    setForm({
      tasks: "",
      category: "",
      description: "",
      priority: "",
      date: "",
      status: "",
    });
    setError({});
  }



  const total = data.length
  const completed = data.filter((t) => t.status === 'Completed').length
  const pending = total - completed

  return (
    <>
        <button className="task-back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>

        {/* Add New Task Form */}
        <section className="task-card task-card--form">
          <h2>Add New Task</h2>

          <form className="task-form" onSubmit={addData}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Task Name</label>
                <input
                  type="text"
                  placeholder="Enter task name..."
                  className={`task-input ${error.tasks ? 'input-error' : ''}`}
                  name="tasks"
                  value={form.tasks}
                  onChange={formOnchange}
                />
                {error.tasks && <p className="form-error">{error.tasks}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className={`task-select ${error.category ? 'input-error' : ''}`} name="category" value={form.category}  onChange={formOnchange}>
                  <option value="">Select category</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>DevOps</option>
                  <option>Documentation</option>
                  <option>Bug Fix</option>
                  <option>Research</option>
                </select>
                 {error.category && <p className="form-error">{error.category}</p>}
              </div>
             
            </div>

            <div className="form-group form-group--full">
              <label className="form-label">Description</label>
              <textarea
                placeholder="Describe the task in detail..."
                className={`task-input task-textarea ${error.description ? 'input-error' : ''}`}
                name="description"
                rows="3" 
                value={form.description}  onChange={formOnchange}
              />
               {error.description && <p className="form-error">{error.description}</p>}
            </div>

            <div className="form-row form-row--3col">
              <div className="form-group">
                <label className="form-label">Priority</label>
                <select className={`task-select ${error.priority ? 'input-error' : ''}`} name="priority"  value={form.priority}  onChange={formOnchange}>
                   <option value="">Select Priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                 {error.priority && <p className="form-error">{error.priority}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Due Date</label>
                <input
                  type="date"
                   min={new Date().toISOString().split("T")[0]}
                  className={`task-input ${error.date ? 'input-error' : ''}`}
                  name="date"
                  value={form.date}  onChange={formOnchange}
                />
                 {error.date && <p className="form-error">{error.date}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className={`task-select ${error.status ? 'input-error' : ''}`} name="status" value={form.status}  onChange={formOnchange}>
                  <option value="">Select Status</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                 {error.status && <p className="form-error">{error.status}</p>}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="task-button task-button--secondary" onClick={removeData}>
                Clear
              </button>
              {/* onClick={formFill} */}
              <button type="submit" className="task-button task-button--primary">
                Add Task
              </button>
            </div>
          </form>
        </section>

       
        {/* Stats */}
        <section className="task-stats">
          <div className="task-stat">
            <h3>{total}</h3>
            <p>Total Tasks</p>
          </div>
          <div className="task-stat">
            <h3>{pending}</h3>
            <p>Pending</p>
          </div>
          <div className="task-stat">
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>
        </section>
        </>
  )
}

export default TaskForm
