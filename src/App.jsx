import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Container,
  Box
} from "@mui/material";
import { useMemo, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import Contacts from "./components/contacts/Contacts";
import NavigationModal from "./components/navbar/NavigationModal";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Model from "./components/model/Model";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#3a3a3a",
            contrastText: "#fff",
          },
          secondary: {
            main: "#fff",
            dark: "#343434",
            contrastText: "#fff",
          },
          divider: "#f9f4dc",
          background: {
            default: "#3a3a3a",
          },
          text: {
            primary: "#fff",
            secondary: "#BDBDBD",
          },
        }
      : {
          primary: {
            main: "#f9f4dc",
            contrastText: "#3a3a3a",
          },
          secondary: {
            main: "#343434",
            dark: "#E7DFBD",
            contrastText: "#3a3a3a",
          },
          divider: "#3a3a3a",
          background: {
            default: "#f9f4dc",
          },
          text: {
            primary: "#3a3a3a",
            secondary: "#808080",
          },
        }),
  },
  typography: {
    fontFamily: "Kanit",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  
  
});
function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state)=>state.theme.darkMode);

  useMemo(()=>{
    if (darkMode) {
      setMode("light");
    } else {
      setMode("dark");
    }
    
  }, [darkMode]);
  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <NavigationModal/>
       
        <Container>
          <Contacts/>
          <Model/> 
          <About/>
          <Portfolio/>
        </Container>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
