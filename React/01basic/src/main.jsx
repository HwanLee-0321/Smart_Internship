import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// 상대경로를 작성해서 파일의 위치를 확인 후 임포트하기
import App from './App3.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>
)
