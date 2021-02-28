import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/header.module.scss';

import { HiX } from '@react-icons/all-files/hi/HiX';
import { HiMenu } from '@react-icons/all-files/hi/HiMenu';
import { HiChevronDown } from '@react-icons/all-files/hi/HiChevronDown';
import { HiChevronUp } from '@react-icons/all-files/hi/HiChevronUp';

import { useState } from 'react';
import i8nConfig from '../i18n.json';
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Header: React.FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openLangDropdown, setOpenLangDropdown] = useState<boolean>(false);

    const getActivePage = (pathname: string): string => {
        return router.pathname === pathname ? styles.active : '';
    };

    const translateLang = (lang: string): string => {
        return lang === 'en' ? 'English' : 'Bahasa Indonesia';
    };

    const handleMenu = (): void => {
        setOpenMenu(!openMenu);
    };

    const handleLangDropdown = (): void => {
        setOpenLangDropdown(!openLangDropdown);
    };

    const setLangDropdownIcon = (): JSX.Element => {
        return openLangDropdown ? <HiChevronUp className="icons" /> : <HiChevronDown className="icons" />;
    };

    useEffect(() => {
        setOpenMenu(false);
        setOpenLangDropdown(false);
    }, [router.locale]);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <img src="/images/icons/favicon-32x32.png" alt="App Icon" width="32" height="32" />
                </div>
                <ul className={styles.navBar}>
                    <li>
                        <Link href="/" locale={router.locale}>
                            <a className={`${styles.navLink} ${getActivePage('/')}`}>{t('common:header.nav.home')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" locale={router.locale}>
                            <a className={`${styles.navLink} ${getActivePage('/about')}`}>
                                {t('common:header.nav.about')}
                            </a>
                        </Link>
                    </li>
                    <li className="relative">
                        <button onClick={handleLangDropdown} className={styles.buttonLangDropdown}>
                            <span>{translateLang(router.locale)}</span>
                            {setLangDropdownIcon()}
                        </button>
                        {openLangDropdown && (
                            <div className={styles.langDropdown}>
                                {i8nConfig.locales.map((lang, index) =>
                                    lang !== router.locale ? (
                                        <Link href={router.asPath} locale={lang} key={index.toString()}>
                                            <a>{translateLang(lang)}</a>
                                        </Link>
                                    ) : null,
                                )}
                            </div>
                        )}
                    </li>
                </ul>

                {/* mobile navigation */}
                <div className={styles.menuTools}>
                    <span>{router.locale.toUpperCase()}</span>
                    {openMenu ? (
                        <button className="focus:outline-none" onClick={handleMenu}>
                            <HiX className="icons" />
                        </button>
                    ) : (
                        <button className="focus:outline-none" onClick={handleMenu}>
                            <HiMenu className="icons" />
                        </button>
                    )}
                </div>

                <div className={`${styles.menu} ${openMenu ? styles.open : ''}`}>
                    <ul className={styles.menuBar}>
                        <li>
                            <Link href="/" locale={router.locale}>
                                <a className={`${styles.navLink} ${getActivePage('/')}`}>
                                    {t('common:header.nav.home')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" locale={router.locale}>
                                <a className={`${styles.navLink} ${getActivePage('/about')}`}>
                                    {t('common:header.nav.about')}
                                </a>
                            </Link>
                        </li>
                        <li className="relative">
                            <button onClick={handleLangDropdown} className={styles.buttonLangDropdown}>
                                <span>{translateLang(router.locale)}</span>
                                {setLangDropdownIcon()}
                            </button>
                            {openLangDropdown && (
                                <div className={styles.langDropdownMobile}>
                                    {i8nConfig.locales.map((lang, index) =>
                                        lang !== router.locale ? (
                                            <Link href={router.asPath} locale={lang} key={index.toString()}>
                                                <a>{translateLang(lang)}</a>
                                            </Link>
                                        ) : null,
                                    )}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
