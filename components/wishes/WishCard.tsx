import * as React from "react";
import Wish from "../../models/wish";
import classes from "./WishCard.module.scss"
import IconButton from "../ui/Button/IconButton";
import {useRouter} from "next/router";
import {MdDelete} from "react-icons/md";
import {WishesContext} from "../../store/wishes-context";
import {useContext, useState} from "react";
import moment from "moment";

const WishCard: React.FC<{wish: Wish}> = (props) => {
    const [isDeleting, setIsdeleting] = useState<Boolean>(false)
    const cardClasses = `${isDeleting && classes.wishCard__fadeOut} ${classes.wishCard}`

    const wishesCtx = useContext(WishesContext);
    const router = useRouter();

    const getDetailedInfoHandler = (event: React.MouseEvent) => {
        router.push('/wish-list/' + props.wish.id);
    };

    const deleteWishHandler = (id: string) => {
        setIsdeleting(true);

        setTimeout(() => {
            wishesCtx.removeWish(id)
            setIsdeleting(false);
        }, 200)
    };

    return (
        <div className={cardClasses}>
            <div onClick={deleteWishHandler.bind(null, props.wish.id)}>
                <IconButton><MdDelete/></IconButton>
            </div>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.wish.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.wish.category}</span>
                <p className={classes.wishCard__text}>{props.wish.description}</p>
                <p className={classes.wishCard__date}>{moment(props.wish.date).format('DD.MM.YY')}</p>
            </div>
            <p className={classes.details__button} onClick={getDetailedInfoHandler}>Edit</p>
        </div>
    )
};

export default WishCard;
