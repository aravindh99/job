# 🚀 Job Board Web Application

A modern, full-stack job board application built with React and Node.js. This project allows users to browse job listings, view detailed job information, and post new job opportunities.

## 📸 Demo

🔗 **Live Demo**: [Job Board App](https://job-ara.vercel.app/)  
🔗 **API Endpoint**: [Backend API](https://job-nx85.onrender.com)

## ✨ Features

### 🎯 Core Functionality
- **Browse Jobs**: View all available job listings in a responsive grid layout
- **Job Details**: Click on any job to see comprehensive details including skills, company info, and job requirements
- **Post Jobs**: Create new job listings with a user-friendly form and real-time validation
- **Responsive Design**: Fully responsive interface

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **CSS3** - Modern styling with Grid and Flexbox
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas (Cloud)

## 📁 Project Structure

```
job-board/
├── frontend/                   # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── Pages/             # Page components
│   │   ├── services/          # API service functions
│   │   └── index.css          # Global styles
│   ├── public/
│   └── package.json
├── backend/                    # Node.js backend API
│   ├── server.js              # Main server file
│   ├── .env                   # Environment variables
│   └── package.json
├── .gitignore
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for database)

### 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/job-board.git
cd job-board
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file with your MongoDB connection string
echo "MONGO_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm start
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install

# Create environment file for local development
echo "VITE_API_URL=http://localhost:5000" > .env.local

# Start the frontend development server
npm run dev
```

4. **Access the Application**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 🌐 API Endpoints

### Jobs API
- `GET /jobs` - Retrieve all job listings
- `GET /jobs/:id` - Retrieve a specific job by ID
- `POST /jobs` - Create a new job listing

### Request/Response Examples

**GET /jobs**
```json
[
  {
    "_id": "64f8a1b2c3d4e5f6789",
    "title": "Frontend Developer",
    "company": "Tech Corp",
    "description": "We are looking for a skilled frontend developer...",
    "payStatus": "Paid",
    "jobType": "Full-time",
    "skills": ["React", "JavaScript", "CSS"],
    "location": "Remote",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
```

**POST /jobs**
```json
{
  "title": "Backend Developer",
  "company": "StartupXYZ",
  "description": "Join our team as a backend developer...",
  "payStatus": "Paid",
  "jobType": "Full-time",
  "skills": ["Node.js", "MongoDB", "Express"],
  "location": "New York, NY"
}
```
## 🧪 Testing

### Manual Testing Checklist
- [ ] Browse job listings
- [ ] View individual job details
- [ ] Post a new job with valid data
- [ ] Test form validation with invalid data
- [ ] Test responsive design on different screen sizes
- [ ] Verify API endpoints with tools like Postman

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aravindh**
- GitHub: [@Aravindh](https://github.com/aravindh99)

⭐ **Star this repository if you found it helpful!**