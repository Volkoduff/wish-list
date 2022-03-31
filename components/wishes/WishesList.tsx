import React, {Fragment, useContext, useEffect, useState} from "react";
import classes from "./WishList.module.scss"
import WishListElement from "./WishListElement";
import { WishesContext } from "../../store/wishes-context";  

const WishList: React.FC = (props) => {
    const wishesCtx = useContext(WishesContext);

    return (
        <Fragment>
            <ul className={classes.wishList}>
                {!wishesCtx.isLoadingState && wishesCtx.items.map((wish) => <WishListElement key={wish.id} wishData={wish}/>)}
            </ul>
        </Fragment>
    )
};

export default WishList;
