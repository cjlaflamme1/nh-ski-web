import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function DonationNotice() {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.50", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="body1" color="text.secondary">
          All subscription proceeds are donated to the{" "}
          <Link
            href="https://www.whitemountainhealth.org/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#1a5f7a", fontWeight: 600 }}
          >
            White Mountain Community Health Center
          </Link>{" "}
          through May 2026.
        </Typography>
      </Container>
    </Box>
  );
}
