import styles from '../styles/home.module.scss';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import { useState } from 'react';

const Home: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <Layout title="Home">
            <section className="h-screen flex flex-col justify-center items-center">
                <h1 className={`${styles.h1} mb-10 text-5xl`}>Counter</h1>
                <Counter
                    number={count.toString()}
                    handleIncrement={() => setCount(count + 1)}
                    handleReset={() => setCount(0)}
                />
            </section>
        </Layout>
    );
};

export default Home;
