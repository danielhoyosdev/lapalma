import React from 'react'

// Assets
import LogoWhite from '../assets/img/logo-white.png';

const Footer = () => (
    <footer className="footer">
        <div className="footer__container container">
            <div className="bussines">
                <img src={LogoWhite} atl="Tipografía la palma" className="footer__container-img"/>

                <div className="copyright">
                    COPYRIGHT &copy; 2020 TIPOGRAFÍA LA PALMA
                </div>
            </div>

            <div className="rs">
                <a href="tel:3154004265" className="rs__item-whatsap">
                    <i className="fas fa-phone-volume"></i> Llámanos
                </a>
                <a href="https://api.whatsapp.com/send?phone=573154004265" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> Whatsapp
                </a>
                <a href="mailto:alejoastudillo2@gmail.com">
                    <i className="far fa-envelope"></i> Email
                </a>
            </div>
        </div>
    </footer>
)

export default Footer;