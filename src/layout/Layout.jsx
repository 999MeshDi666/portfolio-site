import { Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Contacts from "../components/contacts/Contacts";
import NavigationModal from "../components/navbar/NavigationModal";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from "../components/footer/Footer";
import Model from "../components/model/Model";
import AnimatedScroll from "./AnimatedScroll";
const Layout = () => {
  return (
    <>
      <Navbar />
      <NavigationModal />
      <Container>
        <AnimatedScroll>
          <Contacts />
        </AnimatedScroll>
        <AnimatedScroll>
          <Model />
        </AnimatedScroll>
        <AnimatedScroll>
          <About />
        </AnimatedScroll>
        <AnimatedScroll>
          <Portfolio />
        </AnimatedScroll>
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
