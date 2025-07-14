import React, {useState} from 'react'
import Footer from './components/Ex11/Footer'
import Content from './components/Ex11/Content'
import Header from './components/Ex11/Header'
import { ThemeContext } from '../src/context/Ex11ThemeContext'
import './style/ex11.css'

const App11 = () => {
    // state생성 => isDark => 초기값(false)
	const [isDark, setIsDark] = useState(false);

    return (
		// 만들어놓은 컨텍스트를 요소위에 엎어주기
		// value속성 안에 스테이트, 스테이트 함수 넣기
		// Provider속성
      	<div className='page'>
			{/* 하위 컴포넌트 3개 불러오기 */}
			<ThemeContext.Provider value={{isDark, setIsDark}}>
				{/* 하위 컴포넌트 불러오기 */}
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</ThemeContext.Provider>
		</div>
    )
}

export default App11