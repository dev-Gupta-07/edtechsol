import React,{ useState } from 'react'
import {Box, Typography,Tabs,Tab, Chip, Button} from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{mt:2,maxWidth:'100%',overflowX:"auto",display:'flex',alignItems:'center',gap:2,
     '-ms-overflow-style': 'none', 
  'scrollbar-width': 'none'}}>{children}</Box>
      )}
    </Box>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PremiumCard=()=>{
    return(
       <Box sx={{minWidth:380,
       border:1,
       flex:'0 0auto',borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
       
            backgroundColor:'#5553FF'}}>
         <Box sx={{display:'flex',alignItems:'center'}}>
            <Chip label="Project" sx={{color:'#1F1F1F',backgroundColor:'#FFFFFF'}}></Chip>
             <Chip label="Beginner Friendly" sx={{color:'#6D7A25',backgroundColor:'#F9FED1',ml:1}}></Chip>
           
 
  <Chip 
    label="Premium" 
    size='medium'
    icon={<BookmarkBorderOutlinedIcon/>}
    sx={{
      color: '#9F5600',
      backgroundColor: '#FABF7A',
      ml: 4,
      fontSize:'1.1rem',
      fontWeight: '600', 
    }}
  />
          
        
         </Box>
         <Box sx={{my:2,mr:3}}>
         <Typography variant='h5' color='white' sx={{fontWeight:'600'}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2}}>
             <Chip label='NLP' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' }}/>
             <Chip label='AI/ML' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' ,ml:1}}/>
             <Chip label='  Python' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' ,ml:1}}/>

            </Box>
            <Box sx={{mt:2.8,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Button variant='contained' sx={{color:'black',backgroundColor:'white',p:1,
                fontSize:'1.2rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Get Started</Button>

                <Box sx={{ borderColor: '#9CA3AF', borderRadius: '10px', p: 1, border: '2px solid #9CA3AF' }}>
                    <BookmarkBorderOutlinedIcon 
                    sx={{color:'white',fontSize:'2rem',opacity:'0.8'}}
                    />
                </Box>
               








            </Box>
        </Box>
        
       </Box>
    )
}
const SimpleCard=()=>{
    return(
       <Box sx={{minWidth:380,
        flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
       
            backgroundColor:'#FFBA53'}}>
         <Box sx={{display:'flex',alignItems:'center'}}>
            <Chip label="Project" sx={{color:'#1F1F1F',backgroundColor:'#FFFFFF'}}></Chip>
             <Chip label="Beginner Friendly" sx={{color:'#6D7A25',backgroundColor:'#F9FED1',ml:1}}></Chip>
             
         </Box>
         <Box sx={{my:2,mr:3}}>
         <Typography variant='h5' color='black' sx={{fontWeight:'600'}}>
            Grokking Coding Interview Patterns in Python
         </Typography>
         </Box>
         
       
           
        </Box>
        <Box sx={{p:2}}>
            <Box sx={{mt:1,mr:3}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',fontStyle:'Poppins'}}>
                    Learn how to implement elegant transitions,create new layouts and serve users with dynamic needs.
                </Typography>
            </Box>
            <Box sx={{mt:2}}>
             <Chip label='NLP' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' }}/>
             <Chip label='AI/ML' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' ,ml:1}}/>
             <Chip label='  Python' sx={{color:'#F9FED1',
             borderWidth: 1, 
    borderStyle: 'solid', 
            borderColor:'#F9FED1' ,ml:1}}/>

            </Box>
            <Box sx={{mt:2.8,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Button variant='contained' sx={{color:'black',backgroundColor:'white',p:1,
                fontSize:'1.2rem',textTransform:'capitalize',
                textDecoration:'bold',
                fontWeight:'600'}}>Get Started</Button>

                <Box sx={{ borderColor: '#9CA3AF', borderRadius: '10px', p: 1, border: '2px solid #9CA3AF' }}>
                    <BookmarkBorderOutlinedIcon 
                    sx={{color:'white',fontSize:'2rem',opacity:'0.8'}}
                    />
                </Box>
               








            </Box>
        </Box>
        
       </Box>
    )
}


const PopularProjects = () => {
     const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Typography
            sx={{ textTransform: "bold", color: "white",fontWeight:'700' }}
            variant="h5"
          >
            Popular Projects for you
          </Typography>
                <Box sx={{ 
                width:{md:"31%"},
                backgroundColor:'#252525',
                p:0.6,
                borderRadius:'10px'
            ,borderBottom: 1, borderColor: "divider", mt: 2 }}>
            <Tabs
              value={value}
             
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  fontSize: { xs: "1rem", md: "0.8rem" },
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                 
                  borderRadius:"10px",
                  backgroundColor:`${value==0 ?"black":"#252525"}`
                  
                }}
                label=
                    "InterViewPrep"   
                {...a11yProps(0)}
              />
                 <Tab
                sx={{
                  fontSize: { xs: "1rem", md: "0.8rem" },
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                 
                  borderRadius:"10px",
                  backgroundColor:`${value==1 ?"black":"#252525"}`
                  
                }}
                label=
                    "Javascript"   
                {...a11yProps(1)}
              />
                  <Tab
                sx={{
                  fontSize: { xs: "1rem", md: "0.8rem" },
                  color: "white",
                  textTransform: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                 
                  borderRadius:"10px",
                  backgroundColor:`${value==2 ?"black":"#252525"}`
                  
                }}
                label=
                    "Python3"   
                {...a11yProps(2)}
              />
              
              
              
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <PremiumCard/>
            <SimpleCard/>
            <PremiumCard/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          </CustomTabPanel>
           <CustomTabPanel value={value} index={2}>
          </CustomTabPanel>
    </>
  )
}

export default PopularProjects