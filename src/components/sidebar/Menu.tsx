import styles from "../../styles/Menu.module.scss";

const Menu = () => {
    return (
        <ul className={`${styles.listReset} ${styles.menu}`}>
            <li className={`${styles.menuItem} ${styles.results}`}>Итоги</li>
            <li className={`${styles.menuItem} ${styles.orders}`}>Заказы</li>
            <li className={`${styles.menuItem} ${styles.messages}`}>Сообщения</li>
            <li className={`${styles.menuItem} ${styles.calls} ${styles.active}`}>Звонки</li>
            <li className={`${styles.menuItem} ${styles.counterparties}`}>Контрагенты</li>
            <li className={`${styles.menuItem} ${styles.docs}`}>Документы</li>
            <li className={`${styles.menuItem} ${styles.contractors}`}>Исполнители</li>
            <li className={`${styles.menuItem} ${styles.reports}`}>Отчеты</li>
            <li className={`${styles.menuItem} ${styles.base}`}>База знаний</li>
            <li className={`${styles.menuItem} ${styles.settings}`}>Настройки</li>
        </ul>
    );
};

export default Menu;
