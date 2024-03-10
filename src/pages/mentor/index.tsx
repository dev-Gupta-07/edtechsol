import React from 'react'
import Mentorfirst from '@/mentorcomponents/Mentorfirst'
import Technology from '@/mentorcomponents/Technology'
import ExploreProjects from '@/mentorcomponents/ExploreProjects'
import { Box } from '@mui/material'
import WorkingPanel from '@/mentorcomponents/WorkingPanel'
import Community from '@/mentorcomponents/Community'
import ExperiencedMentors from '@/mentorcomponents/ExperiencedMentors'
const Mentor = () => {
  return (
    <>
    <Box>
    <Mentorfirst/>
    <Technology/>
    <ExperiencedMentors/>
    <ExploreProjects/>
    <WorkingPanel/>
    <Community/>
    </Box>
    </>
  )
}

export default Mentor