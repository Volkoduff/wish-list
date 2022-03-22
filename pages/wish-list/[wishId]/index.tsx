import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import WishDetails from "../../../components/wishes/WishDetails";

const WishDetailPage: NextPage = () => {
    const router = useRouter();
    const id: any = router.query.wishId;

    return (
        <div>
            <Head><title>{id}</title></Head>
            <p>{id}</p>
            <WishDetails id={id} />
        </div>
    )
};

export default WishDetailPage;
