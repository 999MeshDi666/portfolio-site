import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
const pages = ["About", "Portfolio", "Contacts"];


const NavigationModal = () => {
  const isOpened = useSelector((state)=> state.navigate.isOpened);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "background.default",
        width: "100%",
        height: "100%",
        visibility: isOpened? "visible": "hidden",
        opacity: isOpened? 1:0,
        transition: "visibility .2s, opacity .2s linear",
        zIndex:1000,
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "26%",
          textAlign: "center",
        }}
      >
        {pages.map((elem) => (
          <Typography
            sx={{ fontSize: {xs:"25px", sm: "50px" }, marginBottom: "50px" }}
            key={elem}
          >
            {elem}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
export default NavigationModal;
