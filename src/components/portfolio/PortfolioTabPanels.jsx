import { Box } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import spaceship from "../../assets/images/spaceship.svg";
import yawning from "../../assets/images/yawning.svg";
import sandwich from "../../assets/images/sandwich.svg";
import retro from "../../assets/images/retro-game.svg";
import mythology from "../../assets/images/mythology.svg";
import keyboard from "../../assets/images/keyboard-key.svg";
import books from "../../assets/images/books.svg";
import puzzle from "../../assets/images/puzzle.svg";
const designList = [
  {
    title: "Flexbox cosmo\nadventure",
    subtitle: "Learn flexbox layout in the\ngame.",
    bgColor: "#4A4D55",
    link: "https://www.figma.com/file/qba00029hJhXSb613S7erY/Flex-Box-cosmo-adventure?node-id=0%3A1&t=KlHBjMzDOGRsFPNE-1",
    img: spaceship,
  },
  {
    title: "Polyglot",
    subtitle: "Improve your pronunciation\nin different languages",
    bgColor: "#554A55",
    link: "https://www.figma.com/file/j68EC8PlHSNfY2CFgRrBpv/Polyglot?node-id=0%3A1&t=2Hyam7e9KM3oJ5za-1",
    img: yawning,
  },
  {
    title: "Eco Sandwiches",
    subtitle:
      "Quick, fresh & delicious. Made by\nhand, from scratch, with love",
    bgColor: "#4A554B",
    link: "https://www.figma.com/file/3ah103NStIWFvNd3D71iFE/Eco-Sandwiches?node-id=2%3A2&t=qyj0hQru8TovBMuM-1",
    img: sandwich,
  },
  {
    title: "Mythical GameJam",
    subtitle: "Mythical hackathon for\ngame developers",
    bgColor: "#597777",
    link: "https://www.figma.com/file/GsRGJTzPTTmNcweEvYl455/GameJam2-v2?node-id=202%3A4&t=snPEezgR6XBQgrHa-1",
    img: mythology,
  },
  {
    title: "DiDi Store",
    subtitle: "Online  book store for\nbook enjoyers",
    bgColor: "#343434",
    link: "https://www.figma.com/file/j6t6epY85M5MoMdpKY31NQ/DiDi-Store?node-id=0%3A1&t=MFvG4GWTpn67DOnX-1",
    img: books,
  },
  {
    title: "Tanu",
    subtitle: "Online and free education\nplatform",
    bgColor: "#526B50",
    link: "https://www.figma.com/file/b7LCEiAeBrAurjQslZbSyg/Tanu?node-id=0%3A1&t=7BkmOmWjQ7iE4g1d-1",
    img: puzzle,
  },
];
const projectList = [
  {
    title: "Flexbox cosmo\nadventure",
    subtitle: "Learn flexbox layout in the\ngame.",
    bgColor: "#4A4D55",
    link: "https://flexbox-cosmo-adventure-nwyragrcr-999meshdi666.vercel.app/",
    img: spaceship,
  },
  {
    title: "Polyglot",
    subtitle: "Improve your pronunciation\nin different languages",
    bgColor: "#554A55",
    link: "https://github.com/999MeshDi666/flexbox-cosmo-adventure",
    img: yawning,
  },
  {
    title: "Retro GameJam",
    subtitle: "Retro hackathon for game\ndevelopers",
    bgColor: "#3B5647",
    link: "https://999meshdi666.github.io/GameJam/",
    img: retro,
  },
  {
    title: "Mythical GameJam",
    subtitle: "Mythical hackathon for\ngame developers",
    bgColor: "#597777",
    link: "https://mgjsu-22-qvdt4fkef-999meshdi666.vercel.app/",
    img: mythology,
  },
  {
    title: "DiDi Store",
    subtitle: "Online  book store for\nbook enjoyers",
    bgColor: "#343434",
    link: "https://github.com/999MeshDi666/DiDiStore",
    img: books,
  },
  {
    title: "Yamete Kudasai extension",
    subtitle: "Funny sounds on any key.\nBetter for fasttypers",
    bgColor: "#505259",
    link: "https://github.com/999MeshDi666/yamete-kudasai-chrome-extension",
    img: keyboard,
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "space-evenly", lg: "space-between" },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

const PortfolioTabPanels = ({ value }) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        {designList.map((elem, index) => (
          <PortfolioCard
            key={index}
            title={elem.title}
            subtitle={elem.subtitle}
            link={elem.link}
            color={elem.bgColor}
            img={elem.img}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {projectList.map((elem, index) => (
          <PortfolioCard
            key={index}
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
