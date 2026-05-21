import { Grid, Paper, Typography, Chip, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

const data = {
  frontend: ["React", "JavaScript", "TypeScript", "MUI", "Tailwind", "HTML/CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "REST", "GraphQL"],
  tools: ["Git", "Docker", "Vite", "Figma", "VS Code"],
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Section id="skills" title={t("skills.title")}>
      <Grid container spacing={3}>
        {Object.entries(data).map(([key, items]) => (
          <Grid size={{ xs: 12, md: 4 }} key={key}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                {t(`skills.${key}`)}
              </Typography>
              <Stack direction="row" useFlexGap flexWrap="wrap" sx={{ gap: 1 }}>
                {items.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    sx={{
                      fontWeight: 500,
                      maxWidth: "100%",
                      "&:hover": { bgcolor: "primary.main", color: "primary.contrastText" },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
