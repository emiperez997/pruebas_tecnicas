import { Icon } from "../Common/Icon/Icon";
import styles from "./interest.module.css";

export function Interest({
  interests,
}: {
  interests: { name: string; icon: string }[];
}) {
  return (
    <aside className={styles.interest}>
      <h2>Interest</h2>

      <ul className={styles.list}>
        {interests.map((interest) => (
          <li className={styles.item} key={interest.name}>
            <span>{interest.name}</span>
            <Icon style={interest.icon} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
