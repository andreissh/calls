import React from "react";
import styles from "../../styles/Header.module.scss";
import search from "../../assets/images/icon-search.svg";
import pic from "../../assets/images/profile-pic-1.svg";
import arrowDown from "../../assets/images/arrow-down.svg";
import CallStats from "./CallStats";

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <span className={styles.date}>Среда, 13 окт</span>
            <CallStats />
            <img className={styles.searchbar} src={search} alt=""></img>
            <select className={styles.organizations}>
                <option value="1">ИП Сидорова Александра Михайловна</option>
                <option value="2">3</option>
                <option value="3">4</option>
            </select>
            <div className={styles.profile}>
                <img className={styles.profilePic} src={pic} alt=""></img>
                <img className={styles.arrowDown} src={arrowDown} alt=""></img>
            </div>
        </div>
    );
};

export default Header;
