import React, { useContext } from "react"
import { ThemeContext } from "../../context/Ex11ThemeContext"

const Footer = () => {
    // 컨텍스트 사용 => value 속성 안에 있는 2개의 값 가져오기
    const [isDark, setIsDark] = useContext(ThemeContext);

    // 함수명: toggleTheme
    // 사용목적은 state안에 있는 값을 계속 반대로 바꾸기 위해서
    const toggleTheme=()=>{
        setIsDark(!isDark);
    }
    return (
        <div>
            <footer
            className="footer"
            style={{
                // 배경색상 => 값을 삼항연산자로 처리
                // state값이 참이라면 black 거짓이라면 lightgray
                backgroundColor: isDark ? 'black' : 'lightgray'
            }}>
                <button className="button" onClick={toggleTheme}>
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>

            </footer>
        </div>
    )
}

export default Footer