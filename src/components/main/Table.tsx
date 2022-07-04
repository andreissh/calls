import { useSelector } from "react-redux";
import { getCallData } from "../../redux/selectors/getCallData";
import styles from "../../styles/Table.module.scss";

const Table = () => {
    const callData = useSelector(getCallData);

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableCell}>Тип</th>
                        <th className={styles.tableCell}>Время</th>
                        <th className={styles.tableCell}>Сотрудник</th>
                        <th className={styles.tableCell}>Звонок</th>
                        <th className={styles.tableCell}>Источник</th>
                        <th className={styles.tableCell}>Оценка</th>
                        <th className={styles.tableCell}>Длительность</th>
                    </tr>
                </thead>
                <tbody>
                    {callData.map((call: any) => {
                        return (
                            <tr className={styles.tableRow} key={call.id}>
                                <td className={styles.tableCell}>{call.in_out}</td>
                                <td className={styles.tableCell}>{call.date}</td>
                                <td className={styles.tableCell}>
                                    <img src={call.person_avatar} alt=""></img>
                                </td>
                                <td className={styles.tableCell}>
                                    {call.in_out === 0 ? call.to_number : call.from_number}
                                </td>
                                <td className={styles.tableCell}>{call.source}</td>
                                <td className={styles.tableCell}>Оценка</td>
                                <td className={styles.tableCell}>{call.time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
