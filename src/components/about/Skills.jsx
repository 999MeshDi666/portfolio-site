import { Stack, Box } from "@mui/material";
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

const Skills = () =>{
    return(
        <Stack
            direction="row"
            justifyContent="center"
            flexWrap="wrap"
            sx={{
                marginTop: { xs: "40px", sm: "60px" },
                mx: "auto",
                textAlign: "center",
                width: { xs: "180px", sm: "300px" },
            }}
        >
            {skillList.map((skill, index) => (
                <Box
                    key={index}
                    component="span"
                    sx={{
                        mx: { xs: "6px", sm: "10px" },
                        marginBottom: { xs: "6px", sm: "15px" },
                    }}
                >
                    {skill}
                </Box>
            ))}
      </Stack>
    )
} 
export default Skills;