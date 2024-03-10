import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';
const Qualification = () => {
  return (
    <>
    <Box sx={{mr:{md:70}}}>
     <Box sx={{mt:1}}>
            <Typography color='white'>Highest Education *</Typography>
             <TextField
                    label="Degree / State Education"
                    fullWidth
                    InputLabelProps={{
                        sx:{
                        color:'white',
                        opacity:0.4
                        }
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                          
                       
                        mt:1,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#959595",
                         borderRadius: "10px",   
                     
                    
                      },
                    }}
                  />

        </Box>
         <Box sx={{mt:1}}>
            <Typography color='white'>State your qualifications in the given blank *</Typography>
             <TextField
             multiline
             rows={7}
                    label="I have worked in ....(ex-microsoft,ex-google...etc)"
                    fullWidth
                    InputLabelProps={{
                        sx:{
                        color:'white',
                        opacity:0.4
                        }
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                          
                       
                        mt:1,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#959595",
                         borderRadius: "10px",   
                      
                    
                      },
                    }}
                  />

        </Box>


        
      <Box sx={{display:'flex',alignItems:'center',mt:3}}>

       <Button variant="contained" endIcon={<EastIcon sx={{color:'white',}}/>} size='large'sx={{backgroundColor:'#7068DE',color:'white',borderRadius:4,paddingX:8,
       display:'flex',
       alignItems:'center',
       justifyContent:'space-between',
       textTransform:'capitalize'
   }}>
        Next
       </Button>
       <Typography sx={{ml:2}}color='white'>Step 2/3</Typography>
      </Box>



    </Box>
    </>
  )
}

export default Qualification