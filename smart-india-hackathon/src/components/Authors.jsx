import { Avatar, AvatarGroup } from "@mui/material";
import styles from "./Authors.module.css";

export default function Authors() {
  return (
    <div>
      <h1>Authors</h1>
      <div className={styles.container}>
        <AvatarGroup>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
      </div>
    </div>
  );
}
