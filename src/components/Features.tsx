import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ExploreIcon from "@mui/icons-material/Explore";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";

const features = [
  {
    icon: <ExploreIcon sx={{ fontSize: 40 }} />,
    title: "Browse Routes",
    description:
      "99+ routes across 12 regions. Filter by terrain features like glades, alpine terrain, and more.",
  },
  {
    icon: <MapIcon sx={{ fontSize: 40 }} />,
    title: "Interactive Maps",
    description:
      "Topographic maps with route overlays so you can visualize every trail before you go.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: "Favorites & Offline",
    description:
      "Save your favorite routes and download maps for offline use in the backcountry.",
  },
  {
    icon: <InfoIcon sx={{ fontSize: 40 }} />,
    title: "Route Details",
    description:
      "Distance, elevation gain, and descriptions for every route to help you plan your day.",
  },
];

export default function Features() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Everything You Need on the Mountain
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  textAlign: "center",
                  bgcolor: "white",
                  border: "1px solid",
                  borderColor: "grey.200",
                  borderRadius: 3,
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
