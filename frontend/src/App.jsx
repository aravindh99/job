import JobList from './Pages/JobList'
import JobDetails from './Pages/JobDetails'
import JobForm from './Pages/JobForm'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
   <>
      <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/post" element={ <JobForm />} />
      <Route path="/jobs/:id" element={ <JobDetails />} />
    </Routes>     
    </>
  )
}

export default App
