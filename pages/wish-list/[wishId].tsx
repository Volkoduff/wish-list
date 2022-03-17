import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import {NextPage} from "next";

const WishDetailPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.wishId;

    return (
        <div>
            <title>{id}</title>
            <Layout>

            </Layout>
        </div>
    )
};

export default WishDetailPage;
