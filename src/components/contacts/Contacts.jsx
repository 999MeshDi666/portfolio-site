import { Typography, Box, Button, Stack } from "@mui/material";
import madi from "../../assets/images/madi.png";
import {
  GitHub,
  LinkedIn,
  Telegram,
} from "../icons/Icons"

const general = {
  borderRadius: "50px",
  border: "0.5px solid #000",
  boxShadow: "none",
};


const Contacts = () => {
  return (
    <Box sx={{ textAlign: "center", pt: "80px", pb: {xs: "50px", sm:"100px"}}}>
      <Box
        component="img"
        alt="Image"
        src={madi}
        sx={{
          width: { xs: "80px", sm: "160px", md: "140px" },
          height: { xs: "80px", sm: "160px", md: "140px" },
          border: "2px solid",
          borderColor: "divider",
          borderRadius: "50%",
        }}
      />
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "18px", sm: "36px", md: "32px"}, fontWeight: 700 }}
        >
          Yegeubekov Madi
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", fontSize: { xs: "10px", sm: "20px", md: "18px" } }}
        >
          @Madi0404
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "24px", md: "22px" },
            marginTop: { xs: "8px", sm: "16px" },
          }}
        >
          Hi👋 , my name is Madi and I want to <br /> be a frontend developer✌.
        </Typography>
      </Box>
      <Box sx={{ marginTop: { xs: "16px", sm: "36px" } }}>
        <Button
          href="https://github.com/999MeshDi666"
          style={general}
          sx={{
            backgroundColor: "#fff",
            width: { xs: "180px", sm: "296px", md: "280px" },
            height: { xs: "30px", sm: "60px" , md: "55px"},
            "&:hover": {
              backgroundColor: "#fff",
            },
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
            style={general}
            sx={{
              backgroundColor: "#497EBC",
              width: { xs: "85px", sm: "138px", md: "128px" },
              height: { xs: "26px", sm: "46px", md: "42px" },
              "&:hover": {
                backgroundColor: "#497EBC",
              },
            }}
          >
            <LinkedIn />
          </Button>
          <Button
            href="https://t.me/Madi0404"
            style={general}
            sx={{
              backgroundColor: "#4199FF",
              width: { xs: "85px", sm: "138px", md: "128px" },
              height: { xs: "26px", sm: "46px", md: "42px" },
              "&:hover": {
                backgroundColor: "#4199FF",
              },
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
