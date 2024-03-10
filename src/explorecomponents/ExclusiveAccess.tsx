import { Box, Typography ,useTheme,useMediaQuery} from '@mui/material'
import React from 'react'
import Image from 'next/image'

const ExclusiveAccess = () => {
      const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
    <Box sx={{backgroundColor:"#2F2F2F",borderRadius:"4px",p:{md:3,xs:2}}}>
     <Box sx={{display:mdx?'flex':'block',alignItem:'center'}}>
     <Box sx={{p:{md:2,xs:2},mt:{md:2,xs:1},mr:{md:5,}}}>
   
         <Typography variant="h5"
      color="white" sx={{fontWeight:600}}>
   Get exclusive access to career resources{mdx&&<br/>} upon completion
      </Typography>
     
     </Box>

     <Box sx={{display:{md:'flex',xs:'block'},alignItems:'center',p:{md:2,xs:1},gap:1}}>
     <Box sx={{p:{md:2,xs:0.8} ,width:{xs:'65%'}}}>
      <Image src="/explore/resume.png" alt="resume" height={30} width={30}></Image>
     
     <Typography color="white" sx={{fontWeight:600,mt:1}}>
      Resume review
     </Typography>
     <Typography  sx={{color:'#DADADA',mt:1}}>
      Improve your resume and Linkedin with personalized feedback
     </Typography>
     
     </Box>
     <Box sx={{display:{xs:'flex'}}}>
      <Box sx={{p:{md:2,xs:0.8} }}>
      <Image src="/explore/interview.png" alt="interview" height={30} width={30}></Image>
     
     <Typography color="white" sx={{fontWeight:600,mt:1}}>
      Interview prep
     </Typography>
     <Typography  sx={{color:'#DADADA',mt:1}}>
      Practice your skills with interactive tools and mock interviews
     </Typography>
     
     </Box>
      <Box sx={{p:{md:2,xs:0.8} }}>
      <Image src="/explore/career.png" alt="career" height={30} width={30}></Image>
     
     <Typography color="white" sx={{fontWeight:600,mt:1}}>
      Career Support
     </Typography>
     <Typography  sx={{color:'#DADADA',mt:1}}>
      Plan your career move with Coursera's job search guide
     </Typography>
     
     </Box>
     </Box>
     
     </Box>


     </Box>
     <Box sx={{my:{md:2.5,xs:0.6},backgroundColor:"white",height:"2px"}}></Box>

     <Box sx={{display:{md:'flex',xs:'block'},
     mx:{xs:1.4},
     alignItem:'center',mt:{md:4,xs:1.6}}}>
         <Box sx={{pb:2,pr:{md:5},pl:{md:2}}}>
            <Typography 
            
            color="white" sx={{fontWeight:600,}}>
            Get Opportunities in the biggest {mdx&&<br/>}companies in the world
            </Typography>

         </Box>
        
        {
         mdx&&<Box sx={{display:'flex',alignItems:'center',gap:9,ml:{md:9}}}>

            <Image src="/explore/google.png" alt="google" height={40} width={120}></Image>
            <Image src="/explore/salesforce.png" alt="salesforce" height={40} width={120}></Image>
            <Image src="/explore/adobe.png" alt="adobe" height={40} width={120}></Image>
            <Image src="/explore/tmobile.png" alt="tmobile" height={40} width={120}></Image>
            <Image src="/explore/wellsfargo.png" alt="wellsfargo" height={40} width={80}></Image>

         </Box>
        }

       {
         !mdx&&<Box sx={{display:'block',alignItems:'center',}}>
          <Box sx={{display:'flex',alignItems:'center',gap:3,mx:5}}>
            <Image src="/explore/google.png" alt="google" height={40} width={120}></Image>
            <Image src="/explore/salesforce.png" alt="salesforce" height={40} width={120}></Image>
            </Box>
             <Box sx={{display:'flex',mx:4,mt:1,alignItems:'center',gap:6}}>
            <Image src="/explore/adobe.png" alt="adobe" height={40} width={120}></Image>
            <Image src="/explore/tmobile.png" alt="tmobile" height={40} width={120}></Image>
            </Box>
            <Box sx={{mt:1,mx:15}}>
            <Image src="/explore/wellsfargo.png" alt="wellsfargo" height={40} width={80}></Image>
            </Box>

         </Box>
       }

     </Box>
    </Box>
    </>
  )
}

export default ExclusiveAccess