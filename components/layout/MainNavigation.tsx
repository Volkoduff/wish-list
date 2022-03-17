import classes from "./MainNavigation.module.scss"
import Link from "next/link";

const MainNavigation: React.FC = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>WishList</div>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/wish-list" passHref>Wish list</Link></li>
                    <li><Link href="/" passHref>exit</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;
