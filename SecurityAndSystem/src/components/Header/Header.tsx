import Image from "next/image";
import styles from "./header.module.css";

export function Header({
  avatar,
  fullName,
  username,
}: {
  avatar: string;
  fullName: string;
  username: string;
}) {
  return (
    <header className={styles.header}>
      <span className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src={`/avatars/${avatar}`}
          alt={`Profile picture of ${fullName}`}
        />
      </span>

      <div role="heading" className={styles.nameContainer}>
        <h1 className={styles.name}>{fullName}</h1>
        <small>@{username}</small>
      </div>
    </header>
  );
}
