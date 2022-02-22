
import logo from './Vector.png'
export default function Navbar(props) {

    return (
        <section className="Navbar flex container">
            <div className="Navbar__logo flex">
                <a href='/'><img src={logo} alt="logo" /></a>
                <h1>Kimberly Stark</h1>
            </div>
            <ul className="flex Navbar__list">
                <li><a href="#About">About</a></li>
                <li><a href="#Works">Works </a></li>
                <li><a href="#Contact">Contact </a></li>
            </ul>
            <button className="theme--button" onClick={props.switchTheme}>
                {props.theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </section>
    )
}