import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { asyncToggleTheme } from "../../store/slice/themeSlice";
import { toggleNavigation } from "../../store/slice/navigationSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BurgerBox } from "../icons/Icons";



const pages = ["about", "portfolio", "contacts"];


const Navigation = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state)=> state.navigate.isOpened);
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "52%" }}
    >
      <Button
          onClick={() => dispatch(asyncToggleTheme())}
          color="inherit"
          sx={{
            backgroundColor: "secondary.dark",
            border: "1px solid #606060",
            borderRadius: "5px",
            minWidth: { xs: "30px", sm: "40px" },
            minHeight: { xs: "30px", sm: "40px" },
            padding: 0,
          }}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon
              sx={{
                width: { xs: "20px", sm: "24px" },
                height: { xs: "20px", sm: "24px" },
              }}
            />
          ) : (
            <Brightness7Icon
              sx={{
                width: { xs: "20px", sm: "24px" },
                height: { xs: "20px", sm: "24px" },
              }}
            />
          )}
      </Button>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            href={"#"+page}
            key={page}
            sx={{ color: "inherit", display: "block", mx: "30px" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Button
          color="inherit"
          onClick={()=> dispatch(toggleNavigation())}
          sx={{
            display: { md: "none" },
            backgroundColor: "secondary.dark",
            border: "1px solid #606060",
            borderRadius: "5px",
            minWidth: { xs: "30px", sm: "40px" },
            minHeight: { xs: "30px", sm: "40px" },
            padding: 0,
          }}
        >
          <BurgerBox isOpened={isOpened}/>
      </Button>
     
    </Box>
  );
};
export default Navigation;
