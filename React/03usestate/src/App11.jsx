import React, {useState} from 'react'
// 하위 컴포넌트와 Context, CSS 파일을 임포트합니다.
import Footer from './components/Ex11/Footer'
import Content from './components/Ex11/Content'
import Header from './components/Ex11/Header'
import { ThemeContext } from '../src/context/Ex11ThemeContext'
import './style/ex11.css'

const App11 = () => {
    // 'isDark' state를 선언하고, 초기값을 false로 설정합니다. (다크 모드 여부)
	const [isDark, setIsDark] = useState(false);

    return (
		// ThemeContext.Provider를 사용하여 isDark와 setIsDark를 하위 컴포넌트에 제공합니다.
      	<div className='page'>
			<ThemeContext.Provider value={{isDark, setIsDark}}>
				{/* 하위 컴포넌트들을 렌더링합니다. */}
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</ThemeContext.Provider>
		</div>
    )
}

export default App11