import { Typography, Box, Container, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="relative"
      sx={{
        boxShadow: "none",
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundImage: "none",
        backgroundColor: "primary.main",
      }}
    >
      <Container sx={{ py: "18px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: "flex",
              fontWeight: 800,
              color: "text.primary",
              fontSize: { xs: 21, sm: 30 },
              textDecoration: "none",
            }}
          >
            MESHDI
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Footer;
