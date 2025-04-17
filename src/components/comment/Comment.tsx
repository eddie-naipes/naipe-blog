import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from "@phosphor-icons/react";
import {Avatar} from "../avatar/Avatar.tsx";
import {CommentProps} from "../../shared/CommentProps.ts";
import * as React from "react";

export const Comment = ({content, handleDeleteComment}: CommentProps) => {
    const linkPictureProfile = "http://github.com/diego3g.png"

    function deleteComment(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        handleDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={linkPictureProfile} alt={"Profile icon"}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego</strong>
                            <time title="10 de Outubro às 08:13" dateTime="2023-10-10 08:13:30">Publicado há 1h</time>
                        </div>
                        <button
                            title={"Deletar comentário"}
                            className={styles.trash}
                            onClick={deleteComment}
                        >
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
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