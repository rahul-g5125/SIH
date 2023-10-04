import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

export default function Socials() {
  const styles = {
    marginX: 1,
    fontSize: "2rem",
    cursor: "pointer",
  };
  return (
    <Box sx={{}}>
      <GitHubIcon sx={styles} />
      <InstagramIcon sx={styles} />
      <LinkedInIcon sx={styles} />
      <EmailIcon sx={styles} />
    </Box>
  );
}
