import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Section({ id, title, children, sx }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 80, ...sx }}
    >
      <Container maxWidth="lg">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              sx={{ mb: 6, position: "relative", display: "inline-block" }}
            >
              {title}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  height: 4,
                  width: 48,
                  bgcolor: "primary.main",
                  borderRadius: 2,
                }}
              />
            </Typography>
          </motion.div>
        )}
        {children}
      </Container>
    </Box>
  );
}
