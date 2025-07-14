import React, {useContext} from 'react'
import {ThemeContext} from '../../context/Ex11ThemeContext'


const Header = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    return (
        <div
        className='header'
        style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
		}}>
            <h1>스마트인재개발원</h1>

        </div>
    )
}

export default Header