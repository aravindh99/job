import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app=express()
app.use(cors())

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

  const JobSchema = new mongoose.Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    payStatus: { type: String, required: true }, 
    jobType: { type: String, required: true },   
    skills: [{ type: String }],
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });

  const job = mongoose.model('Job', JobSchema)

  app.get('/jobs', async (req, res) => {
    try {
      const jobs = await job.find().sort({ createdAt: -1 })
      res.json(jobs)
    } catch (err) {
      res.status(500).json({ error: 'Server error while fetching jobs.' })
    }
  })


app.get('/jobs/:id',async (req,res) =>{

    try {
        const singleJob = await job.findById(req.params.id);
        if (!singleJob) return res.status(404).json({ error: 'Job not found' })
        res.json(singleJob)
      } catch (err) {
        res.status(500).json({ error: 'Server error while fetching job.' })
      }
}
)

app.post('/jobs', async (req, res) => {
    const { company, title, description, payStatus, jobType, skills, location } = req.body;
  
   
    if (!company || !title || !description || !payStatus || !jobType || !location) {
      return res.status(400).json({ error: 'All required fields must be filled.' });
    }
  
    try {
      const newJob = new job({ company, title, description, payStatus, jobType, skills, location });
      const savedJob = await newJob.save();
      res.status(201).json(savedJob);
    } catch (err) {
      res.status(500).json({ error: 'Server error while saving job.' });
    }
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));