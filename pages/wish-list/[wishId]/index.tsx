import { useRouter } from "next/router";
import { NextPage } from "next";
import Head from "next/head";
import WishDetails from "../../../components/wishes/WishDetails";
import * as React from "react";

const WishDetailPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.wishId;

    return (
        <div>
            <Head><title>{id}</title></Head>
            <p>{id}</p>
            <WishDetails wishId={id} />
        </div>
    )
};

export default WishDetailPage;
