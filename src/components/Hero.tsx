import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import mapView from "../assets/appScreenShots/mapView.png";

export default function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a5f7a 0%, #0d3d50 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Explore New Hampshire's Backcountry Ski Routes
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}
            >
              Discover 99 routes across 11 regions with interactive maps,
              detailed route info, and offline access — all in one app.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="contained"
                size="large"
                href="#"
                startIcon={<AppleIcon />}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                }}
              >
                Download on App Store
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#"
                startIcon={<ShopIcon />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": { borderColor: "grey.300", bgcolor: "rgba(255,255,255,0.1)" },
                  textTransform: "none",
                  px: 3,
                  py: 1.5,
                }}
              >
                Get on Google Play
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={mapView}
              alt="NH Ski app map view"
              sx={{
                maxHeight: { xs: 400, md: 500 },
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
