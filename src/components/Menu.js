import React, { useState } from 'react'

// Assets
import logo from '../assets/img/logo.png'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <div className={openMenu ? "menu is-open" :  "menu"}>
            <div className="menu__logo" >
                <img src={logo} alt="Tipografía la Palma" />
            </div>

            <menu className="menu__items">
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#nosotros">NOSOTROS</a></li>
                    <li><a href="#servicios">SERVICIOS</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                    <li className="rs">
                        <a href="tel:3154004265" className="rs__item-whatsap">
                            <i className="fas fa-phone-volume"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=573125298438" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="mailto:alejoastudillo2@gmail.com">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </menu>

            <a className="menu__button" href="#0" onClick={ () => setOpenMenu(!openMenu) }>
                <span className="menu__button-icon"></span>
            </a>
        </div>
    )
}

export default Menu;