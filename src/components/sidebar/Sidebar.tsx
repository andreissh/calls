import styles from "../../styles/Sidebar.module.scss";
import logo from "../../assets/images/logo.svg";
import Menu from "./Menu";
import Buttons from "./Buttons";

const Sidebar = () => {
    return (
        <aside className={styles.sidebarWrapper}>
            <img className={styles.sidebarLogo} src={logo} alt=""></img>
            <Menu />
            <Buttons />
        </aside>
    );
};

export default Sidebar;
