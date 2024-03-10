import React from 'react'
import { Box,Grid,Button, Typography,useMediaQuery ,useTheme } from '@mui/material'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const DoubtResolve = () => {
   const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));

  return (
   <>
   <Box sx={{backgroundImage:mdx?`url("/explore/framedoubt.png")`:`url("/explore/framedoubtmobile.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <Grid container>
  <Grid md={7} xs={12} sx={{p:{md:6,xs:1},order:{md:1,xs:2}}}>
    {mdx&&<Box sx={{display:'flex',alignItems:"center",justifyContent:"center"}}>

        <Typography variant="h4" sx={{color:"white",textDecoration:"underline",fontWeight:600}}>Get Your Doubts Resolved</Typography>
    </Box>}
    <Grid container sx={{mt:2}}>
    <Grid md={6} xs={6}sx={{p:{md:3,xs:0.5}}}>
    <Image src="/explore/emoji1.png" alt="emoji1" width={40} height={40}></Image>
    <Box sx={{mt:2}}>
       <Typography variant="h6" sx={{color:'white',fontWeight:600}}>Stuck Somewhere</Typography>
       <Box sx={{mt:1,mr:{md:8,xs:2}}}>
        <Typography sx={{color:'#DADADA'}}>
        Resolve doubts promptly with personalized mentorship for academic success.
        </Typography>
       </Box>
    </Box>
    </Grid>
    <Grid md={6} xs={6}sx={{p:{md:3,xs:0.5}}}>
 <Image src="/explore/emoji2.png" alt="emoji2" width={40} height={40}></Image>
 <Box sx={{mt:2}}>
       <Typography variant="h6" sx={{color:'white',fontWeight:600}}>Giving Direction to your Studies</Typography>
       <Box sx={{mt:1,mr:{md:8,xs:2}}}>
        <Typography sx={{color:'#DADADA'}}>
        Resolve doubts effortlessly via our seamless chat feature , guided by exceptional mentors.
        </Typography>
       </Box>
    </Box>
    </Grid>
    <Grid md={6} xs={6} sx={{p:{md:3,xs:0.5}, mt:{xs:1} }}>
 <Image src="/explore/emoji3.png" alt="emoji3" width={40} height={40}></Image>
 <Box sx={{mt:2}}>
       <Typography variant="h6" sx={{color:'white',fontWeight:600}}>Satisfaction Guaranteed!</Typography>
       <Box sx={{mt:1,mr:{md:8,xs:2}}}>
        <Typography sx={{color:'#DADADA'}}>
        Not Satisfied? Set doubt as unresolved and get a better resolution again.
        </Typography>
       </Box>
    </Box>
    </Grid>
    <Grid md={6} xs={6} sx={{p:{md:3,xs:0.5}, mt:{xs:1} }}>
 <Image src="/explore/emoji4.png" alt="emoji4" width={40} height={40}></Image>
 <Box sx={{mt:2}}>
       <Typography variant="h6" sx={{color:'white',fontWeight:600}}>Expert Mentors</Typography>
       <Box sx={{mt:1,mr:{md:8,xs:2}}}>
        <Typography sx={{color:'#DADADA'}}>
        Accelerate learning with mentorship from industry-experts tailored to your needs.
        </Typography>
       </Box>
    </Box>
    </Grid>



    </Grid>

    {
      !mdx&&<Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
                
              backgroundColor: "#FFFFFF",
              color: "black",
              marginTop:{md:0.8,xs:2},
              ml:{md:20},
              borderRadius: 4,
              paddingX: 4,
              fontWeight:600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
            }}
          >
            Talk To Experts
          </Button>
           
    }

 
 
 
 
 
 
 
 
 
  </Grid>
  <Grid md={5} xs={12} sx={{order:{md:2,xs:1}}}>
 <Box sx={{height: "100%", width: "100%", position: "relative",mx:{md:10,xs:1},mt:{md:4,xs:1},mb:{md:4,xs:1},display: { md: 'block' } ,justifyContent: "center",
      alignItems: "center"}}>
       
            <Image src= {`/explore/${mdx?"expert.png":"expertmobile.png"}`}
            alt="expert1"      
        width={mdx?480:380} 
        height={mdx?450:380}
            
            >

            </Image>
           {
            mdx&&  <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
                
              backgroundColor: "#FFFFFF",
              color: "black",
              marginTop:{md:0.8},
              ml:{md:20},
              borderRadius: 4,
              paddingX: 4,
              fontWeight:600,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
            }}
          >
            Talk To Experts
          </Button>
           }
          </Box>


  </Grid>

    </Grid>

   </Box>
   </>
  )
}

export default DoubtResolve