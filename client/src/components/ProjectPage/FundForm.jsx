import { Button, Box, TextField, ButtonGroup, FormGroup } from "@mui/material";

export default function FundForm() {
  return (
    <>
      <Box sx={{ margin: 8 }}>
        <h2>Fund this Project</h2>
        <Box sx={{ display: "flex", margin: 0 }}>
          <ButtonGroup sx={{ display: "flex" }}>
            <TextField label="Rs."></TextField>
            <Button>Fund</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
