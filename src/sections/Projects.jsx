import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Projects() {
  const { t } = useTranslation();
  const raw = t("projects.items", { returnObjects: true });
  const items = Array.isArray(raw) ? raw : [];

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      sx={{ bgcolor: (th) => (th.palette.mode === "dark" ? "background.paper" : "#f5f7fb") }}
    >
      <Grid container spacing={3}>
        {items.map((p, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: 1,
                borderColor: "divider",
              }}
              elevation={0}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {p.title}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {p.description}
                </Typography>
                <Stack direction="row" useFlexGap flexWrap="wrap" sx={{ gap: 1 }}>
                  {(p.tech || []).map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/MAudrry"
                  target="_blank"
                  rel="noopener"
                >
                  {t("projects.viewCode")}
                </Button>
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href="https://example.com"
                  target="_blank"
                  rel="noopener"
                >
                  {t("projects.liveDemo")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
