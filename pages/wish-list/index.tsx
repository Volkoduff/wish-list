import {NextPage} from "next";
import React, {Fragment, useCallback, useContext, useEffect, useState} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import { WishesContext } from "../../store/wishes-context";

const WishListPage: NextPage = () => {
    const wishesCtx = useContext(WishesContext);
    useEffect(() => {
        const fetchWishes = async () => {
            const res = await fetch('api/wishes');
            const result = await res.json();
            wishesCtx.updateItems(result.wishes)
            debugger
        }
        fetchWishes();
    }, []);

    return (
        <Fragment>
            <Head><title>Ваш список</title></Head>
            <NewWishForm/>
            <WishList/>
        </Fragment>
    )
};

// Выключенная SSR для списка желаний
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

export default WishListPage;
