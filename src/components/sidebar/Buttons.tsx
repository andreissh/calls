import styles from "../../styles/Buttons.module.scss";
import { AddIcon } from "../svgs/AddIcon";
import { PaymentIcon } from "../svgs/PaymentIcon";

const Buttons = () => {
    return (
        <div className={styles.btnsWrapper}>
            <button className={`${styles.btn} ${styles.addOrderBtn}`}>Добавить заказ</button>
            <AddIcon className={styles.addOrderIcon}></AddIcon>
            <button className={`${styles.btn} ${styles.paymentBtn}`}>Оплата</button>
            <PaymentIcon className={styles.paymentIcon}></PaymentIcon>
        </div>
    );
};

export default Buttons;
