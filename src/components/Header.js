import React from 'react'

// Components 
import Menu from './Menu'


import backgroundSlide from '../assets/img/background.png'
import backgroundSlideMovil from '../assets/img/background-movil.png'

const Header = () => (
    <header className="header">
        <div className="header__slide">
            <div className="mouse">
            </div>
        </div>

        <Menu />
    </header>
)

export default Header;