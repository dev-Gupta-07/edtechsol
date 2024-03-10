import PopularProjects from '@/dashboardcomponents/PopularProjects';
import PopularProjectssec from '@/dashboardcomponents/PopularProjectssec';
import PythonIntro from '@/dashboardcomponents/PythonIntro';
import { Grid, Typography ,Box} from '@mui/material';
import React from 'react'

const studentdashboard = () => {
  return (
    <>
        <Grid container sx={{minHeight:'300vh',backgroundColor:'#1E1E1E'}}>
         <Grid item md={9} xs={12}>
            <Typography variant="h5" color="white" sx={{fontWeight:'700',ml:{md:7},mt:7}} >Welcome Back!</Typography>
            <Box sx={{ml:{md:7},mt:{md:5}}}>
                <PopularProjects/>
            </Box>
             <Box sx={{ml:{md:7},mt:{md:5}}}>
                <PopularProjectssec/>
            </Box>
        </Grid> 
        <Grid item md={3} xs={12} >
            <Box sx={{mx:{md:2},mt:{md:2},backgroundColor:'#131313',borderRadius:'10px',p:2}}>
            <PythonIntro/>
            </Box>
        </Grid>   
        </Grid> 
    </>
  )
}

export default studentdashboard;