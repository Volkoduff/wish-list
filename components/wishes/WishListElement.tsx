import classes from "./WishList.module.scss"
import Wish from "../../models/wish";
import WishCard from "./WishCard";

const WishListElement: React.FC<{wishData: Wish}> = (props) => {
    return (
        <li className={classes.wishList__element}>
            <WishCard wish={props.wishData}/>
        </li>
    )
};

export default WishListElement;
