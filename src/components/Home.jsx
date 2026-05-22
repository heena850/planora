import TaskList from "./TaskList"
import { Outlet, useLocation } from "react-router-dom"

const Home = ({data,setData,filter,setFilter,filteredData}) => {
  const location = useLocation()
  const isFormOpen = location.pathname === "/add-task"

  return (
    <>
        <div className="task-page">
          <main className="task-main">
            {isFormOpen ? <Outlet /> : <TaskList filteredData={filteredData} setFilter={setFilter} />}
          </main>
      </div>
    </>
  )
}

export default Home
