# 🎓 Smart Student Help Desk

> **One Platform. One AI Assistant. Complete Student Support.**

Smart Student Help Desk is an AI-powered digital support platform that simplifies university services by bringing student assistance into one intelligent system. It enables students to get instant guidance, verify documents, submit service requests, track application status, and receive personalized notifications without visiting multiple university offices.

---

# 🚀 Features

- 🤖 AI-Powered Student Assistant
- 🧠 University-Specific AI Knowledge (RAG)
- 📄 Smart Document Verification
- 🎫 Service Request & Ticket Tracking
- 📅 Appointment Booking
- 🔔 Personalized Notifications & Reminders
- 📍 University Service Directory
- 📊 AI-Powered Admin Dashboard
- 🔒 Secure User Authentication
- 📱 Responsive & User-Friendly Interface

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, Tailwind CSS |
| Backend | FastAPI (Python) |
| AI | Google Gemini API, LangChain, RAG |
| Database | PostgreSQL |
| Authentication | JWT Authentication |
| Notifications | Firebase Cloud Messaging |
| OCR | Tesseract OCR / Google Vision API |
| Deployment | Vercel, Render |

---

# 🏗 System Architecture

```text
                    Students
                        │
                        ▼
             React Web Application
                        │
                        ▼
              FastAPI Backend Server
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
 Google Gemini API   PostgreSQL     Firebase Cloud
     + RAG            Database        Messaging
        │
        ▼
 University Knowledge Base
 (FAQs, Rules, Notices, Services)
                        │
                        ▼
               AI Response Engine
                        │
                        ▼
          Admin Dashboard & Analytics
```

---

# 🔄 Workflow

```text
Student Login
      │
      ▼
Ask AI Assistant
      │
      ▼
AI Searches University Knowledge Base
      │
      ▼
Provides:
• Correct Office
• Required Documents
• Office Timings
• Application Process
      │
      ▼
Student Can
• Raise Request
• Upload Documents
• Book Appointment
• Track Status
      │
      ▼
Admin Reviews & Updates Request
      │
      ▼
Student Receives Real-Time Notifications
```

---

# 🌟 Key Features

### 🤖 AI Student Assistant
Provides instant guidance for university-related queries using natural language.

### 🧠 University-Specific AI
Uses official university notices, FAQs, and policies to provide accurate responses.

### 📄 Smart Document Verification
Checks uploaded documents for missing or incorrect information before submission.

### 🎫 Ticket Tracking
Allows students to monitor the status of their requests in real time.

### 📅 Appointment Booking
Enables students to schedule office visits and reduce waiting time.

### 🔔 Smart Notifications
Sends reminders for scholarships, fee payments, examinations, and important deadlines.

### 📊 AI Admin Dashboard
Helps university staff manage requests, monitor analytics, and improve service efficiency.

---

# 🎯 Target Users

- 👨‍🎓 Students
- 👨‍💼 Administrative Staff
- 👩‍🏫 Faculty Members
- 🏛️ University Administration

---

# 💡 Why This Project?

Unlike traditional university help desks, Smart Student Help Desk goes beyond answering questions. It combines AI-powered guidance, university-specific knowledge, document verification, request tracking, appointment booking, and personalized notifications into one intelligent platform. This reduces manual work, improves transparency, and delivers a faster and smarter support experience for both students and university staff.

---

# 🌍 Real-World Applications

- 🎓 Universities & Colleges
- 🏫 Educational Institutions
- 🏛️ Government Education Portals
- 🏢 Corporate Employee Help Desks
- 🏥 Healthcare Support Systems
- 🤖 AI-Based Digital Service Platforms

---

# 📦 Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/SandeepKumar865/campus-saathi-ai

cd smart-student-help-desk
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 3️⃣ Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate Virtual Environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux / macOS**

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI Server

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

API Documentation

```
http://localhost:8000/docs
```

---

# 📁 Project Structure

```text
Smart-Student-Help-Desk/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── services/
│   ├── database/
│   ├── utils/
│   ├── main.py
│   └── requirements.txt
│
├── docs/
│
└── README.md
```

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | PostgreSQL |
| Notifications | Firebase |

---

# 📌 Future Scope

- 🎙️ Voice-Based AI Assistant
- 🌐 Multilingual Support
- 📍 Indoor Campus Navigation
- 📱 Mobile Application
- 📄 OCR-Based Document Validation
- 📊 Advanced AI Analytics
- 🎯 Predictive Student Assistance
- 🔗 ERP & University Portal Integration

---

# 👥 Beneficiaries

### 👨‍🎓 Students
- Instant AI guidance
- Faster access to university services
- Easy request tracking

### 👨‍💼 Administrative Staff
- Reduced manual workload
- Faster ticket management
- Automated support

### 👩‍🏫 Faculty Members
- Simplified student assistance
- Less administrative effort

### 🏛️ University Administration
- Centralized service management
- AI-powered insights
- Improved transparency

---
---

# 👨‍💻 Team

**Project:** Smart Student Help Desk  
**Hackathon:** CSJMU AI BOB Hackathon 2026

### Team Members

- Ayush Jaiswal *(Team Leader)*
- Sandeep Kumar
- Saksham Verma
- Om Prakash Maurya

---

## ⭐ Project Vision

> **"Transforming traditional university support into an intelligent, AI-powered digital assistance ecosystem that makes student services faster, simpler, and more accessible."**
