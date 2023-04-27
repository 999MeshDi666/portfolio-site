import { Box, Typography } from "@mui/material";
import Madi from "./Madi";

const Model = () => {
  return (
    <Box sx={{ pt: "50px" }}>
      <Box sx={{textAlign: "center"}}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "24px", sm: "40px", md: "46px" },
            fontWeight: 800,
          }}
        >
          Literally me
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "14px", sm: "20px", md: "18px" },
          }}
        >
         Touch or rotate this 3d object
        </Typography>
      </Box>
      <Madi />
    </Box>
  );
};
export default Model;
