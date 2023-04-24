import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PortfolioTabPanels from "./PortfolioTabPanels";

const TabTitles = (props) => {
  return (
    <Tab
      {...props}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        fontSize: { xs: "16px", sm: "24px" },
      }}
   />
  );
};
const PortfolioTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="portfolio tabs"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <TabTitles
            label="Design"
            id="portfolio-tab-0"
            aria-controls="portfolio-tabpanel-0"
          />
          <TabTitles
            label="Projects"
            id="portfolio-tab-1"
            aria-controls="portfolio-tabpanel-1"
          />
        </Tabs>
      </Box>
      <PortfolioTabPanels value={value}/>
    </>
  );
};
export default PortfolioTabs;
