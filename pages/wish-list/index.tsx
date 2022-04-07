import {NextPage} from "next";
import React, {Fragment, useContext, useEffect} from "react";
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";

const WishListPage: NextPage = () => {
    const openModalHandler = () => {
        // Рефактор требуется!!
        // wishesCtx.setModalState(true)
    }

    return (
        <Fragment>
            <Head>
                <title>Ваш список</title>
            </Head>
            <button 
                // disabled={wishesCtx.isLoadingState}
                className='addWishButton' 
                onClick={openModalHandler}>
                    +
                </button>
            {/* <NewWishForm /> */}
            {/* {wishesCtx.isModalOpen && <NewWishForm />} */}
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