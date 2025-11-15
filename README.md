Todo List
A simple yet powerful to-do list application built with React and Vite. Stay organized and productive with this lightweight task management app featuring intuitive task creation, completion tracking, and a clean, modern interface.

🔗 Live Demo: todolist-green-eight.vercel.app

Features
✅ Task Management

Create, read, update, and delete tasks

Mark tasks as complete or incomplete

Track task completion status

📝 Simple & Intuitive Interface

Clean, minimalist design for focused productivity

Easy-to-use task input and management

Visual feedback for completed tasks

⚡ Fast & Responsive

Lightning-fast performance with Vite

Smooth user experience with Hot Module Replacement (HMR)

Responsive design that works on all devices

💾 Persistent Storage

Tasks persist across browser sessions

Local storage integration for data persistence

🎨 Modern UI

Clean and minimalist design

Smooth transitions and interactions

User-friendly interface

Tech Stack
Frontend Framework: React

Build Tool: Vite

Styling: CSS

Deployment: Vercel

Version Control: Git & GitHub

Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository:

bash
git clone https://github.com/mfernandez0928/todolist.git
cd todolist
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser and navigate to:

text
http://localhost:5173
Build for Production
bash
npm run build
Preview Production Build
bash
npm run preview
Project Structure
text
todolist/
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
How to Use
Add Task: Type your task in the input field and press Enter or click the Add button

Mark Complete: Click on a task to mark it as completed

Delete Task: Click the delete button to remove a task

View Tasks: All your tasks are displayed in a clean list format

Key Features Explained
Task Creation
Simply type your task and add it to your list. The app provides instant feedback and updates.

Task Completion
Click on any task to toggle its completion status. Completed tasks are visually distinguished from pending tasks.

Task Deletion
Remove tasks you no longer need with a single click. The interface provides confirmation to prevent accidental deletions.

Responsive Design
Works seamlessly on desktop, tablet, and mobile devices for productivity on the go.

Development Highlights
Vite Performance: Extremely fast development experience with instant HMR

React Best Practices: Functional components and hooks for clean, maintainable code

Component-Based Architecture: Modular and reusable components

CSS Styling: Custom CSS for unique visual design

Simple State Management: Efficient state handling with React hooks

Technologies Explained
React
A JavaScript library for building user interfaces with reusable components. Perfect for dynamic, interactive applications like this to-do list.

Vite
A modern build tool that provides lightning-fast development experience and optimized production builds. Ideal for React applications.

Future Enhancements
Task categories and filtering

Due dates and reminders

Task prioritization (High, Medium, Low)

Search and filter functionality

Dark mode support

Local storage persistence improvements

Export tasks to different formats

Recurring tasks

Task notes and descriptions

Performance Optimizations
Optimized bundle size with Vite

Fast refresh during development

Minimal dependencies for faster load times

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Troubleshooting
Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the console output for the correct URL.

Build Issues
Clear your node_modules and reinstall dependencies:

bash
rm -rf node_modules
npm install
npm run build
Tasks Not Persisting
Ensure your browser allows local storage. Check your browser's privacy settings if tasks aren't being saved.

Contributing
Contributions are welcome! Feel free to submit a Pull Request with improvements.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is open source and available under the MIT License.

Author
Mark Fernandez

GitHub: @mfernandez0928

Portfolio: [Your Portfolio Link]

Support
If you find this project helpful, please consider giving it a ⭐ on GitHub!

For issues, questions, or suggestions, please open an issue on the GitHub repository.

Demo
Try the live app: todolist-green-eight.vercel.app
