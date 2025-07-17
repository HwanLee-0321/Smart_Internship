// React에서 createContext 함수를 임포트합니다.
import { createContext } from 'react'

// TodoContext라는 이름의 새로운 Context 객체를 생성합니다.
// 이 Context는 할 일 목록(Todo List) 관련 데이터와 함수를 공유하는 데 사용됩니다.
export const TodoContext = createContext(null);