import { usePlane } from "@react-three/cannon";
import { useTheme } from "@mui/material";
const Floor = (props) =>{
    const theme = useTheme()
    const [ref] = usePlane(() => ({ type: "Static", ...props }))
    return(
        <mesh ref={ref} {...props} >
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial
          color={theme.palette.mode === "dark"? "#3A3A3A" : "#f0df96"}
        />
      </mesh>
    )
}
export default Floor;