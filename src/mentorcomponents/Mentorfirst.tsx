import { Box, Button, Grid, Typography,useMediaQuery ,useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Mentorfirst = () => {
     const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
    <Grid container sx={{ backgroundImage: mdx
      ? 'url("/framementorfirst.png")' 
      : 'url("/framementorfirstmobile.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
        <Grid item md={6} xs={12} >
         <Box sx={{mb:4,ml:{md:40,xs:5},mt:8,mr:{md:5,xs:4}}}>
            <Typography variant="h4" color='white' sx={{textDecoration:'bold',fontWeight:'700'}}>
                One on One mentorship whenever you are in need
            </Typography>

            <Typography sx={{mt:6,fontWeight:'600'}} color='white' >
               Real life Projects & learnings to make you
               up-skill into different technologies .<br/>And also gettting ahead in the world.
            </Typography>
            <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
                
              backgroundColor: "#FFFFFF",
              color: "black",
              marginTop:{md:'60px',xs:'30px'},
              borderRadius: 4,
              paddingX: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
            }}
          >
            Talk To Experts
          </Button>
         </Box>
        </Grid>
        <Grid item md={6} xs={12}>
         <Box sx={{height: "100%", width: "100%", position: "relative",mx:{md:10,xs:1},my:{md:4,xs:2},display: { xs: 'flex', md: 'block' } ,justifyContent: "center",
      alignItems: "center"}}>
            <Image src={`/${mdx?"mentor1.png":"mentor1mobile.png"} `}
            alt="mentor1"
               
        width={mdx?450:350} 
        height={mdx?450:350} 
            
            >

            </Image>
          </Box>
        </Grid>

    </Grid>
    </>
  )
}

export default Mentorfirst