import {AuthorProps} from "./AuthorProps.ts";
import {ContentProps} from "./ContentProps.ts";

export type PostProps = {
    id: number
    author: AuthorProps
    publishedAt: Date
    content: ContentProps[];
}