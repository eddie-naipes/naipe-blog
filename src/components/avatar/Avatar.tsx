import {AvatarProps} from "../../shared/AvatarProps.ts";
import styles from "./Avatar.module.css";

export const Avatar = ({src, alt, hasBorder = false}: AvatarProps) => {
    return (
        <img className={ hasBorder ? styles.avatar : styles.avatarWithoutBorder} src={src} alt={alt}/>
    );
};