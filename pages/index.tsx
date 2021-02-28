import styles from '../styles/home.module.scss';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const { t } = useTranslation();

    return (
        <Layout title={t('home:head.title')}>
            <section className="container">
                <h1 className={`${styles.h1} mb-10 text-5xl text-center`}>NextJS Boilerplate</h1>
                <Counter
                    number={count.toString()}
                    handleIncrement={() => setCount(count + 1)}
                    handleReset={() => setCount(0)}
                />
                <p className="text-2xl mt-10 text-center">
                    Hope yout enjoy this next.js boilerplate <span className="text-2xl">😀</span>
                </p>
            </section>
        </Layout>
    );
};

export default Home;
