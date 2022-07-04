import styles from "../../styles/Filter.module.scss";

const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className={styles.callsSearchbarWrapper}>
                <input className={styles.callsSearchbar} type="search" placeholder="Поиск по звонкам"></input>
                <span className={styles.searchIcon}></span>
            </div>
            <div className={styles.filterTypes}>
                <select className={styles.filterSelect}>
                    <option>Все типы</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все сотрудники</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все звонки</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все источники</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все оценки</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все ошибки</option>
                    <option></option>
                    <option></option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
