import React from 'react'
import { Box, Typography,useTheme,useMediaQuery } from '@mui/material'
import Image from 'next/image'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
const ModuleCourse = () => {
          const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
        const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    

    <>
    <Box sx={{width:{md:"55%",xs:"100%"}}}>
       <Box>
          
        <Box sx={{display:'flex',alignItems:'center',gap:2}}>
            <Image width={35} height={35} src="/explore/module.png" alt="module"></Image>
            <Typography color="white" variant="h5" sx={{fontWeight:500,fontSize:'1.7rem'}}>Modules of this Course</Typography>
        </Box>
    {
      mdx&&    <Typography sx={{color:'#CBCBCB',mt:1,fontSize:'1.1rem'}}>
            Get the inspiration you need with thes collections carefully selected to boost your project's engagement.

        </Typography>
    }
       </Box>
       <Box sx={{mt:2,display:'flex',flexDirection:'column',gap:1}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{backgroundColor:'#2F2F2F',color:'white',
            border:1,
            borderRadius:"10px",
        }}>
        <AccordionSummary
        sx={{height:{md:70,xs:50}}}
         expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>} 
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >   
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Typography sx={{fontWeight:600,fontSize:'18px'}}>Creating a Series</Typography>
  {
    mdx&&<Typography  sx={{ml:{md:45},fontWeight:400,fontSize:'0.9rem'}}>19 lectures . 15 tasks . 25 hours</Typography>
  }
  </Box>
        </AccordionSummary>

        <AccordionDetails >
         <Box sx={{p:2}}>
           <Box sx={{display:'flex',alignItems:'center',gap:2,justifyContent:'flex-start'}}>
             <AutoStoriesIcon/>
             <Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-betwen'}}>
               
                <Typography sx={{textDecoration:'underline',fontSize:{xs:'0.9rem'}}}>
                    Create an empty Series using array.
                </Typography>
                {
                  mdx&&<Typography sx={{ml:30}}> 2 Problems . 37 minutes</Typography>
                }

            </Box>
            <Box sx={{backgroundColor:'#727272',height:'2px',my:1}}></Box>
            </Box>

           </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:2,justifyContent:'flex-start'}}>
             <AutoStoriesIcon/>
             <Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-betwen'}}>
               
                <Typography sx={{textDecoration:'underline',fontSize:{xs:'0.9rem'}}}>
                    Create a series with specified index and values.
                </Typography>
               {
                mdx&& <Typography sx={{ml:20}}> 2 Problems . 37 minutes</Typography>
               }

            </Box>
            <Box sx={{backgroundColor:'#727272',height:'2px',my:1}}></Box>
            </Box>

           </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:2,justifyContent:'flex-start'}}>
             <AutoStoriesIcon/>
             <Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-betwen'}}>
               
                <Typography sx={{textDecoration:'underline',fontSize:{xs:'0.9rem'}}}>
                    Map values of a Series using a dictionary.
                </Typography>
                {
                  mdx&&<Typography sx={{ml:26}}> 2 Problems . 37 minutes</Typography>
                }

            </Box>
            <Box sx={{backgroundColor:'#727272',height:'2px',my:1}}></Box>
            </Box>

           </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:2,justifyContent:'flex-start'}}>
             <TrackChangesIcon/>
             <Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-betwen'}}>
               
                <Typography sx={{textDecoration:'underline',fontSize:{xs:'0.9rem'}}}>
                   Apply a function to each unique value in a series.
                </Typography>
                {
                  mdx&&<Typography sx={{ml:23}}> 4 Tasks . 42 minutes</Typography>
                }

            </Box>
            <Box sx={{backgroundColor:'#727272',height:'2px',my:1}}></Box>
            </Box>

           </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:2,justifyContent:'flex-start'}}>
             <PersonalVideoIcon/>
             <Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-betwen'}}>
               <Typography sx={{mr:0.5}}>
                Video:
               </Typography>
                <Typography sx={{textDecoration:'underline',fontSize:{xs:'0.9rem'}}}>
                   Get the unique values in a series 
                </Typography>
                {
                  mdx&&<Typography sx={{ml:39}}>. 37 minutes</Typography>
                }

            </Box>
            <Box sx={{backgroundColor:'#727272',height:'2px',my:1}}></Box>
            </Box>

           </Box>
         </Box>
        </AccordionDetails>
      </Accordion>
         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{backgroundColor:'#2F2F2F',color:'white',
            border:1,
            borderRadius:"10px",
        }}>
        <AccordionSummary
        sx={{height:{md:70,xs:50}}}
         expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>} 
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >   
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Typography sx={{fontWeight:600,fontSize:'1.2rem'}}>Operation On Series</Typography>
  {
    mdx&&<Typography  sx={{ml:42,fontWeight:400,fontSize:'0.9rem'}}>19 lectures . 15 tasks . 25 hours</Typography>
  
  }
  </Box>
        </AccordionSummary>

        <AccordionDetails >
       
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{backgroundColor:'#2F2F2F',color:'white',
            border:1,
            borderRadius:"10px",
        }}>
        <AccordionSummary
        sx={{height:{md:70,xs:50}}}
         expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>} 
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >   
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Typography sx={{fontWeight:600,fontSize:'1.2rem'}}>Function on Series</Typography>
 {
  mdx&& <Typography  sx={{ml:43,fontWeight:400,fontSize:'0.9rem'}}>19 lectures . 15 tasks . 25 hours</Typography>
 }
  </Box>
        </AccordionSummary>

        <AccordionDetails >
       
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  sx={{backgroundColor:'#2F2F2F',color:'white',
            border:1,
            borderRadius:"10px",
        }}>
        <AccordionSummary
        sx={{height:{md:70,xs:50}}}
         expandIcon={<ExpandMoreIcon  sx={{color:'white'}}/>} 
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >   
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Typography sx={{fontWeight:600,fontSize:'1.2rem'}}>Foundations:Data,Data,Everywhere</Typography>
  {
    mdx&&<Typography  sx={{ml:25,fontWeight:400,fontSize:'0.9rem'}}>19 lectures . 15 tasks . 25 hours</Typography>
  }
  </Box>
        </AccordionSummary>

        <AccordionDetails >
       
        </AccordionDetails>
      </Accordion>
     
     

     
       </Box>
    </Box>
    </>
  )
}

export default ModuleCourse