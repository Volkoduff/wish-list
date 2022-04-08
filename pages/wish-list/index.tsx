import {NextPage} from "next";
import React, {Fragment, useContext, useEffect} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const WishListPage: NextPage = () => {
    const { loading, error } = useTypedSelector((state) => state.wish);
    const { modal } = useTypedSelector((state) => state.ui);
    const { openModal } = useActions();

    const newWishButton = (
        <button disabled={loading} className='addWishButton' onClick={openModal}>+</button>
    )

    return (
        <Fragment>
            <Head>
                <title>Ваш список</title>
            </Head>
            {newWishButton}
            {modal && <NewWishForm />}
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