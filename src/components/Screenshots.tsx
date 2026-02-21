import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import routeList from "../assets/appScreenShots/routeList.png";
import routeDetail from "../assets/appScreenShots/description.png";
import mapRouteSelected from "../assets/appScreenShots/mapRouteSelected.png";
import favoriteList from "../assets/appScreenShots/favorites.png";
import download from "../assets/appScreenShots/download.png";
import mapView from "../assets/appScreenShots/mapView.png";

const screenshots = [
  { src: routeList, alt: "Route list view" },
  { src: routeDetail, alt: "Route detail view" },
  { src: mapView, alt: "Map view" },
  { src: mapRouteSelected, alt: "Map with route selected" },
  { src: favoriteList, alt: "Favorites list" },
  { src: download, alt: "Download for offline" },
];

export default function Screenshots() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          See It in Action
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            overflowX: "auto",
            pb: 2,
            px: 1,
            "&::-webkit-scrollbar": { height: 8 },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "grey.300",
              borderRadius: 4,
            },
          }}
        >
          {screenshots.map((shot) => (
            <Box
              key={shot.alt}
              component="img"
              src={shot.src}
              alt={shot.alt}
              sx={{
                height: { xs: 350, md: 450 },
                borderRadius: 3,
                boxShadow: 3,
                flexShrink: 0,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
