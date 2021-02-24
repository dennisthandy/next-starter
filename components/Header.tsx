import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/header.module.scss';

const Header: React.FC = () => {
    const router = useRouter();

    const getActivePage = (pathname: string): string => {
        return router.pathname === pathname ? styles.active : '';
    };

    return (
        <header className="p-3 fixed bg-red-400 w-full">
            <nav>
                <ul className="flex space-x-5 item-center justify-center">
                    <li>
                        <Link href="/">
                            <a className={`${styles.navLink} ${getActivePage('/')}`}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className={`${styles.navLink} ${getActivePage('/about')}`}>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
