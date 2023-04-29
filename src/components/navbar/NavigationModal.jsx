import { Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigation } from "../../store/slice/navigationSlice";
const pages = ["about", "portfolio", "contacts"];


const NavigationModal = () => {
  const isOpened = useSelector((state)=> state.navigate.isOpened);
  const dispatch = useDispatch();
  
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
        {pages.map((page) => (
          <Typography
            component="a"
            sx={{ 
              fontSize: {xs:"25px", sm: "50px" },
              display: "block", 
              marginBottom: "50px",
              color: "text.primary",
              textDecoration: "none", 
              textTransform: "uppercase"
            }}
            key={page}
            href={"#"+page}
            onClick={() => dispatch(toggleNavigation())}
          >
            {page}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
export default NavigationModal;
