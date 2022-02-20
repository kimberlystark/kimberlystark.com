import data from './data.json'
export default function Works() {
    return (
        <section className="Works container flex-column">
            <h1 className="title">Works</h1>
            <div className="Works__selected flex-center">
                {data.map(item => {
                    return (
                        <div className="selected--item">{item.title}</div>
                    )
                }
                )}
            </div>
        </section>
    )
}

