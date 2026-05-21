import { Grid, Paper, Typography, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

function Card({ icon, title, body }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
        transition: "all .25s ease",
        "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)" },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1.5 }}>
        {icon}
        <Typography variant="h6">{title}</Typography>
      </Stack>
      <Typography color="text.secondary">{body}</Typography>
    </Paper>
  );
}

export default function About() {
  const { t } = useTranslation();
  return (
    <Section id="about" title={t("about.title")}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            icon={<PersonIcon color="primary" />}
            title={t("about.title")}
            body={t("about.bio")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            icon={<SchoolIcon color="primary" />}
            title={t("about.educationTitle")}
            body={t("about.education")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            icon={<RocketLaunchIcon color="primary" />}
            title={t("about.goalsTitle")}
            body={t("about.goals")}
          />
        </Grid>
      </Grid>
    </Section>
  );
}
