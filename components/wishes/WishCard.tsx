import classes from "./wishCard.module.scss"
import Wish from "../../models/wish";

const WishCard: React.FC<{wish: Wish}> = (props) => {
    return (
        <div className={classes.wishCard}>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.wish.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.wish.category}</span>
                <p>{props.wish.description}</p>
            </div>
        </div>
    )
};

export default WishCard;
