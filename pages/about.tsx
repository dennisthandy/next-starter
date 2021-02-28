import Layout from '../components/Layout';
import styles from '../styles/about.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiEslint } from '@react-icons/all-files/si/SiEslint';
import { SiPrettier } from '@react-icons/all-files/si/SiPrettier';
import { SiPreCommit } from '@react-icons/all-files/si/SiPreCommit';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('about:head.title')}>
            <section className="container pb-10">
                <h1 className={styles.title}>{t('about:content.title')}</h1>
                <div className="technologies mt-10">
                    <h2 className={styles.technoTitle}>{t('about:content.technologies.title')}</h2>
                    <ol className={styles.technoList}>
                        <li className={styles.technoItem}>
                            <SiTypescript className={styles.technoIcon} />
                            <a href="https://www.typescriptlang.org/" className={styles.technoName}>
                                TypeScript
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <SiSass className={styles.technoIcon} />
                            <a href="https://sass-lang.com/" className={styles.technoName}>
                                SASS
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <SiTailwindcss className={styles.technoIcon} />
                            <a href="https://tailwindcss.com/" className={styles.technoName}>
                                Tailwind CSS
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <img src="/images/react-icons.svg" alt="React Icons" className={styles.technoIcon} />
                            <a href="https://react-icons.github.io/react-icons/" className={styles.technoName}>
                                React Icons
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <SiEslint className={styles.technoIcon} />
                            <a href="https://eslint.org/" className={styles.technoName}>
                                ESlint
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <img src="/images/stylelint.svg" alt="Stylelint" className={styles.technoIcon} />
                            <a href="https://stylelint.io/" className={styles.technoName}>
                                Stylelint
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <SiPrettier className={styles.technoIcon} />
                            <a href="https://prettier.io/" className={styles.technoName}>
                                Prettier
                            </a>
                        </li>
                        <li className={styles.technoItem}>
                            <SiPreCommit className={styles.technoIcon} />
                            <a href="https://pre-commit.com/" className={styles.technoName}>
                                Pre-Commit
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="plugins mt-10">
                    <h2 className={styles.pluginTitle}>{t('about:content.plugins.title')}</h2>
                    <ol className={styles.pluginList}>
                        <li className={styles.pluginItem}>
                            <span className={styles.pluginIcon}>📱</span>
                            <a href="https://www.npmjs.com/package/next-pwa" className={styles.pluginName}>
                                Next PWA
                            </a>
                        </li>
                        <li className={styles.pluginItem}>
                            <span className={styles.pluginIcon}>🎌</span>
                            <a href="https://github.com/vinissimus/next-translate" className={styles.pluginName}>
                                Next Translate
                            </a>
                        </li>
                        <li className={styles.pluginItem}>
                            <span className={styles.pluginIcon}>🧺</span>
                            <a href="https://www.npmjs.com/package/next-compose-plugins" className={styles.pluginName}>
                                Next Compose Plugins
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
        </Layout>
    );
};

export default About;
