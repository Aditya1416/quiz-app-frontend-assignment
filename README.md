# QuizMate – Pixel-Perfect Quiz Application

A modern, interactive quiz application built with **React + TypeScript**, designed to match the provided **Figma UI pixel-perfectly**, with smooth animations, accessibility compliance, and clean state management.

🔗 **Live Demo:** https://quiz-app-frontend-assignment.vercel.app/  
📦 **Repository:** https://github.com/Aditya1416/quiz-app-frontend-assignment

---

## ✨ Key Features

- 🎯 **Pixel-perfect UI** aligned precisely with the provided Figma design
- 🎨 Smooth hover states and transitions
- 🐾 Contextual **cat paw animation** for enhanced user engagement
- 🔢 **Rolling score animation** on results screen
- ♿ **WCAG 2.1 accessibility compliant**
  - Keyboard navigation
  - ARIA roles and labels
  - Focus management
- 🔁 Quiz retry, review answers, and home navigation
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Custom CSS (no UI libraries)
- **State Management:** React Hooks
- **Deployment:** Vercel

---

## 📂 Project Structure

frontend/
├── src/
│ ├── components/
│ │ ├── CatPaw.tsx
│ │ ├── RollingNumber.tsx
│ │ └── Results.tsx
│ ├── pages/
│ │ ├── Start.tsx
│ │ ├── Quiz.tsx
│ │ └── Review.tsx
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
├── public/
├── index.html
├── package.json
└── tsconfig.json


---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Aditya1416/quiz-app-frontend-assignment.git
cd quiz-app-frontend-assignment/frontend
Install dependencies:
npm install

Run the development server:
npm run dev

Open your browser at:
http://localhost:5173

Build for production
npm run build

♿ Accessibility Considerations

Semantic HTML structure

ARIA attributes for screen readers

Keyboard-only navigation supported

Focus indicators preserved

Live regions for dynamic score updates

🧠 Assumptions Made

Quiz data is static and client-side (as per assignment scope)

Single-page application without routing libraries

Custom CSS preferred over component frameworks to ensure pixel accuracy

⏱️ Time Spent

~10–12 hours, including:

UI matching & styling

Animation tuning

Accessibility improvements

Debugging TypeScript + deployment issues

🚀 Deployment

The application is deployed on Vercel and automatically redeploys on every push to the main branch.

Live URL:https://quiz-app-frontend-assignment.vercel.app/

👤 Author

Aditya Sharma
Frontend Developer
GitHub: https://github.com/Aditya1416
Student SRM Institute of Science and Technology,Kattankulanthur
Reg no: RA2211026010295
