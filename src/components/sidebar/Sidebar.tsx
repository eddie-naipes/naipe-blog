import styles from "./Sidebar.module.css"
import bgwhale from "../../assets/animeWhale.png"
import {PencilLine} from "@phosphor-icons/react";

export const Sidebar = () => {

    const linkPictureProfile = "http://github.com/eddie-naipes.png"

    return (
        <aside className={styles.sidebar}>
            <img
                src={bgwhale}
                alt="Background"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img
                    src={linkPictureProfile}
                    alt="Picture Profile"
                    className={styles.avatar}
                />
                <strong>Eddie Dias</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};