import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { asyncToggleTheme } from "../../store/slice/themeSlice";
import { toggleNavigation } from "../../store/slice/navigationSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BurgerBox } from "../icons/Icons";
const pages = ["About", "Portfolio", "Contacts"];


const Navigation = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state)=> state.navigate.isOpened);
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "52%" }}
    >
      <Box>
        <Button
          onClick={() => dispatch(asyncToggleTheme())}
          color="inherit"
          sx={{
            backgroundColor: "secondary.main",
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
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ color: "inherit", display: "block", mx: "30px" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Button
          color="inherit"
          onClick={()=> dispatch(toggleNavigation())}
          sx={{
            backgroundColor: "secondary.main",
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
     
    </Box>
  );
};
export default Navigation;
