import React, { useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Wish from "../../models/wish";
import classes from "./WishList.module.scss"
import WishListElement from "./WishListElement";

const WishList: React.FC = (props) => {
    const { wishes, loading, error } = useTypedSelector((state) => state.wish);
    wishes.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    const {fetchWishes} = useActions();
    useEffect(() => {
        fetchWishes()
    }, [])

    if (loading) {
        return (
            <div className="loader__wrap">
                <BiLoaderAlt className='loader__element loader__element_section' />
            </div>
        )
    }

    if(error) {
        return <h3>{error}</h3>
    }

    return (
        <ul className={classes.wishList}>
            {wishes.map((wish: Wish) => <WishListElement key={wish.id} wishData={wish}/>)}
        </ul>
    )
};

export default WishList;
