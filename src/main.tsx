import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// src/main.tsx (예시)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from 'next-themes' // 추가

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ThemeProvider로 App을 감싸줍니다 */}
    <ThemeProvider attribute="class" defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)