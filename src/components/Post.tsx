import {PostProps} from "../shared/PostProps.ts";

export const Post = ({author, content}: PostProps) => {
    return (
        <div className="post">
            <strong>{author}</strong>
            <p>{content}</p>
        </div>
    );
};