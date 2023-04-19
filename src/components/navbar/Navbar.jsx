import { Container, Typography, 
        Box, AppBar } from "@mui/material";
import Navigation from "./Navigation";
const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none", 
        borderBottom: "0.5px solid",
        borderColor: "divider",
        backgroundImage: "none",
        backgroundColor: "primary.main"
      }}
    >
      <Container sx={{py: "18px"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
         <Navigation/>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
