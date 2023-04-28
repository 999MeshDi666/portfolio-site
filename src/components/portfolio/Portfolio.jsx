import {Typography,Box} from "@mui/material";
import PortfolioTabs from "./PortfolioTabs";


const Portfolio = () => {
  
  return (
    <Box sx={{ py: {xs: "50px", md:"100px"} }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "20px", sm: "40px", md: "46px" },
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "15px"
        }}
      >
        Portfolio
      </Typography>
      <PortfolioTabs/>
    </Box>
  );
};
export default Portfolio;
