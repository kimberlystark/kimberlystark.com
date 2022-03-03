
import logo from './Vector.png'
import './navbar.css'
import { state, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const isNotasSmall = useMediaQuery({
        query: '(min-width: 640px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <section className="Navbar flex">
            <button onClick={handleToggle}>  {navbarOpen ? (
                <MdClose className="hamburger" />
            ) : (
                <FiMenu className="hamburger" />
            )}</button>
            <div className="Navbar__logo flex">
                <a href='/'><img src={logo} alt="logo" /></a>
                <h1>Kimberly Stark</h1>
            </div>

            <ul className={`flex Navbar__list menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <li><a href="#About" activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact>About</a></li>
                <li><a href="#Works" activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact>Works </a></li>
                <li><a href="#Contact" activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact>Contact </a></li>
            </ul>

            <button className="theme--button" onClick={props.switchTheme}>
                {props.theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </button>
        </section>
    )
}
