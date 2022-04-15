import classes from "./MainNavigation.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Fragment } from "react";

const MainNavigation: React.FC = () => {
    const { loggedIn } = useTypedSelector((state) => state.ui)
    const { logOut } = useActions();

    const logoutHandler = () => {
        logOut()
    }

    const router = useRouter();
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                WishList
            </div>
            <nav className={classes.nav}>
                <ul>
                    {!loggedIn && (<li className={router.pathname === '/login' ? 'active' : ''}><Link href='/login' passHref>Login</Link></li>)}
                    {loggedIn && (
                        <Fragment>
                            <li className={router.pathname === '/wish-list' ? 'active' : ''}><Link href='/wish-list' passHref>Wish List</Link></li>
                            <li onClick={logoutHandler}>
                                <Link href='/'>Logout</Link>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;
