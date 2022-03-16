import React, {
  DetailedHTMLProps,
  FC,
  FunctionComponent,
  HTMLAttributes,
  SVGProps,
} from "react";

import styles from "./ProfileInfo.module.scss";

interface ProfileInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  title: string;
  value: string;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({
  Icon,
  title,
  value,
  ...props
}) => {
  return (
    <div className={styles.info} {...props}>
      <Icon />
      <div className={styles.descr}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};
