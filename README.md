# QuizMate – Frontend Quiz Application

A pixel-perfect, accessible, and animated quiz application built as part of a frontend assignment.  
The project focuses on UI accuracy, smooth interactions, keyboard accessibility, and clean React architecture.

---

## 🚀 Live Demo

🔗 https://quiz-app-frontend-assignment.vercel.app/

---

## 🛠 Tech Stack

- **Framework:** React + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Custom CSS (no UI libraries used)  
- **State Management:** React Hooks  
- **Animations:** CSS & JavaScript  
- **Deployment:** Vercel  

---

## ✨ Key Features

- Pixel-perfect UI matching the provided Figma design  
- Smooth quiz navigation with progress tracking  
- Rolling score animation on results screen  
- Animated cat paw encouragement element  
- Fully keyboard-accessible (Enter / Arrow navigation)  
- ARIA roles and live regions for screen readers  
- Responsive layout across screen sizes  

---

## 📁 Project Structure

```text
quiz-app-frontend-assignment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CatPaw.tsx
│   │   ├── RollingNumber.tsx
│   │   └── Results.tsx
│   ├── pages/
│   │   ├── Start.tsx
│   │   ├── Quiz.tsx
│   │   ├── Review.tsx
│   │   └── Results.tsx
│   ├── data/
│   │   └── questions.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

```


## ⚙️ Setup Instructions

Follow the steps below to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aditya1416/quiz-app-frontend-assignment.git

cd quiz-app-frontend-assignment

2️⃣ Navigate to Frontend Directory:
cd frontend

3️⃣ Install Dependencies:
npm install

4️⃣ Start Development Server:
npm run dev

5️⃣ Open in Browser:
http://localhost:5173

6️⃣ Build for Production (Optional):
npm run build
```
---

## ✅ Functional Requirements

The application fulfills all functional requirements outlined in the assignment:

- Users can start the quiz from the landing screen
- Questions are displayed **one at a time**
- Each question supports **multiple-choice answers**
- Users can navigate using **Next** and **Previous** controls
- Quiz progress is visually indicated with a progress bar
- Users can complete the quiz and view final results
- Final score is displayed as a percentage
- Users can retry the quiz or return to the home screen
- Users can review all answers after quiz completion

---

## 🎯 Key Features Implemented

- Pixel-perfect UI aligned with the provided design
- Smooth transitions and animations
- Animated rolling score on results screen
- Interactive “Cat Paw – Good Luck” visual element
- Keyboard navigation support (Tab / Enter)
- Fully responsive layout
- Clean component-based architecture
- Strong TypeScript typing across components

---

## ♿ Accessibility Considerations

Accessibility was intentionally incorporated into the design:

- Semantic HTML structure
- ARIA roles and labels for screen readers
- Keyboard-only navigation supported
- Visible focus indicators preserved
- Live regions for dynamic score updates
- Buttons include accessible labels

---

## 📐 UI & Design Decisions

- Custom CSS used instead of UI libraries to ensure pixel accuracy
- Consistent spacing, typography, and color system
- Layout optimized for both desktop and smaller screens
- Minimalistic and distraction-free user interface

---

## ⚙️ Technical Assumptions

- Quiz data is static and client-side (as per assignment scope)
- Single-page application without routing libraries
- No backend or database integration required
- State managed locally using React Hooks
- Assets are bundled with the frontend application

---

## ⏱️ Time Spent

Approximately **10–12 hours**, including:

- UI matching & styling
- Component design and refactoring
- Animation tuning
- Accessibility improvements
- TypeScript debugging
- Deployment and build fixes

---

## 🚀 Deployment

The application is deployed on **Vercel** and automatically redeploys on every push to the `main` branch.

**Live Demo:**  
https://quiz-app-frontend-assignment.vercel.app/

---

## 👤 Author

**Aditya Sharma**  
Frontend Developer  
GitHub: https://github.com/Aditya1416 
email: aditya161499@gmail.com
SRM Institute of Science and Technology, Kattankulathur










