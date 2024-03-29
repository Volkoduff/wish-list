import { useRouter } from "next/router";
import React, { useEffect, memo } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Wish from "../../models/wish";
import classes from "./WishList.module.scss"
import WishListElement from "./WishListElement";

const WishList: React.FC = () => {
    const router = useRouter();
    const { wishes, actualWishes, loading, error } = useTypedSelector((state) => state.wish);

    wishes.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    const {fetchWishes} = useActions();

    useEffect(() => {
        if(!actualWishes) {
            fetchWishes()
        }
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

    let wishesList;
    if(!wishes.length) {
        wishesList = <h3 className="text-message-big">Пока ничего нет, может добавить?</h3>
    } else {
        wishesList = wishes.map((wish: Wish) => <WishListElement key={wish.id} wishData={wish}/>)
    }

    return (
        <ul className={classes.wishList}>
            {wishesList}
        </ul>
    )
};

export default memo(WishList);
