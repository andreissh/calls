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
                    <option>Входящие</option>
                    <option>Исходящие</option>
                    <option>Непринятые</option>
                </select>
                <span className={styles.test}></span>
                <select className={styles.filterSelect}>
                    <option>Все сотрудники</option>
                    <option>Константин К.</option>
                    <option>Полина З.</option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все звонки</option>
                    <option>Все клиенты</option>
                    <option>Новые клиенты</option>
                    <option>Все исполнители</option>
                    <option>Через приложение</option>
                    <option>Прочие звонки</option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все источники</option>
                    <option></option>
                    <option></option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все оценки</option>
                    <option>Распознать</option>
                    <option>Скрипт не использован</option>
                    <option>Отлично</option>
                    <option>Хорошо</option>
                    <option>Плохо</option>
                </select>
                <select className={styles.filterSelect}>
                    <option>Все ошибки</option>
                    <option>Приветствие</option>
                    <option>Имя</option>
                    <option>Цена</option>
                    <option>Скидка</option>
                    <option>Предзаказ</option>
                    <option>Благодарность</option>
                    <option>Стоп слова</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
