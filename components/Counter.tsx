import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/components/counter.module.scss';

interface Props {
    number: string;
    handleIncrement: () => void;
    handleReset: () => void;
}

const Counter: React.FC<Props> = ({ number, handleIncrement, handleReset }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.counter}>
            <span className={styles.number}>{number}</span>
            <div className={styles.tools}>
                <button onClick={handleIncrement} className={`${styles.button} ${styles.primary}`}>
                    {t('home:counter.increment')}
                </button>
                <button onClick={handleReset} className={`${styles.button} ${styles.danger}`}>
                    {t('home:counter.reset')}
                </button>
            </div>
        </div>
    );
};

export default Counter;
