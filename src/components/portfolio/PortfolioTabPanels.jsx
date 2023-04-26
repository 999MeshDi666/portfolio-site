import { Box } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import spaceship from "../../assets/images/spaceship.svg";
import yawning from "../../assets/images/yawning.svg";
import sandwich from "../../assets/images/sandwich.svg";

const designList = [
    {
        title: "Flexbox cosmo\nadventure",
        subtitle: "Learn flexbox layout in the\ngame.",
        bgColor: "#4A4D55",
        link: "https://www.figma.com/file/qba00029hJhXSb613S7erY/Flex-Box-cosmo-adventure?node-id=0%3A1&t=KlHBjMzDOGRsFPNE-1",
        img: spaceship
    },
    {
        title: "Polyglot",
        subtitle: "Improve your pronunciation\nin different languages",
        bgColor: "#554A55",
        link: "https://www.figma.com/file/j68EC8PlHSNfY2CFgRrBpv/Polyglot?node-id=0%3A1&t=2Hyam7e9KM3oJ5za-1",
        img: yawning
    },
    {
        title: "Eco Sandwiches",
        subtitle: "Quick, fresh & delicious. Made by\nhand, from scratch, with love",
        bgColor: "#4A554B",
        link: "https://www.figma.com/file/3ah103NStIWFvNd3D71iFE/Eco-Sandwiches?node-id=2%3A2&t=qyj0hQru8TovBMuM-1",
        img: sandwich
    },
   
]
const projectList = [
    {
        title: "Flexbox cosmo\nadventure",
        subtitle: "Learn flexbox layout in the\ngame.",
        bgColor: "#4A4D55",
        link: "https://www.figma.com/file/qba00029hJhXSb613S7erY/Flex-Box-cosmo-adventure?node-id=0%3A1&t=KlHBjMzDOGRsFPNE-1",
        img: spaceship
    },
    {
        title: "Polyglot",
        subtitle: "Improve your pronunciation\nin different languages",
        bgColor: "#554A55",
        link: "https://github.com/999MeshDi666/flexbox-cosmo-adventure",
        img: yawning
    },
   
]


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && 
        <Box 
            sx={{
                display: "flex", flexWrap: "wrap", 
                justifyContent: {xs: "space-evenly", md: "space-between"} }
            }>
            {children}
        </Box>}
    </div>
  );
};

const PortfolioTabPanels = ({value}) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        {designList.map((elem)=>(
            <PortfolioCard 
                key={elem.title}
                title={elem.title}
                subtitle={elem.subtitle}
                link={elem.link}
                color={elem.bgColor}
                img={elem.img}
            />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {projectList.map((elem)=>(
                <PortfolioCard 
                    key={elem.title}
                    title={elem.title}
                    subtitle={elem.subtitle}
                    link={elem.link}
                    color={elem.bgColor}
                    img={elem.img}
                />
            ))}
      </TabPanel>
    </>
  );
};

export default PortfolioTabPanels;