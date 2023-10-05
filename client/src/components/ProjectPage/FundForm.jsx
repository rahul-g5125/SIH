import {
  Button,
  Box,
  TextField,
  ButtonGroup,
  FormGroup,
  InputAdornment,
} from "@mui/material";

export default function FundForm() {
  return (
    <>
      <Box sx={{ border: 1, borderRadius: 2, padding: 2, margin: 8 }}>
        <h2>Fund this Project</h2>
        <Box sx={{ display: "block", margin: 0 }}>
          <TextField label="First Name" sx={{ m: 1, width: "50ch" }} />
          <TextField label="Last Name" sx={{ m: 1, width: "50ch" }} />
          <TextField label="Email" sx={{ m: 1, width: "102ch" }} />
          <TextField label="Rs." sx={{ m: 1, width: "60ch" }}></TextField>
          <Button variant="contained" sx={{ m: 1 }}>
            Fund
          </Button>
        </Box>
      </Box>
    </>
  );
}
