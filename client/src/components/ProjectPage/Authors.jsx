import { Button, Avatar, AvatarGroup } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import styles from "./Authors.module.css";

export default function Authors() {
  return (
    <div>
      <div className={styles.container}>
        <AvatarGroup>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Button sx={{ marginLeft: 2 }} href="/collaborate">
          <GroupAddIcon sx={{ marginRight: 1 }} />
          Collaborate
        </Button>
      </div>
    </div>
  );
}
