import classes from "./MainNavigation.module.scss"
import Link from "next/link";

const MainNavigation: React.FC = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>WishList</div>
                {/*<Image width={400} height={110} src="/../public/logo(v.2).png"/>*/}
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/wish-list">Wish list</Link></li>
                    <li><Link href="/">exit</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;
