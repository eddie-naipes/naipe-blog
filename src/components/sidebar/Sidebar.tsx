import styles from "./Sidebar.module.css"
import bgwhale from "../../assets/animeWhale.png"

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                src={bgwhale}
                alt="Background"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <strong>Eddie Dias</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};