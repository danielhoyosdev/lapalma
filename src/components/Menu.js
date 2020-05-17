import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

// Assets
import logo from '../assets/img/logo.png'

class Menu extends React.Component {
    constructor (props) {
        super(props)
        this.menuRef = React.createRef();
        this.state = {
            openMenu : false,
            offsetTopMenu: null,
            stylesMenu: {},
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.handleClickLink = this.handleClickLink.bind(this)
        
    }

    handleScroll () {
        if(!this.state.offsetTopMenu) {
            const offsetTopMenu = this.menuRef.current.offsetTop;
            this.setState({ offsetTopMenu })
        }

        this.setState({stylesMenu: { 
            position: (window.scrollY >= this.state.offsetTopMenu) ? "fixed" : "relative"
        }})
    }

    handleClickLink () {
        this.setState({ openMenu: false })
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    render() {
        return(
            <div className={this.state.openMenu ? "menu is-open" :  "menu" } ref={this.menuRef} style={this.state.stylesMenu}>
                <div className="container">
                    <div className="menu__logo" >
                        <img src={logo} alt="Tipografía la Palma" />
                    </div>

                    <menu className="menu__items">
                        <ul>
                            <li>
                                <Link activeClass="active" to="header" spy={true} smooth={true} offset={-100} duration={500} onClick={this.handleClickLink}>
                                    INICIO
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="nosotros" spy={true} smooth={true} offset={-100} duration={500} onClick={this.handleClickLink}>
                                    NOSOTROS
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-100} duration={500} onClick={this.handleClickLink}>
                                    SERVICIOS
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-100} duration={500} onClick={this.handleClickLink}>
                                    CONTACTO
                                </Link>
                            </li>
                            <li className="rs">
                                <a href="tel:3154004265" className="rs__item-whatsap">
                                    <i className="fas fa-phone-volume"></i>
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=573154004265" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="mailto:alejoastudillo2@gmail.com">
                                    <i className="far fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </menu>

                    <a className="menu__button" href="#0" onClick={ () => this.setState({ openMenu: !this.state.openMenu })} >
                        <span className="menu__button-icon"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Menu;