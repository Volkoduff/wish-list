import classes from "./WishCard.module.scss"
import Wish from "../../models/wish";
import {useRouter} from "next/router";
import * as React from "react";
import IconButton from "../ui/IconButton";
import {MdDelete} from "react-icons/md";
import {WishesContext} from "../../store/wishes-context";
import {useContext} from "react";

const WishCard: React.FC<{wish: Wish}> = (props) => {
    const wishesCtx = useContext(WishesContext);
    const router = useRouter();
    const getDetailedInfoHandler = (event: React.MouseEvent) => {
        router.push('/wish-list/' + props.wish.id);
    };
    const deleteWishHandler = (id: string) => wishesCtx.removeWish(id);

    return (
        <div className={classes.wishCard}>
            <div onClick={deleteWishHandler.bind(null, props.wish.id)}>
                <IconButton><MdDelete/></IconButton>
            </div>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.wish.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.wish.category}</span>
                <p className={classes.wishCard__text}>{props.wish.description}</p>
            </div>
            <p className={classes.details__button} onClick={getDetailedInfoHandler}>Edit</p>
        </div>
    )
};

export default WishCard;
