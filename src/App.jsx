import { useEffect, useState } from "react"
import Header from './components/header'
import TaskForm from './components/TaskForm'
import Home from "./components/Home"

import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  const [data, setData] = useState(() => {
    const taskdata = localStorage.getItem('task');
    return taskdata ? JSON.parse(taskdata) : []
  });

  const [filter, setFilter] = useState("All");
  const filteredData = filter === "All" ? data : data.filter((item) => item.status === filter)
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(data));
  }, [data])


  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} setData={setData} setFilter={setFilter} filteredData={filteredData} ></Home>
          }
        >
          <Route
            path="/add-task"
            element={
              <TaskForm data={data} setData={setData} filter={filter} setFilter={setFilter} setShowForm={setShowForm} />
            }
          ></Route>
            <Route
            path="/edit-task/:id"
            element={
              <TaskForm data={data} setData={setData} />
            }
          ></Route>

        </Route>
      </Routes>


    </>
  )
}

export default App
