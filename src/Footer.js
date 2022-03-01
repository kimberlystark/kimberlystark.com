import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBehance, faCodepen, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <section className="Footer flex">
            <h1>Design & Code by Kimberly Stark &copy;2022 </h1>
            <div className="Footer__social flex">

                <a href="https://github.com/kimberlystark"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.behance.net/kimberlystark"><FontAwesomeIcon icon={faBehance} /></a>
                <a href="https://codepen.io/kimstark"><FontAwesomeIcon icon={faCodepen} /></a>
                <a href="https://dribbble.com/kstark"><FontAwesomeIcon icon={faDribbble} /></a>
                <a href="https://www.linkedin.com/in/wildyogini/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </section>
    )
}