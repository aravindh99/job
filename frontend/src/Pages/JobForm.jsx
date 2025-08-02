import React, { useState } from 'react'
import { createJob } from '../services/api'
import Header from '../components/Header'


const JobForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        description: '',
        payStatus: '',
        jobType: '',
        skills: '',
        location: ''
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        // Company validation
        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required'
        } else if (formData.company.trim().length < 2) {
            newErrors.company = 'Company name must be at least 2 characters'
        } else if (formData.company.trim().length > 100) {
            newErrors.company = 'Company name must be less than 100 characters'
        }

        // Title validation
        if (!formData.title.trim()) {
            newErrors.title = 'Job title is required'
        } else if (formData.title.trim().length < 3) {
            newErrors.title = 'Job title must be at least 3 characters'
        } else if (formData.title.trim().length > 100) {
            newErrors.title = 'Job title must be less than 100 characters'
        }

        // Description validation
        if (!formData.description.trim()) {
            newErrors.description = 'Job description is required'
        } else if (formData.description.trim().length < 20) {
            newErrors.description = 'Description must be at least 20 characters'
        } else if (formData.description.trim().length > 1000) {
            newErrors.description = 'Description must be less than 1000 characters'
        }

        // Pay Status validation
        if (!formData.payStatus) {
            newErrors.payStatus = 'Pay status is required'
        }

        // Job Type validation
        if (!formData.jobType) {
            newErrors.jobType = 'Job type is required'
        }

        // Location validation
        if (!formData.location.trim()) {
            newErrors.location = 'Location is required'
        } else if (formData.location.trim().length < 2) {
            newErrors.location = 'Location must be at least 2 characters'
        } else if (formData.location.trim().length > 100) {
            newErrors.location = 'Location must be less than 100 characters'
        }

        // Skills validation (optional but if provided, validate)
        if (formData.skills.trim()) {
            const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
            if (skillsArray.length > 10) {
                newErrors.skills = 'Maximum 10 skills allowed'
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        // Validate form before submission
        if (!validateForm()) {
            setMessage('Please fix the errors below')
            return
        }

        setLoading(true)

        try {
            const jobData = {
                company: formData.company.trim(),
                title: formData.title.trim(),
                description: formData.description.trim(),
                payStatus: formData.payStatus,
                jobType: formData.jobType,
                location: formData.location.trim(),
                skills: formData.skills.trim()
                    ? formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
                    : []
            }

            await createJob(jobData)
            setMessage('Job posted successfully!')
            setFormData({
                company: '',
                title: '',
                description: '',
                payStatus: '',
                jobType: '',
                skills: '',
                location: ''
            })
            setErrors({})
        } catch (error) {
            setMessage('Failed to post job. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header/>
            <div className="job-form-container">
                <h1 className="page-title">Post a Job</h1>

            {message && <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>{message}</div>}

            <form onSubmit={handleSubmit} className="job-form">
                <div className="form-group0">
                    <label className="form-label">Company:</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        maxLength="100"
                        className={`form-input ${errors.company ? 'error' : ''}`}
                    />
                    {errors.company && <span className="error-message">{errors.company}</span>}
                </div>

                <div className="form-group1">
                    <label className="form-label">Job Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        maxLength="100"
                        className={`form-input ${errors.title ? 'error' : ''}`}
                    />
                    {errors.title && <span className="error-message">{errors.title}</span>}
                </div>

                <div className="form-group2">
                    <label className="form-label">Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        maxLength="1000"
                        className={`form-textarea ${errors.description ? 'error' : ''}`}
                    />
                    <div className="char-count">{formData.description.length}/1000</div>
                    {errors.description && <span className="error-message">{errors.description}</span>}
                </div>

                <div className="form-group3">
                    <label className="form-label">Pay Status:</label>
                    <select
                        name="payStatus"
                        value={formData.payStatus}
                        onChange={handleChange}
                        required
                        className={`form-select ${errors.payStatus ? 'error' : ''}`}
                    >
                        <option value="">Select Pay Status</option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Negotiable">Negotiable</option>
                    </select>
                    {errors.payStatus && <span className="error-message">{errors.payStatus}</span>}
                </div>

                <div className="form-group4">
                    <label className="form-label">Job Type:</label>
                    <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                        className={`form-select ${errors.jobType ? 'error' : ''}`}
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>
                    </select>
                    {errors.jobType && <span className="error-message">{errors.jobType}</span>}
                </div>

                <div className="form-group5">
                    <label className="form-label">Skills (comma separated, max 10):</label>
                    <input
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="React, Node.js, MongoDB"
                        className={`form-input ${errors.skills ? 'error' : ''}`}
                    />
                    {errors.skills && <span className="error-message">{errors.skills}</span>}
                </div>

                <div className="form-group6">
                    <label className="form-label">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        maxLength="100"
                        className={`form-input ${errors.location ? 'error' : ''}`}
                    />
                    {errors.location && <span className="error-message">{errors.location}</span>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`apply-button ${loading ? 'loading' : ''}`}
                >
                    {loading ? 'Posting...' : 'Post Job'}
                </button>
            </form>
        </div>
        </>
    )
}

export default JobForm