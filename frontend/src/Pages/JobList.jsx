import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllJobs } from '../services/api'
import Header from '../components/Header'

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
            <Header />
            <div className='list'>
            <h2 className="page-title">Jobs Listed</h2>

            {loading && <div className="loading">Loading jobs...</div>}
            {error && <div className="error">Error: {error}</div>}

            <div className="jobs-container">
                {jobs.length === 0 && !loading ? (
                    <p className="no-jobs">No jobs available</p>
                ) : (
                    jobs.map((job) => (
                        <Link to={`/jobs/${job._id}`}>
                            <div key={job._id} className="job-card">
                                <h3 className="job-title">{job.title[0].toUpperCase()+job.title.slice(1)}</h3>
                                <p className="job-info"><strong>Company:</strong> {job.company}</p>
                                <p className="job-info"><strong>Location:</strong> {job.location}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
            </div>
        </>
    )
}

export default JobList