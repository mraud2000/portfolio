import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTranslation } from "react-i18next";
import { useColorMode } from "../theme/ColorModeContext";

const sections = ["home", "about", "projects", "skills", "contact"];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { mode, toggle } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  const changeLang = (_e, val) => {
    if (val) i18n.changeLanguage(val);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: (t) =>
          t.palette.mode === "dark"
            ? "rgba(11,13,18,0.7)"
            : "rgba(255,255,255,0.7)",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, cursor: "pointer", flexGrow: { xs: 1, md: 0 } }}
          onClick={() => handleNav("home")}
        >
          {t("hero.name")}
        </Typography>

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1, ml: 4, flexGrow: 1 }}>
            {sections.map((s) => (
              <Button
                key={s}
                color="inherit"
                onClick={() => handleNav(s)}
                sx={{ fontWeight: 500 }}
              >
                {t(`nav.${s}`)}
              </Button>
            ))}
          </Box>
        )}

        <ToggleButtonGroup
          size="small"
          exclusive
          value={i18n.language?.startsWith("fr") ? "fr" : "en"}
          onChange={changeLang}
          aria-label="language"
        >
          <ToggleButton value="fr" sx={{ px: 1.5, fontWeight: 600 }}>
            FR
          </ToggleButton>
          <ToggleButton value="en" sx={{ px: 1.5, fontWeight: 600 }}>
            EN
          </ToggleButton>
        </ToggleButtonGroup>

        <Tooltip title={t("nav.toggleTheme")}>
          <IconButton onClick={toggle} color="inherit" aria-label={t("nav.toggleTheme")}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        {isMobile && (
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setOpen(true)}
            aria-label={t("nav.openMenu")}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }} role="presentation">
          <List>
            {sections.map((s) => (
              <ListItem key={s} disablePadding>
                <ListItemButton onClick={() => handleNav(s)}>
                  <ListItemText primary={t(`nav.${s}`)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
