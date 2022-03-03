import './hero.css';
import TypeIt from "typeit-react";

export default function Hero() {

    return (
        <section className="Hero flex-column container">
            <h1 className="Hero__intro">Hi, I'm Kimberly.
                <br />
                I'm a <TypeIt className="type-it"
                    options={{
                        cursor: false,
                        loop: false
                    }}
                    getBeforeInit={(instance) => {
                        instance.type("UX/UI Designer")
                            .pause(750)
                            .delete()
                            .pause(500)
                            .type("Web Designer")
                            .pause(750).delete()
                            .type("Frontend Developer.")
                        return instance
                    }}
                />
            </h1>

            <div className='arrow-container flex-center'> <a href="#About" className=' arrow-down'>&darr;</a></div>
        </section>
    )
}










{/* <h1>Scroll Down Button #3</h1>
  <a href="#section04"><span></span>Scroll</a>
</section>
<section id="section04" class="demo"></section> */}

// #section04 { background: url(https://www.nxworld.net/example/css-scroll-down-button/bg04.jpg) center center / cover no-repeat;}