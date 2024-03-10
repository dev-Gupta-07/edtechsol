import { Box,Button, Grid, Typography,useMediaQuery ,useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ExploreProjects = () => {
   const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
     <Grid container sx={{   backgroundImage: mdx
      ? 'url("/frameexplore.png")' 
      : 'url("/framexploremobile.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',minHeight:'70vh'}}>
         <Grid item md={6} xs={12}>
         <Box sx={{height: "100%", width: "100%", position: "relative",mx:{md:30,xs:7},my:{md:10,xs:2},display: { xs: 'flex', md: 'block' } }}>
            <Image  src={`/${mdx?"mentor3.png":"mentor3mobile.png"} `}
            alt="mentor3"
            height={mdx?400:300}
            width={mdx?400:300}
            
            >


            </Image>

             











          </Box>
        </Grid>
         <Grid item md={6} xs={12}>
         <Box sx={{ml:{md:20,xs:7},mt:{md:15,xs:3},mr:{md:25,xs:6},mb:2}}>
            <Typography variant="h4" color='white' sx={{textDecoration:'bold',fontWeight:'700'}}>
                Industry Experts will resolve your issue
            </Typography>

            <Typography sx={{mt:6,fontWeight:'600'}} color='white' >
               Real life Projects & learnings to make you
               up-skill into different technologies .And also gettting ahead in the world.
            </Typography>
           <Button variant="contained" 
           endIcon={<ArrowForwardIcon/>}
           sx={{
            mt:{md:5,xs:2},
             
              color: "white",
              textTransform:'capitalize',
              borderRadius: 6,
              paddingX: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundImage: "linear-gradient(90,#7068DE,#61A9D6",
            
            
           }}>
            Explore Projects
           </Button>
         </Box>
        </Grid>
       
       

    </Grid>
    </>
  )
}

export default ExploreProjects