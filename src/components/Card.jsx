import style from "./SectionCards.module.css";

const Card = ({title, img}) => {
    return (
        <div  className={style.col}>
            <div className={style.square}>
                <img src={img} alt={title} />
            </div>
            <h5>{title}</h5>
        </div>
    )
}

export default Card;