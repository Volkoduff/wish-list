import { useRouter } from "next/router";
import {NextPage} from "next";
import { WishesContext } from "../../../store/wishes-context";
import WishCard from "../../../components/wishes/WishCard";
import {useContext} from "react";
import Head from "next/head";
import WishDetails from "../../../components/wishes/WishDetails";

const WishDetailPage: NextPage = () => {
    const wishesCtx = useContext(WishesContext);
    const router = useRouter();
    const id = router.query.wishId;

    const currentWish = wishesCtx.items.find((wish) => wish.id === id);

    debugger
    return (
        <div>
            <Head><title>{id}</title></Head>
            <WishDetails id={currentWish!.id} title={currentWish!.title} category={currentWish!.category}  />
        </div>
    )
};

export default WishDetailPage;
