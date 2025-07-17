// React에서 createContext 함수를 임포트합니다.
import { createContext } from 'react'

// ColorContext라는 이름의 새로운 Context 객체를 생성합니다.
// 초기값으로 null을 설정합니다. 이 값은 Provider가 없을 때 사용됩니다.
export const ColorContext = createContext(null);