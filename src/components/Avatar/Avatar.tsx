import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Avatar.module.scss";
import defaultAvatar from "../../assets/images/default_avatar.jpg";
import { ReactComponent as EditIcon } from "./icons/pencil.svg";

interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "large";
  imgUrl?: string;
  isEdit?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
  size = "small",
  className,
  imgUrl,
  isEdit,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.avatar_box, className, {
          [styles.small]: size === "small",
          [styles.large]: size === "large",
        })}
        {...props}
      >
        <img src={imgUrl ? imgUrl : defaultAvatar} alt="avatar" />
      </div>
      {isEdit && (
        <button className={styles.edit_box}>
          <EditIcon />
        </button>
      )}
    </div>
  );
};
