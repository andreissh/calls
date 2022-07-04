import styles from "../../styles/CallStats.module.scss";

const CallStats = () => {
    return (
        <ul className={`${styles.listReset} ${styles.calls}`}>
            <li className={styles.callsItem}>
                <span className={styles.callsItemText}>
                    Новые звонки <span className={styles.callsItemTextGreen}>20 из 30 шт</span>
                </span>
                <span className={styles.callsItemIndicator}></span>
            </li>
            <li className={styles.callsItem}>
                <span className={styles.callsItemText}>
                    Качество разговоров <span className={styles.callsItemTextYellow}>40%</span>
                </span>
                <span className={styles.callsItemIndicator}></span>
            </li>
            <li className={styles.callsItem}>
                <span className={styles.callsItemText}>
                    Конверсия в заказ <span className={styles.callsItemTextRed}>67%</span>
                </span>
                <span className={styles.callsItemIndicator}></span>
            </li>
        </ul>
    );
};

export default CallStats;
