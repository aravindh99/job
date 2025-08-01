const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://job-nx85.onrender.com'

//fetching all jobs
export const fetchAllJobs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`)
        if (!response.ok) {
            throw new Error('Failed to fetch jobs')
        }
        const jobs = await response.json()
        return jobs
    } catch (error) {
        console.error('Error fetching jobs:', error)
        throw error
    }
}

// Fetch single job by ID
export const fetchJobById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch job')
        }
        const job = await response.json()
        return job
    } catch (error) {
        console.error('Error fetching job:', error)
        throw error
    }
}

// Create new job
export const createJob = async (jobData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData)
        })
        if (!response.ok) {
            throw new Error('Failed to create job')
        }
        const newJob = await response.json()
        return newJob
    } catch (error) {
        console.error('Error creating job:', error)
        throw error
    }
}