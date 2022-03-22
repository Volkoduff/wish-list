import Card from "../ui/Card/Card";
import classes from "./WishCard.module.scss";
import * as React from "react";
import Head from "next/head";
import {useContext} from "react";
import {WishesContext} from "../../store/wishes-context";

const WishDetails: React.FC<{
    wishId: any,
}> = (props) => {

    const wishesCtx = useContext(WishesContext);

    const currentWish = wishesCtx.items.find((wish) => wish.id === props.wishId);
    if (currentWish === undefined) {
        throw new TypeError('Current Wish not found')
    }

    return (
        <React.Fragment>
            <Head>
                <title>{currentWish.title}</title>
            </Head>
            <Card>
                <div className={classes.wishCard__baseInfo}>
                    <h3 className={classes.wishCard__title}>{currentWish.title}</h3>
                </div>
                <div className={classes.wishCard__optionalInfo}>
                    <span className={classes.wishCard__tag}>#{currentWish.category}</span>
                </div>
            </Card>
        </React.Fragment>
    )
};

export default WishDetails;
