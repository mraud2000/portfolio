import { Box, Container, Stack, IconButton, Typography } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{ py: 4, borderTop: 1, borderColor: "divider", mt: 4 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © 2026. Conçu et développé par Audry Munezero.
          </Typography>
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
        </Stack>
      </Container>
    </Box>
  );
}
