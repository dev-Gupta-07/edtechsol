import React from 'react'
import AdjustIcon from "@mui/icons-material/Adjust";
import { Typography,Box, LinearProgress,useMediaQuery ,useTheme } from '@mui/material';
const AdvancedImageProcessing=()=>{
    const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return<>
 
       <Box sx={{ minWidth:mdx?400:300,
       maxWidth:mdx?400:300,
        flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
        height:280,
           backgroundImage:'url("/explore/advanced_img_processing.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
        </Box>
        <Box sx={{p:3}}>
            <Box sx={{mt:0.1}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',
                fontWeight:600,fontStyle:'Poppins'}}>
                  Advanced Image Processing
                </Typography>
                  <Box sx={{display:"flex" ,alignItems:"center",mt:1}}>
        <AdjustIcon sx={{ color: "#E0E0E0" , fontSize: "13px" }} />
        <Typography sx={{ color: "#E0E0E0", ml: 1, fontSize: "13px"}}>
          Task 4: Return a Histogram
        </Typography>
      </Box>
            </Box>

            <Box sx={{mt:1,p:2,
                borderRadius:"6px",backgroundColor:'black'}}>
              
               <LinearProgress 
               value={50} variant="determinate"  sx={{
    height: 13, 
    borderRadius: "10px", 
  }}></LinearProgress>
                <Box  sx={{ display:"flex",alignItems:'center',justifyContent:'space-between' , mt: 1 }}>
          <Typography sx={{ color:'white' ,fontSize: "14px"}}>
            Courses left:3
          </Typography>
          <Typography sx={{  color:'white' ,fontSize: "14px"}}>
            Completed: 65%
          </Typography>
        </Box>




            </Box>
           


            </Box>
        </Box>
        
     

  </>
}
const AdvancedMachineLearning=()=>{
    const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return<>
       <Box sx={{ minWidth: mdx?400:300,
       maxWidth:mdx?400:300,
        flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
        height:280,
           backgroundImage:'url("/explore/advanced_ML.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
        </Box>
        <Box sx={{p:3}}>
            <Box sx={{mt:0.1}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',
                fontWeight:600,fontStyle:'Poppins'}}>
                  Advanced Machine Learning
                </Typography>
                  <Box sx={{display:"flex" ,alignItems:"center",mt:1}}>
        <AdjustIcon sx={{ color: "#E0E0E0" , fontSize: "13px" }} />
        <Typography sx={{ color: "#E0E0E0", ml: 1, fontSize: "13px"}}>
          Task 4: Return a Histogram
        </Typography>
      </Box>
            </Box>

            <Box sx={{mt:1,p:2,
                borderRadius:"6px",backgroundColor:'black'}}>
              
               <LinearProgress 
               value={50} variant="determinate"  sx={{
    height: 13, 
    borderRadius: "10px", 
  }}></LinearProgress>
                <Box  sx={{ display:"flex",alignItems:'center',justifyContent:'space-between' , mt: 1 }}>
          <Typography sx={{ color:'white' ,fontSize: "14px"}}>
            Courses left:3
          </Typography>
          <Typography sx={{  color:'white' ,fontSize: "14px"}}>
            Completed: 65%
          </Typography>
        </Box>




            </Box>
           


            </Box>
        </Box>
        
     

  </>

}
const RetailAi=()=>{
      const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));

  return<>
       <Box sx={{ minWidth:mdx?400:300,
       maxWidth:mdx?400:300,
        flex:'0 0auto',
       border:1,borderColor:'white',borderRadius:'12px',
        overflow: 'hidden'}}>
        <Box sx={{p:2,
        height:280,
           backgroundImage:'url("/explore/AI_img.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}>
        </Box>
        <Box sx={{p:3}}>
            <Box sx={{mt:0.1}}>
                <Typography color='white'
                sx={{fontSize:'1.1rem',
                fontWeight:600,fontStyle:'Poppins'}}>
                 Retail AI Prediction
                </Typography>
                  <Box sx={{display:"flex" ,alignItems:"center",mt:1}}>
        <AdjustIcon sx={{ color: "#E0E0E0" , fontSize: "13px" }} />
        <Typography sx={{ color: "#E0E0E0", ml: 1, fontSize: "13px"}}>
          Task 4: Return a Histogram
        </Typography>
      </Box>
            </Box>

            <Box sx={{mt:1,p:2,
                borderRadius:"6px",backgroundColor:'black'}}>
              
               <LinearProgress 
               value={50} variant="determinate"  sx={{
    height: 13, 
    borderRadius: "10px", 
  }}></LinearProgress>
                <Box  sx={{ display:"flex",alignItems:'center',justifyContent:'space-between' , mt: 1 }}>
          <Typography sx={{ color:'white' ,fontSize: "14px"}}>
            Courses left:3
          </Typography>
          <Typography sx={{  color:'white' ,fontSize: "14px"}}>
            Completed: 65%
          </Typography>
        </Box>




            </Box>
           


            </Box>
        </Box>
        
     

  </>


}
const MyLearnings = () => {
   const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
     
    <Box>
     
    <Typography variant="h5" color="white">Want to Learn more in Python?</Typography>
    
      <Typography sx={{color:'#CBCBCB',display:mdx?"block":"none"}}>Get the inspiration you need with these collections carefully selected to boost your projects management</Typography>
    
    </Box>
    <Box sx={{maxWidth:'100%',overflowX:"scroll",display:'flex',alignItems:'center',gap:2,
     '-ms-overflow-style': 'none', 
  'scrollbar-width': 'none',mt:mdx?2:1}}>
  <AdvancedImageProcessing/>
  <RetailAi/>
  <AdvancedMachineLearning/>
   <AdvancedMachineLearning/>
    <AdvancedMachineLearning/>

  </Box>
 
    </> 
  )
}

export default MyLearnings