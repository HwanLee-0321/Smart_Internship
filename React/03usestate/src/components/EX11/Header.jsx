import React, {useContext} from 'react'
// ThemeContext를 임포트합니다.
import {ThemeContext} from '../../context/Ex11ThemeContext'


const Header = () => {
    // useContext 훅을 사용하여 ThemeContext의 isDark 값을 가져옵니다.
    const {isDark} = useContext(ThemeContext);
    return (
        <div
        className='header'
        style={{
        // isDark 값에 따라 배경색과 글자색을 동적으로 변경합니다.
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
		}}>
            <h1>스마트인재개발원</h1>

        </div>
    )
}

export default Header