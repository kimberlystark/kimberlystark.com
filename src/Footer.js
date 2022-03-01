import './footer.css'
export default function Footer() {
    return (
        <section className="Footer flex">
            <h1>Design & Code by Kimberly Stark &copy;2022 </h1>
            <div className="Footer__social flex">
                <a href="https://github.com/kimberlystark">GitHub</a>
                <a href="https://codepen.io/kimstark">CodePen</a>
                <a href="https://dribbble.com/kstark">Dribbble</a>
                <a href="https://www.linkedin.com/in/wildyogini/">LinkedIn</a>
            </div>
        </section>
    )
}