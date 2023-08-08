import { LocalGithubUser } from "types";
import styles from "./UserTitle.module.scss";

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'createdAt' | 'updatedAt'> { }
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const UserTitle = ({ name, login, createdAt, updatedAt }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(createdAt))
  const updatedDate = localDate.format(new Date(updatedAt))
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <div className={styles.infoDate}>
        <span className={styles.createdAt}>{joinedDate}</span>
        <span className={styles.updatedAt}>{updatedDate}</span>
      </div>
    </div>
  );
};

