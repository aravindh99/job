import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchJobById } from '../services/api'
import Header from '../components/Header'

const JobDetails = () => {
    const { id } = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadJob = async () => {
            try {
                setLoading(true)
                const jobData = await fetchJobById(id)
                setJob(jobData)
            } catch (err) {
                setError('Failed to load job details')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            loadJob()
        }
    }, [id])

    if (loading) return <div className="loading">Loading job details...</div>
    if (error) return <div className="error">Error: {error}</div>
    if (!job) return <div className="error">Job not found</div>

    return (
        <>
            <Header />
            <div className="job-details-container">
                <h1 className="page-title">Job Details</h1>

            <div className="job-details-card">
                <h2 className="job-title">{job.title}</h2>

                <div className="job-detail">
                    <strong>Company:</strong> {job.company}
                </div>

                <div className="job-detail">
                    <strong>Location:</strong> {job.location}
                </div>

                <div className="job-detail">
                    <strong>Job Type:</strong> {job.jobType}
                </div>

                <div className="job-detail">
                    <strong>Pay Status:</strong> {job.payStatus}
                </div>

                <div className="job-detail">
                    <strong>Description:</strong>
                    <p className="job-description">{job.description}</p>
                </div>

                {job.skills && job.skills.length > 0 && (
                    <div className="job-detail">
                        <strong>Required Skills:</strong>
                        <div className="skills-container">
                            {job.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="job-detail">
                    <strong>Posted:</strong> {new Date(job.createdAt).toLocaleDateString()}
                </div>

                <button className="apply-button">
                    Apply Now
                </button>
            </div>
        </div>
        </>
    )
}

export default JobDetails