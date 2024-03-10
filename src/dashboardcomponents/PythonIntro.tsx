import React from 'react'
import {Box, Typography,CircularProgress, LinearProgress,} from '@mui/material'
import Image from 'next/image'

const PythonIntro = () => {
  return (
    <>
    <Box sx={{mx:3,mt:3}} >
        <Box sx={{display:'flex',
        flexDirection:'column',
        alignItems:'center',justifyContent:'center'}}>
            <Typography  sx={{color:'#594ED7',
        fontWeight:'600',
        fontSize:'1.41rem'}}>Introduction to Python</Typography>
        <Typography color="white" sx={{fontWeight:'600'}}>
until Dec 21,2024
        </Typography>
        </Box>

        <Box sx={{position:'relative',mt:4,mx:3,height:220}}>
         <CircularProgress
         
        variant="determinate"
        value={65}
        size={220}
      
        thickness={2}
        sx={{ position: 'absolute', left: 0, top: 0 , color:'#594ED7',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
          stroke: `#594ED7`,
        },}}
      />
      <Typography
        variant="h4"
        sx={{
          position: 'absolute',
           top: 'calc(50% - 10px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', 
          fontWeight: 'bold',
        }}
      >
       65% 
      </Typography>
       <Typography
        variant="h5"
        sx={{
          position: 'absolute',
           top: 'calc(50% + 20px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', 
          fontWeight: 'bold',
        }}
      >
       Skill Path
      </Typography>

        </Box>

       </Box>
     <Box sx={{ display:'flex',flexDirection:'column',gap:2,mt:2}}>
     <Box sx={{borderRadius:'10px',backgroundColor:'#000000',p:2}}>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
       <Box >
        <Image height={50} width={50} src="/dashboardimg/ellipse.png" alt="ellipse"></Image>
       </Box>
       <Box>
        <Typography sx={{color:'#594ED7'}}>Welcome to Python</Typography>
        <Typography variant="body2"sx={{color:'white'}}>2 Hours</Typography>
       </Box>

      </Box>
     
        <LinearProgress  value={60} variant="determinate" sx={{mt:1,  '& .MuiLinearProgress-bar': {
          backgroundColor:  '#594ED7' , 
        },}} />
      


     </Box>
        <Box sx={{borderRadius:'10px',backgroundColor:'#000000',p:2}}>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
       <Box >
        <Image height={50} width={50} src="/dashboardimg/ellipse.png" alt="ellipse"></Image>
       </Box>
       <Box>
        <Typography sx={{color:'#594ED7'}}>Welcome to Python</Typography>
        <Typography variant="body2"sx={{color:'white'}}>2 Hours</Typography>
       </Box>

      </Box>
     
        <LinearProgress  value={60} variant="determinate" sx={{mt:1,  '& .MuiLinearProgress-bar': {
          backgroundColor:  '#594ED7' , 
        },}} />
      


     </Box>

<Box sx={{ position: 'relative', mt:11 }}>
      <Box sx={{borderRadius:'10px',backgroundColor:'#594ED7',p:2,
        position:'absolute',
        top:-93, 
        width:'100%',
    }}>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
       <Box >
        <Image height={50} width={50} src="/dashboardimg/resume.png"  alt='resume'></Image>
       </Box>
       <Box>
        <Typography sx={{color:'white'}}> Python Fundamnetals 2</Typography>
        <Typography variant="body2"sx={{color:'white'}}>2 Hours</Typography>
       </Box>

      </Box>
     
        <LinearProgress  value={60} variant="determinate" sx={{mt:1,  '& .MuiLinearProgress-bar': {
          backgroundColor:  'white' , 
        },}} />
      


     </Box>
       <Box
    sx={{
    
      mx:1.5,
      p:1,
      backgroundColor: '#FFFFFF', 
      
      borderRadius: '10px'
    }}
  >

    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',alignItems:'center',gap:1,mr:0.3}}>
            <Image width={20} height={20} src="/dashboardimg/task.png" alt="task"></Image>
            <Typography sx={{color:'#464646'}}>Task 1:</Typography>
            <Typography variant="body2" sx={{color:'#7C7C7C'}}>Build a catalog product</Typography>
        </Box>
        <Image width={30} height={30} src="/dashboardimg/task2.png" alt="task2"></Image>

    </Box>
  </Box>
     </Box>













        <Box sx={{borderRadius:'10px',backgroundColor:'#000000',p:2}}>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
       <Box >
        <Image height={50} width={50} src="/dashboardimg/ellipse.png" alt="ellipse"></Image>
       </Box>
       <Box>
        <Typography sx={{color:'#594ED7'}}>Welcome to Python</Typography>
        <Typography variant="body2"sx={{color:'white'}}>2 Hours</Typography>
       </Box>

      </Box>
     
        <LinearProgress  value={60} variant="determinate" sx={{mt:1,  '& .MuiLinearProgress-bar': {
          backgroundColor:  '#594ED7' , 
        },}} />
      


     </Box>
     
     
     </Box>
    
    </>
  )
}

export default PythonIntro