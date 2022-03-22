import React, {Fragment, useContext, useEffect, useState} from "react";
import classes from "./WishList.module.scss"
import WishListElement from "./WishListElement";
import { WishesContext } from "../../store/wishes-context";
import Wish from "../../models/wish";
import Button from "../ui/Button/Button";

const mockData = [
    new Wish('Скачать дюну', 'Sci-fi', 'Поидее уже вышла'),
    new Wish('Какой то еще фильм', 'Comedy', ''),
    new Wish('Заголовок', 'Comedy', 'Поидее уже вышла Поидее уже вышла Поидее уже вышла Поидее уже вышла Поидее уже вышла Поидее уже вышла')
];

const WishList: React.FC = () => {
    const wishesCtx = useContext(WishesContext);
    const reloadHandler = () => {
        wishesCtx.updateItems(mockData)
    };

    useEffect(() => {
        reloadHandler()
    }, []);

    return (
        <Fragment>
            <Button onClickHandler={reloadHandler}>Reload</Button>
            <ul className={classes.wishList}>
                {wishesCtx.items.map((wish) => <WishListElement key={wish.id} wishData={wish}/>)}
            </ul>
        </Fragment>
    )
};

export default WishList;
