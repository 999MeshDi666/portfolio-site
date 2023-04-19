import { Typography, Box, Button, Grid, Stack } from "@mui/material";
import madi from "../../assets/images/madi.png";
import { GitHub } from "../icons/Icons";
import { LinkedIn } from "../icons/Icons";
import { Telegram } from "../icons/Icons";

const Contacts = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: "86px" }}>
      <Box
        component="img"
        alt="Image"
        src={madi}
        sx={{
          width: { xs: "80px", sm: "160px" },
          height: { xs: "80px", sm: "160px" },
          border: "2px solid",
          borderColor: "divider",
          borderRadius: "50%",
        }}
      />
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "18px", sm: "36px" }, fontWeight: 700 }}
        >
          Yegeubekov Madi
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", fontSize: { xs: "10px", sm: "20px" } }}
        >
          @Madi0404
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "24px" },
            marginTop: { xs: "8px", sm: "16px" },
          }}
        >
          Hi👋 , my name is Madi and I want to <br /> be a frontend developer✌.
        </Typography>
      </Box>
      <Box sx={{ marginTop: {xs: "16px", sm: "36px" }}}>
        <Button
          href="https://github.com/999MeshDi666"
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            width: { xs: "180px", sm: "368px" },
            height: {xs: "30px", sm: "60px"},
            borderRadius: "50px",
            border: "0.5px solid #000",
            boxShadow: "none", 
          }}
        >
          <GitHub />
        </Button>
        <Stack
          direction="row"
          justifyContent="center"
       
          mt={{ xs: "8px", sm: "16px" }}
          spacing={{ xs: 1, sm: 3 }}
        >
          <Button
            href="https://www.linkedin.com/in/madi-yegeubekov-060479248/"
            variant="contained"
            sx={{
              backgroundColor: "#497EBC",
              width: {xs: "85px", sm: "170px"},
              height: {xs: "26px", sm: "52px"},
              borderRadius: "50px",
              border: "0.5px solid #000",
              boxShadow: "none", 
            }}
          >
            <LinkedIn />
          </Button>
          <Button
            href="https://t.me/Madi0404"
            variant="contained"
            sx={{
              backgroundColor: "#4199FF",
              width: {xs: "85px", sm: "170px"},
              height: {xs: "26px", sm: "52px"},
              borderRadius: "50px",
              border: "0.5px solid #000",
              boxShadow: "none", 
            }}
          >
            <Telegram />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default Contacts;