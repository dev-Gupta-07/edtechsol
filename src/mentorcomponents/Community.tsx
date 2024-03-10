import { Avatar, Box, Typography,useMediaQuery ,useTheme} from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Community = () => {
  const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
   <>
   <Box sx={{minHeight:{md:'70vh'},
     backgroundImage: mdx
      ? 'url("/framecomm.png")' 
      : 'url("/framecommmobile.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   padding:4
  
 }}>
    <Box sx={{marginTop:2,display:'flex',alignItems:'center',justifyContent:'space-between',mt:4}}>
     <Typography variant='h4'color='white' sx={{fontWeight:'400',ml:2}}>A little love from our community</Typography>
     {mdx&&<Box sx={{mr:12, display:'flex',alignItems:'center',gap:0.4}}>
          <Box
                sx={{
                  width: 50,
                  ml: 1,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#737373",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                <ArrowBackIcon/>
              </Box>
               <Box
                sx={{
                  width: 50,
                  ml: 1,
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


     </Box>}

    </Box>
   <Box sx={{mt:4, display: {md:'flex',xs:'block'},
    justifyContent: 'space-between',}}>
     <Box sx={{ flex: '1', marginRight: '10px',marginBottom:{xs:2},backgroundColor:'#303030',padding:'30px' }}>
        <Typography color='white'>This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated,instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.</Typography>

        <Box sx={{display:'flex',alignItems:'center',mt:16}}>
         <Avatar alt='comm1' src='/comm1.png'></Avatar>
         <Box sx={{ml:1}}>
         <Typography sx={{color:'#5553FF'}}>Francesca</Typography>
         <Typography sx={{color:'#B4B4B4'}}>@frrann</Typography>
         </Box>
        </Box>

     </Box>
      <Box sx={{ flex: '1', marginRight: '10px',backgroundColor:'#303030',padding:'30px',marginBottom:{xs:2}, }}>
        <Typography color='white'>Frontend Mentor eliminated the hurdle of sourcing designs,letting me focus on development. Their professional projects,especially in the Pro subscription ,challenge me to create complex, multi page website.
        With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.</Typography>
          <Box sx={{display:'flex',alignItems:'center',mt:10}}>
         <Avatar alt='comm1' src='/comm2.png'></Avatar>
         <Box sx={{ml:1}}>
         <Typography sx={{color:'#5553FF'}}>Alfie</Typography>
         <Typography sx={{color:'#B4B4B4'}}>@alfiemichell123</Typography>
         </Box>
        </Box>

     </Box>
     <Box sx={{ flex: '1', marginRight: '10px',backgroundColor:'#303030',padding:'30px',marginBottom:{xs:2}, }}>
        <Typography color='white'>Frontend Mentor transformed me from a newbie to a professional developer,enabling me to create flawless,responsible,accessible websites. It's a superb platform for feedback with a supportive community backing your growth. Through it,i evolved from a frontend to a full stack developer.</Typography>
        <Box sx={{display:'flex',alignItems:'center',mt:13}}>
         <Avatar alt='comm1' src='/comm3.png'></Avatar>
         <Box sx={{ml:1}}>
         <Typography sx={{color:'#5553FF'}}>Hikmah</Typography>
         <Typography sx={{color:'#B4B4B4'}}>@Hikmahx</Typography>
         </Box>
        </Box>

     </Box>
     
   </Box>

    {!mdx&&<Box sx={{ display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <Box
                sx={{
                  width: 50,
                  
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#737373",
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                <ArrowBackIcon/>
              </Box>
              
               <Box
                sx={{
                  width: 50,
                  
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


     </Box>}
   </Box>
   </>
  )
}

export default Community