
import logo from './Vector.png'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar(props) {

    return (
        <section className="Navbar flex">
            <div className="Navbar__logo flex">
                <a href='/'><img src={logo} alt="logo" /></a>
                <h1>Kimberly Stark</h1>
            </div>
            <ul className="flex Navbar__list">
                <li><a href="#About">About</a></li>
                <li><a href="#Works">Works </a></li>
                <li><a href="#Contact">Contact </a></li>
                <FontAwesomeIcon icon="fa-solid fa-moon" />
            </ul>

            <button className="theme--button" onClick={props.switchTheme}>
                {props.theme === 'light' ? 'dark' : 'Light'}
            </button>
        </section>
    )
}
// <FontAwesomeIcon icon="fa-solid fa-moon" />