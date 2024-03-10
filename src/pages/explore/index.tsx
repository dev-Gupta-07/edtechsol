import DoubtResolve from '@/explorecomponents/DoubtResolve'
import ExclusiveAccess from '@/explorecomponents/ExclusiveAccess'
import ModuleCourse from '@/explorecomponents/ModuleCourse'
import MyLearnings from '@/explorecomponents/MyLearnings'
import Pricing from '@/explorecomponents/Pricing'
import ProjectSlider from '@/explorecomponents/ProjectSlider'
import Courses_for_Python from '@/explorecomponents/Courses_for_Python'
import { Box } from '@mui/material'
import React from 'react'
import ExploreStarting from '@/explorecomponents/ExploreStarting'

const index = () => {
  return (
    <>
     <Box sx={{backgroundColor:'#1E1E1E',
     px:{md:3,xs:3},display:"flex",flexDirection:"column",gap:4,
     pb:3,
     }}>
      <ExploreStarting/>
      <ModuleCourse/>
      <Courses_for_Python/>
        <ProjectSlider/>
        <DoubtResolve/>
        <Pricing/>
        <ExclusiveAccess/>
        <MyLearnings/>
     </Box>
    </>
  )
}

export default index