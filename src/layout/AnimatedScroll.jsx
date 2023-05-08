import { useInView, animated } from '@react-spring/web'
import { Box } from "@mui/material";
const AnimatedScroll = ({children}) =>{
    
    const AnimatedBox = animated(Box)
    const [ref, springs] = useInView(
        () => ({
          from: {
            opacity: 0,
            y: 10,
          },
          to: {
            opacity: 1,
            y: 0,
          },
        }),
        {
          rootMargin: '-40% 0px -40% 0px',
        }
    )
    
    return( 
        <AnimatedBox ref={ref} style={springs}>
          {children}
        </AnimatedBox>
    )
}
export default AnimatedScroll;