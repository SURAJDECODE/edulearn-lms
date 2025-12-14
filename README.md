# EduLearn - Learning Management System

A full-stack MERN Learning Management System built for Ecera System LLC internship screening assignment.

## 🎯 Project Overview

EduLearn is a comprehensive e-learning platform that enables administrators to create and manage courses while students can browse, enroll, and access educational content.

## 🚀 Features

### Admin Features
- ✅ Complete course management (Create, Read, Update, Delete)
- ✅ Video lecture upload and management
- ✅ User management with role assignment
- ✅ Dashboard with statistics
- ✅ File upload system for course thumbnails and videos

### Student Features
- ✅ Browse available courses
- ✅ View detailed course information
- ✅ Enroll in courses (payment integration)
- ✅ Access purchased course lectures
- ✅ Track learning progress
- ✅ User dashboard with enrolled courses

### Authentication & Security
- ✅ JWT-based authentication
- ✅ Email OTP verification
- ✅ Password encryption (bcrypt)
- ✅ Role-based access control (Admin/Student)

## 💻 Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Multer (file uploads)
- Nodemailer (email OTP)

**Database:**
- MongoDB Atlas

**Payment Integration:**
- Razorpay

## 📁 Project Structure
```
edulearn-lms/
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── admin/
│   │   └── App.jsx
│   └── package.json
├── server/            # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── index.js
├── uploads/           # Uploaded files directory
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Backend Setup
```bash
cd server
npm install
```

Create `.env` file in server directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_Sec=your_jwt_secret
ActivationSecret=your_activation_secret
Razorpay_Key=your_razorpay_key
Razorpay_Secret=your_razorpay_secret
Gmail=your_email@gmail.com
Password=your_app_password
```

Start backend:
```bash
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`
Backend runs on: `http://localhost:5000`

## 📸 Screenshots

[Add demo screenshots here after uploading]

## 🎥 Demo Video

[Demo Video Link - Add your video link]

## 👨‍💻 Developer

**Suraj Anand**
- Email: surazz3275@gmail.com
- LinkedIn: [Your LinkedIn]
- Location: Asansol, West Bengal, India

## 📄 License

This project was created as part of the Ecera System LLC MERN Internship screening assignment.

## 🙏 Acknowledgments

- Ecera System LLC for the internship opportunity
- MERN Stack Community

---

**Note:** This is an educational project built for internship screening purposes.
```

Click **"Commit new file"**

---

### **Step 5: Copy Your GitHub Repository Link**

Your GitHub repo URL will be:
```
https://github.com/YOUR_USERNAME/edulearn-lms
```

Example:
```
https://github.com/surajxyz/edulearn-lms
```

---

## 📧 **Update Your Email With GitHub Link**

In your email body, find this section:
```
🔗 Source Code Repository:
GitHub: [Add your GitHub repository link here if you have one]
```

**Replace with:**
```
🔗 Source Code Repository:
GitHub: https://github.com/YOUR_USERNAME/edulearn-lms
Complete source code with setup instructions available in the repository.
```

---

## ⚠️ **IMPORTANT - Security Tips:**

### **DO NOT Upload These Files:**

1. **`.env`** file (contains passwords!) - Use `.env.example` instead
2. **`node_modules`** folders (too large, can be installed via npm)
3. **`uploads`** folder with actual uploaded files (optional)

### **Create `.gitignore` File:**

In project root, create `.gitignore`:
```
# Dependencies
node_modules/
frontend/node_modules/
server/node_modules/

# Environment variables
.env
server/.env

# Uploads
uploads/
*.mp4
*.jpg
*.png

# Build
frontend/dist/
frontend/build/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
