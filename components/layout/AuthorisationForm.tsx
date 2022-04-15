import classes from "./../wishes/NewWishForm.module.scss"
import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { stat } from "fs";
import { BiLoaderAlt } from "react-icons/bi";
import { useRouter } from "next/router";

const AuthorisationForm = () => {
    const router = useRouter();
    const { adding } = useTypedSelector((state) => state.wish);
    const { loggedIn } = useTypedSelector((state) => state.ui);

    const { logIn } = useActions();

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        logIn();
        router.push('/wish-list')
    }

    return (
        <div className={classes.formWrap}>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input type='text' id='login' autoFocus placeholder={'Ничего не надо писать*'} disabled={adding} />
                </div>
                <div className={classes.control}>
                    <input type='password' id='password' placeholder={'Просто нажмите ЛОГИН*'} disabled={adding} />
                </div>
                <div className={classes.actions}>
                    <button className={classes.submitButton} disabled={adding}>
                        {adding ? <BiLoaderAlt className='loader__element loader__element_button' /> : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthorisationForm;