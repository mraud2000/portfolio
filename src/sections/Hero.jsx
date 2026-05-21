import { Box, Button, Container, Stack, Typography, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";
import profile from "../assets/profile.jpg";

const MotionBox = motion(Box);

export default function Hero() {
  const { t } = useTranslation();

  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 12,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at 20% 20%, rgba(124,156,255,0.15), transparent 60%)"
            : "radial-gradient(circle at 20% 20%, rgba(59,91,219,0.10), transparent 60%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
        >
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ flex: 1 }}
          >
            <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
              {t("hero.greeting")}
            </Typography>
            <Typography variant="h1" className="text-2xl font-semibold" sx={{ fontSize: { xs: "2.5rem", md: "3.75rem" }, mb: 1 }}>
              {t("hero.name")}
            </Typography>
            <Typography variant="h4" color="text.secondary" sx={{ mb: 3, fontWeight: 400 }}>
              {t("hero.title")}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
              {t("hero.intro")}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scroll("projects")}
              >
                {t("hero.viewProjects")}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href="/cv.pdf"
                download
              >
                {t("hero.downloadCV")}
              </Button>
            </Stack>

            <Stack direction="row" spacing={1}>
              <IconButton href="https://github.com/MAudrry" target="_blank" rel="noopener" aria-label="GitHub">
                <FaGithub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/audry-munezero/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <FaLinkedin />
              </IconButton>
              <IconButton href="https://www.instagram.com/m__audry/" target="_blank" rel="noopener" aria-label="Instagram">
                <FaInstagram />
              </IconButton>
              <IconButton href="mailto:audry.munezero.AM@gmail.com" aria-label="Email">
                <MdEmail />
              </IconButton>
            </Stack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            sx={{ flex: { md: "0 0 auto" } }}
          >
            <Avatar
              src={profile}
              alt={t("hero.name")}
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                boxShadow: 6,
                border: 4,
                borderColor: "background.paper",
              }}
            />
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
}
