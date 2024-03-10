import React from 'react'
import { Box,Chip, Typography,Button, Avatar, IconButton ,useTheme,useMediaQuery} from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore';
import Image from 'next/image'
import TaskIcon from '@mui/icons-material/Task';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import VerifiedIcon from "@mui/icons-material/Verified";
import TimerIcon from '@mui/icons-material/Timer';
const CardStart=()=>{
  return<>
       <Box sx={{ minWidth:{md:400,xs:350},maxWidth:{md:400,xs:350},
        flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
           backgroundImage:'url("/explore/frame1.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
         <Box sx={{display:'flex',alignItems:'center',}}>
          <Box sx={{backgroundColor:'#282828',color:'white',borderRadius:'8px',py:{md:1,xs:0.8},
          px:{md:3,xs:1.5},
          fontSize:'2rem',fontWeight:'700'}}>1</Box>
             <Typography variant='h6' color='black' sx={{fontWeight:'700',ml:2}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
             
         </Box>
         <Box sx={{mt:2,display:'flex',alignItems:'center'}}>
        <Chip icon={<TaskOutlinedIcon sx={{color:'black'}}/>}label=
          "4 Tasks "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black' }} />
             <Chip icon={<AccessTimeFilledOutlinedIcon sx={{color:'black'}}/>}label=
          "25 Days "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black',ml:1 }} />
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',gap:0.8}}>
             
                 <Typography sx={{color:'#FFBA53',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#python</Typography>
                 <Typography sx={{color:'#FFBA53',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#hands-on</Typography>
                 <Typography sx={{color:'#FFBA53',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#algorithm</Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <Button variant='outlined'startIcon={<PlayCircleFilledWhiteOutlinedIcon sx={{color:'white'}}/>}  sx={{color:'white',borderColor:'white',p:1,
                fontSize:'1rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Start Project</Button>
               
               <Typography sx={{color:'white',ml:1}}>Owned</Typography>
               <IconButton sx={{ color: "green" }}>
                      <VerifiedIcon
                        sx={{
                          ml: 0.5,
                        }}
                      />
                    </IconButton>


            </Box>
        </Box>
        
       </Box>

  </>
}
const CardStart2=()=>{
  return<>
       <Box sx={{minWidth:{md:400,xs:350},maxWidth:{md:400,xs:350},
           flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
           backgroundImage:'url("/explore/frame2.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
         <Box sx={{display:'flex',alignItems:'center',}}>
          <Box sx={{backgroundColor:'#282828',color:'white',borderRadius:'8px',py:{md:1,xs:0.8},
          px:{md:3,xs:1.5},
          fontSize:'2rem',fontWeight:'700'}}>2</Box>
             <Typography variant='h6' color='black' sx={{fontWeight:'700',ml:2}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
             
         </Box>
         <Box sx={{mt:2,display:'flex',alignItems:'center'}}>
        <Chip icon={<TaskOutlinedIcon sx={{color:'black'}}/>}label=
          "4 Tasks "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black' }} />
             <Chip icon={<AccessTimeFilledOutlinedIcon sx={{color:'black'}}/>}label=
          "25 Days "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black',ml:1  }} />
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',gap:0.8}}>
             
                 <Typography sx={{color:'#53CBFF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#python</Typography>
                 <Typography sx={{color:'#53CBFF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#hands-on</Typography>
                 <Typography sx={{color:'#53CBFF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#algorithm</Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <Button variant='outlined'startIcon={<ExploreIcon sx={{color:'white'}}/>}  sx={{color:'white',borderColor:'white',p:1,
                fontSize:'1rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Explore Project</Button>
               
              

            </Box>
        </Box>
        
       </Box>

  </>
}
const CardStart3=()=>{
  return<>
       <Box sx={{ minWidth:{md:400,xs:350},maxWidth:{md:400,xs:350},
           flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
           backgroundImage:'url("/explore/frame3.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
         <Box sx={{display:'flex',alignItems:'center',}}>
          <Box sx={{backgroundColor:'#282828',color:'white',borderRadius:'8px',py:{md:1,xs:0.8},
          px:{md:3,xs:1.5},
          fontSize:'2rem',fontWeight:'700'}}>3</Box>
             <Typography variant='h6' color='black' sx={{fontWeight:'700',ml:2}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
             
         </Box>
         <Box sx={{mt:2,display:'flex',alignItems:'center'}}>
        <Chip icon={<TaskOutlinedIcon sx={{color:'black'}}/>}label=
          "4 Tasks "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black' }} />
             <Chip icon={<AccessTimeFilledOutlinedIcon sx={{color:'black'}}/>}label=
          "25 Days "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black' ,ml:1 }} />
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',gap:0.8}}>
             
                 <Typography sx={{color:'#FD9CBF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#python</Typography>
                 <Typography sx={{color:'#FD9CBF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#hands-on</Typography>
                 <Typography sx={{color:'#FD9CBF',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#algorithm</Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <Button variant='outlined'startIcon={<ExploreIcon sx={{color:'white'}}/>}  sx={{color:'white',borderColor:'white',p:1,
                fontSize:'1rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Explore Project</Button>
               
              

            </Box>
        </Box>
        
       </Box>

  </>
}
const CardStart4=()=>{
  return<>
       <Box sx={{ minWidth:{md:400,xs:350},maxWidth:{md:400,xs:350},
           flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
           backgroundImage:'url("/explore/frame4.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
         <Box sx={{display:'flex',alignItems:'center',}}>
          <Box sx={{backgroundColor:'#282828',color:'white',borderRadius:'8px',py:{md:1,xs:0.8},
          px:{md:3,xs:1.5},
          fontSize:'2rem',fontWeight:'700'}}>4</Box>
             <Typography variant='h6' color='black' sx={{fontWeight:'700',ml:2}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
             
         </Box>
         <Box sx={{mt:2,display:'flex',alignItems:'center'}}>
        <Chip icon={<TaskOutlinedIcon sx={{color:'black'}}/>}label=
          "4 Tasks "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black' }} />
             <Chip icon={<AccessTimeFilledOutlinedIcon sx={{color:'black'}}/>}label=
          "25 Days "sx={{color:'black',
             borderWidth: 2, 
    borderStyle: 'solid', 
            borderColor:'black',ml:1  }} />
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',gap:0.8}}>
             
                 <Typography sx={{color:'#6BCBC5',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#python</Typography>
                 <Typography sx={{color:'#6BCBC5',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#hands-on</Typography>
                 <Typography sx={{color:'#6BCBC5',fontSize:'0.9rem',fontWeight:'500',textDecoration:'underline'}}>#algorithm</Typography>
            </Box>
            <Box sx={{mt:2,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
                <Button variant='outlined'startIcon={<ExploreIcon sx={{color:'white'}}/>}  sx={{color:'white',borderColor:'white',p:1,
                fontSize:'1rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Explore Project</Button>
               
              

            </Box>
        </Box>
        
       </Box>

  </>
}
const ProjectSlider = () => {
    const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
   <>
   <Box>
    <Box sx={{display:"flex",alignItems:"center", justifyContent:"flex-start"}}>
        <Image height={40} width={40} src="/explore/bullseye.png" alt="bullseye"></Image>
        <Typography variant="h5" sx={{color:'#DADADA',ml:1,fontWeight:"600"}}>Projects for Python</Typography>
    </Box>
   {
    mdx&& <Typography variant="body1" sx={{color:'#CBCBCB',mt:0.8}}>Get the experience you need with these collections carefully selected to boost your project management.</Typography>
   }
   </Box>
   <Box sx={{maxWidth:'100%',overflowX:"scroll",display:'flex',alignItems:'center',gap:2,
     '-ms-overflow-style': 'none', 
  'scrollbar-width': 'none',mt:{md:2,xs:0.2}}}>
       <CardStart/>
       <CardStart2/>
       <CardStart3/>
       <CardStart4/>
      
   </Box>
   </>
  )
}

export default ProjectSlider