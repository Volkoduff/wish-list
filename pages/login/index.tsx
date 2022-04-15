import { Fragment } from "react";
import Head from "next/head";
import { logIn } from "../../store/action-creator/ui"
import { NextPage } from "next/types";
import AuthorisationForm from "../../components/layout/AuthorisationForm";

const LoginPage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Авторизация</title>
            </Head>
            <AuthorisationForm/>
        </Fragment>
    )
}

export default LoginPage;