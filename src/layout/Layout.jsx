import {Container} from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Contacts from "../components/contacts/Contacts";
import NavigationModal from "../components/navbar/NavigationModal";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from "../components/footer/Footer";
import Model from "../components/model/Model";

const Layout = () => {
  return (
    <>
      <Navbar />
      <NavigationModal />
      <Container>
        <Contacts />
        <Model />
        <About />
        <Portfolio />
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
