import React, { useContext } from "react"
// ThemeContext를 임포트합니다.
import { ThemeContext } from "../../context/Ex11ThemeContext"

const Footer = () => {
    // useContext 훅을 사용하여 ThemeContext의 isDark와 setIsDark를 가져옵니다.
    const {isDark, setIsDark} = useContext(ThemeContext);

    // toggleTheme 함수: isDark state의 값을 반대로(true <-> false) 변경합니다.
    const toggleTheme=()=>{
        setIsDark(!isDark);
    }
    return (
        <div>
            <footer
                className="footer"
                style={{
                    // isDark 값에 따라 배경색을 동적으로 변경합니다.
                    // true이면 'black', false이면 'lightgray'
                    backgroundColor: isDark ? 'black' : 'lightgray'
                }}
            >
                <button className="button" onClick={toggleTheme}>
                    {/* isDark 값에 따라 버튼 텍스트를 변경합니다. */}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
            </footer>
        </div>
    )
}

export default Footer