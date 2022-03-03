import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBehance, faCodepen, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <section className="Footer flex">
            <h1 className='flex'>Design & Code by Kimberly Stark &copy;2022 </h1>
            <div className="Footer__social flex-center">

                <FontAwesomeIcon href='' href="https://github.com/kimberlystark" className="icon" icon={faGithub} />
                <FontAwesomeIcon href="https://www.behance.net/kimberlystark" className="icon" icon={faBehance} />
                <FontAwesomeIcon href="https://codepen.io/kimstark" className="icon" icon={faCodepen} />
                <FontAwesomeIcon href="https://dribbble.com/kstark" className="icon" icon={faDribbble} />
                <FontAwesomeIcon href="https://www.linkedin.com/in/wildyogini/" className="icon" icon={faLinkedinIn} />
            </div>
        </section>
    )
}