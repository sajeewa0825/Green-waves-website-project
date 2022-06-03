import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import BlogCard from '../BlogCard/BlogCard'
import Slide from '../Slide/Slide'
import Wedo from '../WeDoSections/Wedo'



const Home =()=>{
    return(
        <div>
            <Slide/>
            <AboutCard/>
            <Wedo/>
            <BlogCard/>
        </div>
    )
}

export default Home;