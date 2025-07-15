import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App2.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // BrowserRouter -> 라우터를 쓸 수 있게끔 연결
  // App 컴포넌트 안에서 라우트 경로를 컴포넌트로 맵핑해서 동작되느느 구조로 만들 예정
  <BrowserRouter> 
    <App />
  </BrowserRouter>
  // </StrictMode>,
)
