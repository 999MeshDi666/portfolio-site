import {Typography,Box} from "@mui/material";
import PortfolioTabs from "./PortfolioTabs";


const Portfolio = () => {
  
  return (
    <Box sx={{ py: "50px" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20px", sm: "40px", md: "48px" },
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Portfolio
      </Typography>
      <PortfolioTabs/>
    </Box>
  );
};
export default Portfolio;
