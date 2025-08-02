import JobList from './Pages/JobList'
import JobDetails from './Pages/JobDetails'
import JobForm from './Pages/JobForm'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<JobList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/post" element={<JobForm />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="*" element={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
          }}>
            <h1>404 - Page Not Found!</h1>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App
