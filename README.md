# Job Portal – React Application &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![View it live](https://img.shields.io/badge/Live-Demo-blue)](https://job-applictn-portal.netlify.app/)

A modern **Job Portal web application** built using **React.js**, Redux Toolkit, and modern frontend practices. This project simulates a real-world job search and application platform where users can browse jobs, view detailed job descriptions, and apply seamlessly.

---

## 🚀 Project Overview

This project focuses on building a **scalable, component-driven frontend application** similar to real-world job platforms (LinkedIn, Indeed, AngelList). It demonstrates how complex UI states, routing, API integration, and data rendering are handled in production-grade React applications.

---

## ✨ Key Features

* 🔍 **Job Listings & Details**

  * Browse available jobs
  * View detailed job information (location, salary, experience, type, etc.)

* 🧾 **Dynamic Job Description Rendering**

  * Safely parses and renders HTML job descriptions
  * Handles edge cases like `<br>`, links, and text nodes correctly

* 🧠 **State Management with Redux Toolkit**

  * Centralized application state for job applications
  * Tracks applied jobs across routes

* 🧭 **Client-side Routing**

  * Dynamic routes using `react-router-dom`
  * Route-based job detail pages (`/job/:id`)

* 📝 **Job Application Flow**

  * Apply button state changes based on application status
  * Persistent applied-job tracking

* 📱 **Responsive UI**

  * Clean and adaptive layout
  * Reusable UI components with CSS Modules

---

## 🛠 Tech Stack

* **Frontend:** React.js, JavaScript (ES6+)
* **State Management:** Redux Toolkit
* **Routing:** React Router DOM
* **Styling:** CSS Modules, Custom CSS
* **Data Handling:** API integration via RTK Query
* **Utilities:** DOMParser, custom formatters

---

## 🧩 Architecture & Design Decisions

* Component-based architecture for reusability
* Separation of concerns using utilities and slices
* Defensive rendering for async data
* Avoided unsafe HTML rendering practices
* Followed React best practices for performance and correctness

---

## 🧠 Learnings & Takeaways

* Deep understanding of **React rendering lifecycle**
* Handling **void HTML elements** when converting DOM to JSX
* Real-world usage of **Redux Toolkit & RTK Query**
* Dynamic routing and param-based data fetching
* Debugging React runtime errors effectively
* Writing production-safe utility functions
* Improving UX through conditional UI states

---

## 📌 Future Enhancements

* Authentication & user profiles
* Resume upload and tracking
* Saved jobs & filters
* Backend integration for real applications
* Performance monitoring with Web Vitals

---

## 📂 Project Type

**Frontend Project | React.js**

---

## 📎 How to Run Locally

```bash
npm install
npm run dev
```

---

## 👨‍💻 Author

**Kanhaiya Kumar Sahu**
B.Tech – Mathematics & Computing
Indian Institute of Technology, Ropar
