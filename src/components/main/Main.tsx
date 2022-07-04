import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/Main.module.scss";
import Balance from "./Balance";
import Filter from "./Filter";
import Table from "./Table";
import { dates } from "../dates/dates";
import { fetchData } from "../../redux/asyncActions/fetchCallData";

const Main = () => {
    const dispatch = useDispatch();
    const [urlDates, setUrlDates]: any = useState([dates[1], dates[0]]);

    const handleSelect = useCallback((interval: any) => {
        setUrlDates([dates[interval.current.selectedIndex + 1], dates[0]]);
    }, []);

    useEffect(() => {
        dispatch(fetchData(urlDates));
    }, [dispatch, urlDates]);

    return (
        <div className={styles.mainWrapper}>
            <Balance handleSelect={handleSelect} />
            <div className={styles.tableBlock}>
                <Filter />
                <Table />
            </div>
        </div>
    );
};

export default Main;
