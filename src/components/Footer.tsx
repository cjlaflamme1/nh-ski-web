import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, bgcolor: "grey.900", color: "grey.400" }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} NH Ski. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
