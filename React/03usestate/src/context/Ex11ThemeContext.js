// React에서 createContext 함수를 임포트합니다.
import { createContext } from 'react'

// ThemeContext라는 이름의 새로운 Context 객체를 생성합니다.
// 이 Context는 다크 모드 테마 상태를 공유하는 데 사용됩니다.
export const ThemeContext = createContext(null);