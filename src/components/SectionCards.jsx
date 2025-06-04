import comics from "../data/comics.js"
import style from "./SectionCards.module.css"

const SectionCards = () => {
    return (
        <section className={style.bgBlack}>
            <div className={`container ${style.cards}`}>
                {comics.map((curCard) => (

                    <div key={`card-${curCard.id}`} className={style.col}>
                        <div className={style.square}>
                            <img src={curCard.thumb} alt={curCard.title} />
                        </div>
                        <h5>{curCard.title}</h5>
                    </div>
                ))}

                <a className={style.btn}>
                    LOAD MORE
                </a>

            </div>
        </section>
    )
}

export default SectionCards;