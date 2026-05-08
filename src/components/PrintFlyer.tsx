import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/logo/app-splash.png";
import mapView from "../assets/appScreenShots/mapView.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/nh-ski-map/id6758867978";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.backcountryskimap.api";

const features = [
  {
    title: "Browse 99+ Routes",
    description:
      "Routes across 12 regions, filterable by terrain — glades, alpine, and more.",
  },
  {
    title: "Interactive Topo Maps",
    description:
      "Topographic maps with route overlays so you can visualize every trail before you go.",
  },
  {
    title: "Offline Access",
    description:
      "Save favorites and download maps for offline use deep in the backcountry.",
  },
  {
    title: "Route Details",
    description:
      "Distance, elevation gain, and descriptions for every route to help you plan your day.",
  },
];

export default function PrintFlyer() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "#0d3d50",
        minHeight: "100vh",
        py: 4,
        // Print-only styling
        "@media print": {
          py: 0,
          minHeight: 0,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        },
        "@page": {
          size: "letter",
          margin: "0.4in",
        },
      }}
    >
      <Box
        sx={{
          width: "7.5in",
          mx: "auto",
          // On screen, give it a paper-like shadow so you can preview the page bounds
          boxShadow: { xs: "none", sm: "0 4px 24px rgba(0,0,0,0.15)" },
          bgcolor: "white",
          "@media print": { boxShadow: "none", width: "100%" },
        }}
      >
        {/* Header band */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #1a5f7a 0%, #0d3d50 100%)",
            color: "white",
            px: 4,
            py: 3,
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="NH Ski Map logo"
            sx={{ width: 96, height: 96, borderRadius: 2, flexShrink: 0 }}
          />
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: "2.25rem", lineHeight: 1.1 }}
            >
              NH Ski Map
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 0.5, opacity: 0.95, fontWeight: 400 }}
            >
              New Hampshire's Backcountry Ski Routes — in your pocket.
            </Typography>
          </Box>
        </Box>

        {/* Body */}
        <Box sx={{ px: 4, py: 3 }}>
          <Stack direction="row" spacing={4} alignItems="flex-start">
            {/* Left column: pitch + features */}
            <Box sx={{ flex: 1.4 }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.5 }}
              >
                Discover <strong>99+ backcountry ski routes</strong> across 12
                New Hampshire regions, with interactive topo maps, detailed
                route info, and full offline access — all in one free app.
              </Typography>

              <Stack spacing={1.5}>
                {features.map((f) => (
                  <Box key={f.title}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: "#1a5f7a",
                        fontSize: "1rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {f.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.4 }}
                    >
                      {f.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right column: phone screenshot */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box
                component="img"
                src={mapView}
                alt="NH Ski Map app"
                sx={{
                  maxHeight: "3.6in",
                  width: "auto",
                  borderRadius: 2,
                  border: "1px solid #ddd",
                }}
              />
            </Box>
          </Stack>

          {/* QR section */}
          <Box
            sx={{
              mt: 3,
              pt: 3,
              borderTop: "2px solid #1a5f7a",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                color: "#1a5f7a",
                mb: 2,
              }}
            >
              Scan to Download
            </Typography>

            <Stack
              direction="row"
              spacing={6}
              justifyContent="center"
              alignItems="flex-start"
            >
              <QRBlock
                label="iPhone / iPad"
                sublabel="App Store"
                url={APP_STORE_URL}
                displayUrl="apps.apple.com/app/id6758867978"
              />
              <QRBlock
                label="Android"
                sublabel="Google Play"
                url={PLAY_STORE_URL}
                displayUrl="play.google.com/store/apps/…backcountryskimap"
              />
            </Stack>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              mt: 3,
              pt: 2,
              borderTop: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "0.85rem" }}
            >
              Learn more at <strong>nhskimap.com</strong> — built by
              backcountry skiers, for backcountry skiers.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function QRBlock({
  label,
  sublabel,
  url,
  displayUrl,
}: {
  label: string;
  sublabel: string;
  url: string;
  displayUrl: string;
}) {
  return (
    <Stack alignItems="center" spacing={0.75} sx={{ minWidth: "2in" }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 700, color: "#0d3d50", fontSize: "1rem" }}
      >
        {label}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "#666", mt: "-2px !important" }}
      >
        {sublabel}
      </Typography>
      <Box
        sx={{
          p: 1,
          bgcolor: "white",
          border: "1px solid #1a5f7a",
          borderRadius: 1,
        }}
      >
        <QRCodeSVG
          value={url}
          size={140}
          level="M"
          marginSize={0}
          fgColor="#0d3d50"
        />
      </Box>
      <Typography
        variant="caption"
        sx={{
          color: "#888",
          fontSize: "0.7rem",
          maxWidth: "2in",
          textAlign: "center",
          wordBreak: "break-all",
        }}
      >
        {displayUrl}
      </Typography>
    </Stack>
  );
}
