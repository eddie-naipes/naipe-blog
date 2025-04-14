import styles from "./Header.module.css"
import logo from "../../assets/iconWhale.png"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo Naipe Sync Solutions"/>
            <strong>Naipe Sync Feed</strong>
        </header>
    );
};