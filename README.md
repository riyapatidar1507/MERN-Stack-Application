# MERN-Stack-Application
A full-stack MERN application featuring a React (Vite) frontend and Node.js/Express/MongoDB backend.

🔗 Frontend Routes
Public:
"/" – Landing Page (Hero, About, Why Choose Us, Projects, Clients, Newsletter)

Admin
"/admin" – Admin Panel to manage projects, clients, contacts, and newsletter data.

🔌 Backend API (all prefixed with /api)
Projects – /api/projects
GET / – Get all projects
POST / – Create project (with image upload)

Clients – /api/clients
GET / – Get all clients
POST / – Create client (with image upload)

Contacts – /api/contacts
GET / – Get all submissions
POST / – Submit contact form

Newsletter – /api/newsletter
GET / – Get all subscribers
POST / – Subscribe to newsletter


🛠 Tech Stack
Frontend: React, Vite, React Router
Backend: Node.js, Express, MongoDB, Multer
Database: MongoDB

▶️ Getting Started
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend/vite-project
npm install
npm run dev


App: http://localhost:5173/
Admin: http://localhost:5173/admin
