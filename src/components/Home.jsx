import TaskList from "./TaskList"
import { Outlet, useLocation } from "react-router-dom"

const Home = ({data,setData,filter,setFilter,filteredData}) => {
  const location = useLocation()
  const isFormOpen = location.pathname === "/add-task" || location.pathname.startsWith("/edit-task")

  return (
    <>
        <div className="task-page">
          <main className="task-main">
            {isFormOpen ? <Outlet /> : <TaskList filteredData={filteredData} setFilter={setFilter}  data={data} setData={setData} />}
          </main>
      </div>
    </>
  )
}

export default Home
