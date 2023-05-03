import { Typography, Box } from "@mui/material";


const contactTextList = [
    {
        variant: "h1",
        style: {
            fontSize: { xs: "24px", sm: "36px", md: "32px" },
            fontWeight: 700,
        },
        text: "Yegeubekov Madi"
    },
    {
        variant: "subtitle1",
        style: {
            color: "text.secondary",
            fontSize: { xs: "12px", sm: "20px", md: "18px" },
        },
        text: "@Madi0404"
    },
    {
        variant: "body1",
        style: {
            fontSize: { xs: "16px", sm: "24px", md: "22px" },
            marginTop: { xs: "8px", sm: "16px" },
            whiteSpace: "pre"
        },
        text: "Hi👋 , my name is Madi and I want to\nbe a frontend developer✌."
    },

]

const ContactText = () => {
  return (
    <Box>
        {contactTextList.map((text)=>(
            <Typography 
                key={text.variant} 
                variant={text.variant} 
                sx={text.style}>
                    {text.text}
            </Typography>
        ))}
    </Box>
  );
};
export default ContactText;
