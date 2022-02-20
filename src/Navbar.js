
import logo from './Vector.png'
export default function Navbar(props) {

    return (
        <section className="Navbar flex">
            <div className="Navbar__logo flex">
                <img src={logo} alt="logo" />
                <h1>Kimberly Stark</h1>
            </div>
            <ul className="flex Navbar__list">
                <li><a href="/about">About</a></li>
                <li><a href="/works">Works </a></li>
                <li><a href="/contact">Contact </a></li>
            </ul>
            <button className="theme--button" onClick={props.switchTheme}>
                {props.theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </section>
    )
}