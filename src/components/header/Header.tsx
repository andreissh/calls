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
            <div className={styles.callsSearchbarWrapper}>
                <input className={styles.callsSearchbar} type="search"></input>
                <span className={styles.searchIcon}></span>
            </div>
            <select className={styles.organizations}>
                <option>Все организации</option>
                <option selected>ИП Сидорова Александра Михайловна</option>
                <option>ИП Митрофанов М.М.</option>
                <option>ИП Иванов М.М.</option>
            </select>
            <div className={styles.profile}>
                <img className={styles.profilePic} src={pic} alt=""></img>
                <img className={styles.arrowDown} src={arrowDown} alt=""></img>
            </div>
        </div>
    );
};

export default Header;
