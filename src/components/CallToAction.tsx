import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

export default function CallToAction() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
          Ready to Hit the Slopes?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, fontWeight: 400 }}
        >
          Download NH Ski and start exploring New Hampshire's best backcountry
          routes today.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            size="large"
            href="#"
            startIcon={<AppleIcon />}
            sx={{ textTransform: "none", px: 3, py: 1.5 }}
          >
            Download on App Store
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#"
            startIcon={<ShopIcon />}
            sx={{ textTransform: "none", px: 3, py: 1.5 }}
          >
            Get on Google Play
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
