import {NextPage} from "next";
import React, {Fragment, useContext, useEffect} from "react";
import { BiLoaderAlt } from "react-icons/bi"
import WishList from "../../components/wishes/WishesList";
import Head from "next/head";
import NewWishForm from "../../components/wishes/NewWishForm";
import { WishesContext } from "../../store/wishes-context";

const WishListPage: NextPage = () => {
    const wishesCtx = useContext(WishesContext);

    useEffect(() => { 
        console.log(wishesCtx.isActualWishes)
        if (!wishesCtx.isActualWishes) {
            wishesCtx.fetchWishes()
        }
        console.log(wishesCtx.isActualWishes)
     }, []);

    const openModalHandler = () => {
        // Рефактор требуется!!
        wishesCtx.setModalState(true)
    }

    return (
        <Fragment>
            <Head>
                <title>Ваш список</title>
            </Head>
            <button 
                disabled={wishesCtx.isLoadingState}
                className='addWishButton' 
                onClick={openModalHandler}>
                    +
                </button>
            {wishesCtx.isModalOpen && <NewWishForm />}
            {wishesCtx.isLoadingState && (
                <div className="loader__wrap">
                    <BiLoaderAlt className='loader__element loader__element_section'/>
                </div>
            )}
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