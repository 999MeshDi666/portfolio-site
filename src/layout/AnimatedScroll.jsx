
import { useInView, animated } from '@react-spring/web'

const AnimatedScroll = ({children}) =>{
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
        <animated.section ref={ref} style={springs}>
            {children}
        </animated.section>
    )
}
export default AnimatedScroll;