import {NextPage} from "next";
import React, {Fragment} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";

const WishListPage: NextPage = () => {
    return (
        <Fragment>
            <Head><title>Ваш список</title></Head>
            <NewWishForm/>
            <WishList/>
        </Fragment>
    )
};

export default WishListPage;
