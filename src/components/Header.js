import React from 'react'

// Components 
import Menu from './Menu'

const Header = () => (
    <header className="header" id="header">
        <div className="header__slide">
            <div className="mouse">
            </div>
        </div>

        <Menu />
    </header>
)

export default Header;