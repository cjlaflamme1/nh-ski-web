import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import mapView from "../assets/appScreenShots/mapView.png";
import appStore from "../assets/appleAppStore.svg";
import googlePlay from "../assets/googlePlay.svg";
import logo from "../assets/logo/app-splash.png";

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
              Discover 99+ routes across 12 regions with interactive maps,
              detailed route info, and offline access — all in one app.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { md: 3 },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="NH Ski Map logo"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 2,
                  mb: { xs: 4, md: 0 },
                }}
              />
              <Box>
                {/* <Typography
                  variant="body2"
                  sx={{ mb: 1, opacity: 0.7, fontStyle: "italic" }}
                >
                  Coming soon to
                </Typography> */}
                <Stack direction="row" spacing={1}>
                  <Button href="#" disabled>
                    <Box
                      component="img"
                      src={appStore}
                      alt="Download on the App Store"
                      sx={{ height: 40 }}
                    />
                  </Button>
                  <Button href="#" disabled>
                    <Box
                      component="img"
                      src={googlePlay}
                      alt="Download on Google Play"
                      sx={{ height: 40 }}
                    />
                  </Button>
                </Stack>
              </Box>
            </Box>
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
