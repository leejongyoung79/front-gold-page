import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from 'next-themes'

// 이미 선언된 App을 다시 선언하지 않도록 코드를 하나로 합쳤습니다.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ThemeProvider로 App을 감싸서 다크모드 기능을 활성화합니다 */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)