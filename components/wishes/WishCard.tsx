import classes from "./WishCard.module.scss"
import Wish from "../../models/wish";
import {useRouter} from "next/router";
import IconButton from "../ui/IconButton";
import { MdDelete } from 'react-icons/md'
import  {WishesContext} from "../../store/wishes-context";
import * as React from "react";
import {useContext} from "react";

const WishCard: React.FC<{wish: Wish}> = (props) => {
    const wishesCtx = useContext(WishesContext);
    const router = useRouter();
    const getDetailedInfoHandler = (event: React.MouseEvent) => {
        router.push('/wish-list/' + props.wish.id);
    };

    return (
        <div className={classes.wishCard} onClick={getDetailedInfoHandler}>


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
