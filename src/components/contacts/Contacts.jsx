import { Box } from "@mui/material";
import madi from "../../assets/images/madi.png";
import ContactText from "./ContactText";
import ContactButtons from "./ContactButtons";


const Contacts = () => {
  return (
    <Box 
      sx={{ 
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "85vh", 
      }} 
      id="contacts">
      <Box
        component="img"
        alt="Image"
        src={madi}
        sx={{
          width: { xs: "110px", sm: "160px", md: "140px" },
          height: { xs: "110px", sm: "160px", md: "140px" },
          border: "2px solid",
          borderColor: "divider",
          borderRadius: "50%",
        }}
      />
      <ContactText/>
      <ContactButtons/>
    </Box>
  );
};
export default Contacts;
