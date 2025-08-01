import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllJobs } from '../services/api'

const JobList = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadJobs = async () => {
            try {
                setLoading(true)
                const jobsData = await fetchAllJobs()
                setJobs(jobsData)
            } catch (err) {
                setError('Failed to load jobs')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadJobs()
    }, [])

    return (
        <>
            <header className="header">
                <span className="logo">Job-board</span>
                <Link to="/jobs/post" >Post a job</Link>
                <Link to="/jobs">Jobs</Link>
            </header>
            <h1 className="page-title">Jobs available</h1>

            {loading && <div className="loading">Loading jobs...</div>}
            {error && <div className="error">Error: {error}</div>}

            <div className="jobs-container">
                {jobs.length === 0 && !loading ? (
                    <p className="no-jobs">No jobs available</p>
                ) : (
                    jobs.map((job) => (
                        <Link to="/jobs/:job._id">
                        <div key={job._id} className="job-card">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-info"><strong>Company:</strong> {job.company}</p>
                            <p className="job-info"><strong>Location:</strong> {job.location}</p>
                            <p className="job-info"><strong>Type:</strong> {job.jobType}</p>
                            <p className="job-info"><strong>Pay Status:</strong> {job.payStatus}</p>
                            <p className="job-info"><strong>Description:</strong> {job.description}</p>
                            {job.skills && job.skills.length > 0 && (
                                <p className="job-info"><strong>Skills:</strong> {job.skills.join(', ')}</p>
                            )}
                            <p className="job-date"><strong>Posted:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
                        </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    )
}

export default JobList