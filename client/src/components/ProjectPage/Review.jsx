import styles from "./Review.module.css";
import { Box, Stack, Avatar } from "@mui/material";

export default function Review() {
  return (
    <Box className={styles["review-box"]}>
      <Stack sx={{ mt: 2 }} spacing={2} direction="row">
        <Avatar
          sx={{ height: 80, width: 80 }}
          src="/static/images/avatar/1.jpg"
        />

        <Box>
          <h3 className={styles["user-name"]}>Rahul Gandla</h3>
          <p className={styles["timeline"]}>12 Minutes ago</p>
          <p className={styles["user-tagline"]}>a Student at Fr. CRCE</p>
          <p className={styles["user-review"]}>
            The project has a very intuitive UI and has a great User Experience
            too. Loved operating the application. Would like to report few
            glitches.
          </p>
        </Box>
      </Stack>
    </Box>
  );
}
