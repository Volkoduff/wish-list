import {NextPage} from "next";
import React, {Fragment, useState} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import Modal from "../../components/ui/Modal/Modal";
import classes from "./WishList.module.scss"

const WishListPage: NextPage = () => {
    const [isNewWish, setIsNewWish] = useState(false);
    const closeModal = () => setIsNewWish(false);
    const openNewWishModal = () => setIsNewWish(true);

    return (
        <Fragment>
            <Head>
                <title>Ваш список</title>
            </Head>
            <button className={classes.newWish} onClick={openNewWishModal}>+</button>
            <WishList/>
            {isNewWish && (
                <Modal closeModal={closeModal}>
                    <NewWishForm/>
                </Modal>
            )}
        </Fragment>
    )
};

export default WishListPage;
