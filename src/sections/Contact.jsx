import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t("contact.errors.nameRequired");
    if (!form.email.trim()) e.email = t("contact.errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("contact.errors.emailInvalid");
    if (!form.message.trim()) e.message = t("contact.errors.messageRequired");
    else if (form.message.trim().length < 10)
      e.message = t("contact.errors.messageShort");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setOpen(true);
    setForm({ name: "", email: "", message: "" });
  };

  const handle = (k) => (ev) => setForm({ ...form, [k]: ev.target.value });

  return (
    <Section id="contact" title={t("contact.title")}>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        {t("contact.subtitle")}
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        sx={{ maxWidth: 640 }}
      >
        <Stack spacing={2.5}>
          <TextField
            label={t("contact.name")}
            value={form.name}
            onChange={handle("name")}
            error={!!errors.name}
            helperText={errors.name}
            fullWidth
            inputProps={{ maxLength: 100 }}
          />
          <TextField
            label={t("contact.email")}
            value={form.email}
            onChange={handle("email")}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            inputProps={{ maxLength: 255 }}
          />
          <TextField
            label={t("contact.message")}
            value={form.message}
            onChange={handle("message")}
            error={!!errors.message}
            helperText={errors.message}
            fullWidth
            multiline
            minRows={5}
            inputProps={{ maxLength: 1000 }}
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
            >
              {t("contact.send")}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpen(false)}>
          {t("contact.success")}
        </Alert>
      </Snackbar>
    </Section>
  );
}
