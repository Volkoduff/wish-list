import React, {Fragment, useContext} from "react";
import classes from "./WishList.module.scss"
import WishCard from "./WishCard";
import { WishesContext } from "../../store/wishes-context";

const WishList: React.FC = () => {
    const wishesCtx = useContext(WishesContext);
    const wishElementClasses = `${classes.wishList__element}`;
    return (
        <Fragment>
            <ul className={classes.wishList}>
                {wishesCtx.items.map((wish) => (
                    <li key={wish.id} className={wishElementClasses} onClick={wishesCtx.removeWish.bind(null, wish.id)}>
                        <WishCard wish={wish} />
                    </li>
                ))}
            </ul>
        </Fragment>
    )
};

export default WishList;
