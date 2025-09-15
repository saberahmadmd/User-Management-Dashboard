# 🚀 User Management Dashboard  

A full-stack web application to perform CRUD (**Create, Read, Update, Delete**) operations on a list of users.  

This project is built as part of the **FullStack Assignment** and demonstrates strong skills in **React.js (frontend)** and **Node.js + Express + SQLite (backend)** development.  


## 📌 Features  

- 👤 **User Management** – Add, view, edit, and delete users.  
- 📂 **SQLite Database** – Lightweight and file-based persistence.  
- 🔗 **RESTful APIs** – Cleanly structured GET, POST, PUT, DELETE endpoints.  
- 🎨 **Responsive UI** – Styled with Flexbox & media queries for all devices.  
- ✅ **Form Validation** – Both client-side and server-side validation included.  
- ⚡ **Modern React** – React Router, Axios, functional components, hooks.  


## 🛠️ Tech Stack  

**Frontend:**  
- React.js  
- React Router  
- Axios  
- CSS (Flexbox + Media Queries for responsiveness)  

**Backend:**  
- Node.js  
- Express.js  
- SQLite3  
- CORS  


## 📂 Project Structure  
user-management-dashboard/
├── backend/
│ ├── database.js # Database connection and setup
│ ├── index.js # Main Express server file
│ └── routes/
│ └── users.js # API routes for users
├── frontend/
│ └── src/
│ ├── components/ # Reusable React components
│ ├── pages/ # Page components
│ ├── App.js # Main component with routing
│ └── App.css # Global styles
└── README.md # Project documentation


## ⚙️ Installation & Setup  

### 
🔹 Backend Setup  
# Navigate to backend
cd backend
# Install dependencies
npm install
# Start backend server
node index.js

🔹 Frontend Setup
# Navigate to frontend
cd frontend
# Install dependencies
npm install
# Start frontend app
npm start

🌐 API Endpoints
Method	Endpoint	Description

GET	/api/users	Get all users
GET	/api/users/:id	Get a single user by ID
POST	/api/users	Add a new user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user

📖 How It Works
Backend (Express + SQLite) exposes CRUD APIs.
Frontend (React) consumes these APIs using Axios.
Data is rendered dynamically, and UI updates instantly after operations.
Responsive design ensures usability across desktop, tablet, and mobile devices.

🚀 Deployment
Frontend: [Vercel]
Backend: [Render]
Database: SQLite (bundled file)

📜 Submission Checklist
✅ GitHub Repository with clean commits
✅ README.md (this file) with setup instructions

👨‍💻 Author
Md Saber Ahmad
🎓 MCA Graduate | 💻 MERN Stack Developer