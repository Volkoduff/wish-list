import Card from "../ui/Card/Card";
import classes from "./WishCard.module.scss";
import * as React from "react";
import IconButton from "../ui/IconButton";
import {MdDelete} from "react-icons/md";
import {WishesContext} from "../../store/wishes-context";
import {useContext} from "react";
import {useRouter} from "next/router";

const WishDetails: React.FC<{title: string, category: string, id: string}> = (props) => {
    const wishesCtx = useContext(WishesContext);
    const router = useRouter();

    const removeWish = () => {
        wishesCtx.removeWish.bind(null, props.id);
        // router.
    }

    return (
        <Card>
            <div onClick={removeWish}>
                <IconButton><MdDelete/></IconButton>
            </div>
            <div className={classes.wishCard__baseInfo}>
                <h3 className={classes.wishCard__title}>{props.title}</h3>
            </div>
            <div className={classes.wishCard__optionalInfo}>
                <span className={classes.wishCard__tag}>#{props.category}</span>
            </div>
        </Card>
    )
}

export default WishDetails;
