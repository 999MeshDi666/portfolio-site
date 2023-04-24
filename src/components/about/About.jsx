import { Typography, Box } from "@mui/material";

const About = () =>{
 return(
    <Box sx={{py: "50px"}}>
        <Typography 
            variant="h1"
            sx={{ 
                fontSize: { xs: "20px", sm: "40px", md: "60px" }, 
                fontWeight: 800, 
                marginBottom: {xs: "24px", sm: "44px" },
                textAlign: "center",
            }}>
            About me
        </Typography>
        <Typography
            variant="body1"
            sx={{fontSize: { xs: "14px", sm: "24px"}, textAlign: "justify"}}>
            I like to develop and make various applications that can help not only me but also the people around me in the future, there are not so many projects, and they can be found on my github (https://github.com/999MeshDi666).<br/>
            Basically, in development, I like to work on the appearance of the application, on its presentability and external functionality, work on the markup and details of the application. From time to time I try to make my own layouts on figma. For the frontend part, I am currently studying javascript library, the react.js and other technologies that are required in this area.
        </Typography>
    </Box>
 )   
}
export default About;