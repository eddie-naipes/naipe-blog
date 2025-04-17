import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from "@phosphor-icons/react";

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/eddie-naipes.png" alt="profile icon"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eddie Dias</strong>
                            <time title="10 de Outubro às 08:13" dateTime="2023-10-10 08:13:30">Publicado há 1h</time>
                        </div>
                        <button title={"Deletar comentário"}>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>comemnt</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
};