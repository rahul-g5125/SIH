import { Typography, Button, Box, TextField } from "@mui/material";

export default function NewReview() {
  return (
    <>
      <Typography variant="subtitle1">Write a Review</Typography>
      <TextField
        multiline
        rows={2}
        sx={{
          border: "1px",
          backgroundColor: "#fff",
          width: "100%",
        }}
      ></TextField>
      <Button variant="contained" sx={{ mt: 1, display: "block" }}>
        Submit
      </Button>
    </>
  );
}
