import { worksData } from './data'
export default function Works() {
    return (
        <section id="Works" className="Works flex-column container">
            <h1 className="title">Works</h1>
            <div className="Works__selected">
                {worksData.map(item => {
                    return (
                        <div className='flex' key={item.id} >
                            <a href={item.link}> <div className="selected--item selected--image" style={{ backgroundImage: `url(${item.image})` }}>
                            </div></a>
                            <div className='about--item'>
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

