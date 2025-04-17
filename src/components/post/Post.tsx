import styles from "./Post.module.css"
import {PostProps} from "../../shared/PostProps.ts";
import {Comment} from "../comment/Comment.tsx";

export const Post = ({author, content}: PostProps) => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/eddie-naipes.png" alt="" className={styles.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 de Outubro às 08:13" dateTime="2023-10-10 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>{content}</p>

                <a href="#">#abc</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder={"Deixe um comentário"}
                />
                <button type={"submit"}>Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
};