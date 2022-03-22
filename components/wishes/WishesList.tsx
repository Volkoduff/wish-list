import React, {Fragment, useContext} from "react";
import classes from "./WishList.module.scss"
import WishListElement from "./WishListElement";
import { WishesContext } from "../../store/wishes-context";

const WishList: React.FC = () => {
    const wishesCtx = useContext(WishesContext);

    return (
        <Fragment>
            <ul className={classes.wishList}>
                {wishesCtx.items.map((wish) => <WishListElement key={wish.id} wishData={wish}/>)}
            </ul>
        </Fragment>
    )
};

export default WishList;
