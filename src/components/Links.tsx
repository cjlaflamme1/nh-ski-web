import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo/app-splash.png";

const links = [
  {
    label: "Website",
    href: "/",
    variant: "contained" as const,
    external: false,
  },
  {
    label: "Download on the App Store",
    href: "https://apps.apple.com/us/app/nh-ski-map/id6758867978",
    variant: "contained" as const,
    external: true,
  },
  {
    label: "Get it on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.backcountryskimap.api",
    variant: "contained" as const,
    external: true,
  },
  {
    label: "Watch the Intro Video",
    href: "https://youtu.be/p41AHX6lUAg",
    variant: "outlined" as const,
    external: true,
  },
];

export default function Links() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a5f7a 0%, #0d3d50 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Stack spacing={3} alignItems="center">
          <Box
            component="img"
            src={logo}
            alt="NH Ski Map logo"
            sx={{ width: 120, height: 120, borderRadius: 3 }}
          />
          <Typography
            variant="h5"
            sx={{ color: "white", textAlign: "center" }}
          >
            NH Ski Map
          </Typography>
          <Stack spacing={2} sx={{ width: "100%" }}>
            {links.map((link) => (
              <Button
                key={link.label}
                variant={link.variant}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  ...(link.variant === "outlined" && {
                    color: "white",
                    borderColor: "rgba(255,255,255,0.6)",
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }),
                  ...(link.variant === "contained" && {
                    backgroundColor: "white",
                    color: "#1a5f7a",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.9)",
                    },
                  }),
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
