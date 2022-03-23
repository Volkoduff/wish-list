import {NextPage} from "next";
import React, {Fragment, useCallback, useContext, useEffect, useState} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import { WishesContext } from "../../store/wishes-context";

interface FormWishData {
    title: string;
    category: string;
    description: string; 
}

const WishListPage: NextPage = () => {
    const wishesCtx = useContext(WishesContext);

    const fetchWishes = async () => {
        const res = await fetch('api/wishes');
        const result = await res.json();
        wishesCtx.updateItems(result.wishes)
    }

    const saveWish = async (data: FormWishData) => {
        const response = await fetch('api/new-wish', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if(response.ok) {
            const res = await response.json()
            console.log(res);
        }
    }

    useEffect(() => { fetchWishes() }, []);

    return (
        <Fragment>
            <Head><title>Ваш список</title></Head>
            <NewWishForm saveWish={saveWish} fetchWishes={fetchWishes} />
            <WishList/>
        </Fragment>
    )
};

export default WishListPage;

// Выключенная SSR для списка
// export async function getStaticProps() {
//     return {
//         props: {
//             wishes: JSON.stringify('')
//         },
//         revalidate: 3600,
//     }
// }

// export async function getServerSideProps(context: { req: any; res: any; }) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             wishes: JSON.stringify('')
//         }
//     }
// }