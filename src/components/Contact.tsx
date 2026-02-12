import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function Contact() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ display: "inline-block", mb: 4 }}
        >
          &larr; Back to Home
        </Link>

        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>

        <Typography paragraph sx={{ mt: 2 }}>
          Have questions, feedback, or need help with the NH Ski Map app? We'd love
          to hear from you.
        </Typography>

        <Typography paragraph>
          Reach out to us at{" "}
          <Link href="mailto:chad@redbeardtechnologies.com" sx={{ fontWeight: 600 }}>
            chad@redbeardtechnologies.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
