import { Typography, Box, Stack } from "@mui/material";
import {
  JavaScript,
  CSharp,
  Python,
  Firebase,
  MySql,
  Postgres,
  Html,
  CSS,
  Figma,
  Photoshop,
} from "../icons/Icons";

const skillList = [
  <JavaScript />,
  <CSharp />,
  <Python />,
  <Firebase />,
  <MySql />,
  <Postgres />,
  <Html />,
  <CSS />,
  <Figma />,
  <Photoshop />,
];
const About = () => {
  return (
    <Box sx={{pt: {sm: "50px"}}}>
      <Box sx={{px: {md: "120px"}}}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", sm: "40px", md: "46px" },
            fontWeight: 800,
            marginBottom: { xs: "20px", sm: "30px"},
            textAlign: "center",
          }}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
                fontSize: { xs: "14px", sm: "20px", md: "18px"}, 
                textAlign: "justify",
                lineHeight: {md: "35px"}
            }}
        >
          I like to develop and make various applications that can help not only
          me but also the people around me in the future, there are not so many
          projects, and they can be found on my github
          (https://github.com/999MeshDi666).
          <br />
          Basically, in development, I like to work on the appearance of the
          application, on its presentability and external functionality, work on
          the markup and details of the application. From time to time I try to
          make my own layouts on figma. For the frontend part, I am currently
          studying javascript library, the react.js and other technologies that
          are required in this area.
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{
          marginTop: { xs: "40px", sm: "65px" },
          mx: "auto",
          textAlign: "center",
          width: { xs: "180px", sm: "300px" },
        }}
      >
        {skillList.map((skill, index) => (
          <Box
            component="span"
            sx={{
              mx: { xs: "6px", sm: "10px" },
              marginBottom: { xs: "6px", sm: "15px" },
            }}
            key={index}
          >
            {skill}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
export default About;
