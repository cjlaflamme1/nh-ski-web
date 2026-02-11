import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const stats = [
  { value: "99+", label: "Routes" },
  { value: "12", label: "Regions" },
  { value: "Offline", label: "Maps" },
];

export default function Stats() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  component="p"
                  sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
