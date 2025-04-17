import styles from "./Post.module.css"
import {PostProps} from "../../shared/PostProps.ts";
import {Comment} from "../comment/Comment.tsx";
import {Avatar} from "../avatar/Avatar.tsx";
import {format, formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";

export const Post = ({author, content, publishedAt}: PostProps) => {

    const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={author.avatarUrl}
                        alt={author.role}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted}
                      dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>

                {content.map((item, i) => (
                    <p key={i}>
                        {item.type === "LINK" ? (
                            <a href="#">#{item.content}</a>
                        ) : item.type === "PARAGRAPH" ? (
                            item.content
                        ) : null}
                    </p>
                ))}
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