import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import appStore from "../assets/appleAppStore.svg";
import googlePlay from "../assets/googlePlay.svg";

export default function CallToAction() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
          Ready to start exploring?
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, fontWeight: 400 }}
        >
          Download NH Ski Map and start exploring New Hampshire's best backcountry
          routes today.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, fontStyle: "italic" }}
        >
          Coming soon to
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
                href="#"
                disabled
              >
                <Box
                  component="img"
                  src={appStore}
                  alt="Download on the App Store"
                  sx={{ height: 40 }}
                />
              </Button>
              <Button
                href="#"
                disabled
              >
                  <Box
                    component="img"
                    src={googlePlay}
                    alt="Download on Google Play"
                    sx={{ height: 40 }}
                  />
              </Button>
        </Stack>
      </Container>
    </Box>
  );
}
