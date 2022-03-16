import React from "react";
// import Gallery from "../Gallery/Gallery";
import Example from '../Carousel/Carousel'

function Home() {
    return(
        <div>
            <Example 
                 next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                 prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
            /> 
        </div>
    )
}

export default Home;