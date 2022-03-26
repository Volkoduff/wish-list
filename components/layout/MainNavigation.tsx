import classes from "./MainNavigation.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = [
    {title: 'Wish List', path: '/wish-list'},
    {title: 'Exit', path: '/'},
] 

const MainNavigation: React.FC = () => {
    const router = useRouter();
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>WishList</div>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    {Menu.map((menuElement, key) => (
                        <li key={key} className={router.pathname === menuElement.path ? 'active' : ''}><Link href={menuElement.path} passHref>{menuElement.title}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;
