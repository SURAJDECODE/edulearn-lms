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

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/edulearn-lms.git
cd edulearn-lms
```

### Step 2: Backend Setup
```bash
cd server
npm install
```

Create `.env` file in the `server` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_Sec=your_jwt_secret_key
ActivationSecret=your_activation_secret_key
Razorpay_Key=your_razorpay_key
Razorpay_Secret=your_razorpay_secret
Gmail=your_gmail_address
Password=your_gmail_app_password
```

Start the backend server:
```bash
npm start
```

Backend will run on: `http://localhost:5000`

### Step 3: Frontend Setup

Open a new terminal and navigate to frontend:
```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Step 4: Create Admin Account

1. Register a new account through the application
2. Manually update the user role in MongoDB to "admin" for the first admin user
3. Or use the default admin credentials if seeded

## 🔑 Environment Variables

Required environment variables for the backend:

| Variable | Description |
|----------|-------------|
| PORT | Server port (default: 5000) |
| MONGO_URI | MongoDB Atlas connection string |
| JWT_Sec | Secret key for JWT token generation |
| ActivationSecret | Secret key for account activation |
| Razorpay_Key | Razorpay API key for payments |
| Razorpay_Secret | Razorpay secret key |
| Gmail | Gmail address for sending OTP emails |
| Password | Gmail app password (not regular password) |

## 📝 Usage

### Admin Login
1. Navigate to `/login`
2. Login with admin credentials
3. Access admin dashboard to manage courses, lectures, and users

### Student Registration
1. Navigate to `/register`
2. Complete registration form
3. Verify email with OTP
4. Browse and enroll in courses

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Verify MONGO_URI in `.env` file
- Check MongoDB Atlas network access (whitelist IP)
- Ensure database user has proper permissions

**Email OTP Not Sending:**
- Use Gmail App Password (not regular password)
- Enable "Less secure app access" in Gmail settings
- Check Gmail and Password in `.env` file

**File Upload Issues:**
- Ensure `uploads` directory exists in server folder
- Check file size limits (default: 50MB)
- Verify Multer configuration

**Port Already in Use:**
- Change PORT in `.env` file
- Or kill the process using the port

## 👨‍💻 Developer

**Suraj Anand**
- Email: surazz3275@gmail.com

## 📄 License

This project was created as part of the Ecera System LLC MERN Internship screening assignment.

---

**Note:** This is an educational project built for internship screening purposes. Not intended for production use without proper security audits and enhancements.
