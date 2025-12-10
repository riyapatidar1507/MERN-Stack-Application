# 🚀 MERN-Stack-Application

A full-stack MERN application featuring a React (Vite) frontend and a Node.js / Express / MongoDB backend.

## 🔗 Frontend Routes
Public

/ – Landing Page (Hero, About, Why Choose Us, Projects, Clients, Newsletter)

Admin

/admin – Admin Panel to manage projects, clients, contacts, and newsletter data

## 🔌 Backend API (all routes prefixed with /api)
### 📁 Projects – /api/projects

GET / – Retrieve all projects

POST / – Create a new project (supports image upload)

### 👥 Clients – /api/clients

GET / – Retrieve all clients

POST / – Create a new client (image upload supported)

### 📨 Contacts – /api/contacts

GET / – Retrieve all contact submissions

POST / – Submit a new contact request

### 📰 Newsletter – /api/newsletter

GET / – Get all newsletter subscribers

POST / – Add a new subscription

### 🛠 Tech Stack
- Frontend
- React
- Vite
- React Router
- Backend
- Node.js
- Express.js
- MongoDB
- Multer (image uploads)
- Database
- MongoDB / MongoDB Atlas

## ▶️ Getting Started
### Backend
cd backend

npm install

npm start

### Frontend
cd frontend/vite-project

npm install

npm run dev

## 🌐 Access Application

App: http://localhost:5173/

Admin Panel: http://localhost:5173/admin
