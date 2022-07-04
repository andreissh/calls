import styles from "../../styles/Balance.module.scss";
import { AddIcon } from "../svgs/AddIcon";
import calendar from "../../assets/images/icon-calendar.svg";
import { useRef } from "react";

const Balance = ({ handleSelect }: any) => {
    const interval = useRef<HTMLSelectElement>(null);

    return (
        <div className={styles.balanceBlock}>
            <div className={styles.balance}>
                <span className={styles.balanceText}>
                    Баланс: <span className={styles.balanceNum}>272 ₽</span>
                </span>
                <AddIcon className={styles.balanceAdd}></AddIcon>
            </div>
            <div className={styles.calendar}>
                <span className={styles.arrowLeft}></span>
                <img className={styles.calendarIcon} src={calendar} alt=""></img>
                <select className={styles.calendarText} onChange={() => handleSelect(interval)} ref={interval}>
                    <option>3 дня</option>
                    <option>Неделя</option>
                    <option>Месяц</option>
                    <option>Год</option>
                </select>
                <span className={styles.arrowRight}></span>
            </div>
        </div>
    );
};

export default Balance;
