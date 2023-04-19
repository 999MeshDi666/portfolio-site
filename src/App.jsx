import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import { useMemo, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import Contacts from "./components/contacts/Contacts";
import NavigationModal from "./components/navbar/NavigationModal";
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
            main: "#343434",
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
            main: "#E7DFBD",
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
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
