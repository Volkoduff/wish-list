import Card from "../ui/Card/Card";
import classes from "./WishCard.module.scss";
import * as React from "react";
import Head from "next/head";
import { useContext } from "react";
import { WishesContext } from "../../store/wishes-context";

const WishDetails: React.FC<{ id: string }> = (props) => {
    const wishCtx = useContext(WishesContext);
    const wish = wishCtx.items.find((wish) => wish.id === props.id)

    return (
        <React.Fragment>
            <Head>
                <title>{wish?.title}</title>
            </Head>
            <Card>
                <div className={classes.wishCard__baseInfo}>
                    <h3 className={classes.wishCard__title}>
                        Загов
                        {wish?.title}
                    </h3>
                </div>
                <div className={classes.wishCard__optionalInfo}>
                    <span className={classes.wishCard__tag}>
                        #{wish?.category}
                    </span>
                </div>
                <div className={classes.wishCard__optionalInfo}></div>
                <p>{wish?.description}</p>
            </Card>
        </React.Fragment>
    )
};

export default WishDetails;
