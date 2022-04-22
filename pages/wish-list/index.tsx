import {NextPage} from "next";
import React, {Fragment} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const WishListPage: NextPage = () => {
    const { loading, newWishModal } = useTypedSelector((state) => state.wish);
    const { openModal } = useActions();
    
    const newWishButton = (
        <button disabled={loading} className='addWishButton' onClick={openModal}>+</button>
    )

    return (
        <Fragment>
            <Head>
                <title>Ваш список</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                {/* <Wishes></Wishes> */}
            </QueryClientProvider>
            {newWishButton}
            {newWishModal && <NewWishForm />}
            <WishList/>
        </Fragment>
    )
};

export default WishListPage;