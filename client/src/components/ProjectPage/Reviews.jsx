import {
  Avatar,
  Typography,
  Stack,
  Button,
  Box,
  TextField,
  ButtonGroup,
} from "@mui/material";
import NewReview from "./NewReview";
import Review from "./Review";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <Box sx={{ margin: 4 }}>
      <NewReview />

      <Review />
      <Review />
      <Review />
      <Review />
    </Box>
  );
}
