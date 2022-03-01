import { worksData } from './data'
import './works.css'
export default function Works() {
    return (
        <section id="Works" className="Works flex-column container">
            <h1 className="title">Selected Works</h1>
            <div className="Works__selected flex-column">
                {worksData.map(item => {
                    return (
                        <div className='flex-center Works__selected--item container' key={item.id} >
                            <a className="item--image--container"
                                href={item.link}>
                                <div className="item--image"
                                    style={{ backgroundImage: `url(${item.image})` }}>
                                </div></a>
                            <div className='item--about flex-column'>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>

                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
}

