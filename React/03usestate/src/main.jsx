// React의 StrictMode와 react-dom/client의 createRoot를 임포트합니다.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 전역 CSS 파일을 임포트합니다.
import './index.css'
// 렌더링할 메인 앱 컴포넌트를 임포트합니다. (현재 App12로 설정됨)
import App from './App12.jsx'

// public/index.html 파일에 있는 id가 'root'인 DOM 요소를 가져와 React 루트를 생성합니다.
createRoot(document.getElementById('root')).render(
  // StrictMode는 잠재적인 문제를 알아내기 위한 도구로, 개발 모드에서만 활성화됩니다.
  <StrictMode>
    {/* App 컴포넌트를 렌더링합니다. */}
    <App />
  </StrictMode>,
)
