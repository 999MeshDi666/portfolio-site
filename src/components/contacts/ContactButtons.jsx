import { Box, Stack, Button } from "@mui/material";
import { GitHub, LinkedIn, Telegram } from "../icons/Icons";


const ContactButton = (props) =>{
    const {child, link, bgColor, bwidth, bheight} = props;
    return(
        <Button
            href={link}
            sx={{
                borderRadius: "50px",
                border: "1px solid #000",
                boxShadow: "none",
                backgroundColor: bgColor,
                width: bwidth,
                height: bheight,
                "&:hover": {
                    backgroundColor: bgColor,
                },
            }}
        >
            {child}
        </Button>
    )
}
const ContactButtons = ()=>{
    return(
        <Box sx={{ marginTop: { xs: "16px", sm: "36px" } }}>
            <ContactButton
                link="https://github.com/999MeshDi666"
                bgColor = "#fff"
                bwidth = {{ xs: "200px", sm: "296px", md: "280px" }}
                bheight = {{ xs: "36px", sm: "60px" , md: "50px"}}
                child = {<GitHub/>}
            />
            <Stack
                direction="row"
                justifyContent="center"
                mt={{ xs: "8px", sm: "16px" }}
                spacing={{ xs: 1, sm: 3 }}
            >
                <ContactButton
                    link="https://www.linkedin.com/in/madi-yegeubekov-060479248/"
                    bgColor = "#497EBC"
                    bwidth = {{ xs: "94px", sm: "138px", md: "128px" }}
                    bheight = {{ xs: "32px", sm: "46px", md: "42px" }}
                    child = { <LinkedIn/>} 
                />
                <ContactButton
                    link="https://t.me/Madi0404"
                    bgColor = "#4199FF"
                    bwidth = {{ xs: "94px", sm: "138px", md: "128px" }}
                    bheight = {{ xs: "32px", sm: "46px", md: "42px" }}
                    child = {<Telegram/>} 
                />
            </Stack>
      </Box>
    )
}

export default ContactButtons;