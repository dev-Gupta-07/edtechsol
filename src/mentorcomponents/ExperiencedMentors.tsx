import { Box,Button, Grid, Typography ,useMediaQuery ,useTheme} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExperiencedMentors = () => {
     const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
   <>
    <Grid container sx={{ backgroundImage: mdx
      ? 'url("/frameexpmentor.png")' 
      : 'url("/frameexpmentormobile.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',minHeight:'80vh'}}>
         <Grid item md={6} xs={12} sx={{order:{md:1,xs:2}}}>


         <Box sx={{height: "100%", width: "100%",mb:2,       mx:{md:7,xs:0.3},my:{md:2,sx:1},position: "relative",display: { xs: 'flex', md: 'block' },
         flexDirection:'column',
        alignItems:'center',
        justifyContent:'center' }}>
            <Image  src={`/${mdx?"mentor4.png":"mentor4mobile.png"} `}
            alt="mentor4"
            style={{ marginLeft: mdx ? 140 : 0 }}
            height={mdx?450:300}
            width={mdx?450:300}
           
          
            
            >
            </Image>
              
                <Box sx={{display:'flex',
                flexDirection:'row',
               alignItems:'flex-start',mx:{md:24}}}>
                 
                
            
                       <Box
                sx={{
                  width: 50,
                  mr: 1,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#5553FF",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                <ArrowBackIcon/>
              </Box>
              <Box sx={{justifyContent:'center'}}>
              <Typography color='white' variant='h5'>
                Delphine Dorseuil
              </Typography>
                <Typography sx={{mt:1,fontWeight:'600',color:'#8A8E94'}}  >
                Chief Financial Officer
            </Typography>
              </Box>
                  <Box
                sx={{
                  width: 50,
                  ml:1,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#5553FF",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                <ArrowForwardIcon/>
              </Box>
              </Box>
            
              


          </Box>
        </Grid>
         <Grid item md={6} xs={12}  sx={{order:{md:2,xs:1}}}>
         <Box sx={{ml:{md:20,xs:5},mt:8,mr:{md:25,xs:4}}}>
            <Typography variant={mdx?'h4':'h5'} color='white' sx={{textDecoration:'bold',fontWeight:'600'}}>
              Meet Our experienced Mentors
            </Typography>

            <Typography sx={{mt:6,fontWeight:'600',color:'#8A8E94'}}  >
               Real life Projects & learnings to make you
               up-skill into different technologies .And also gettting ahead in the world.
            </Typography>
           <Button variant="contained" 
           endIcon={<ArrowForwardIcon/>}
           sx={{
            mt:5,
             
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

export default ExperiencedMentors