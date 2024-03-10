import { Box, Grid, Typography ,useMediaQuery ,useTheme} from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
const WorkingPanel = () => {
     const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
      const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
     <Grid container sx={{backgroundColor:'#151515',minHeight:'70vh'}}>
         <Grid md={7} xs={12} sx={{order: { xs: 2, md: 1 }}}>
          <Box sx={{mx:{md:9,xs:4},my:8}}>
        <Typography variant='h5' color='white' sx={{fontWeight:400}}>How it works</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{mt:2,backgroundColor:expanded=='panel1'?"#5553FF":"#151515",color:'white',
            border:2,
            borderRadius:2,
        borderColor:'white'}}>
        <AccordionSummary
         
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
             <Box sx={{display:'flex',
        flexDirection:'row',alignItems:'center'}}>
             <Box
                sx={{
                  width: 40,
                  ml: 1,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6ABECD",
                  color: "#DBE5E6",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                1
              </Box>
            <Typography variant='h5' sx={{ml:1}}> Choose your Challenge</Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Browse our collection of professionally designed projects. Pick one that suits the level you're currently at.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  sx={{mt:2,backgroundColor:expanded=='panel2'?"#5553FF":"#151515",color:'white',border:2,
            borderRadius:2,
        borderColor:'white'}}>
        <AccordionSummary
         
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
             <Box sx={{display:'flex',
        flexDirection:'row',alignItems:'center'}}>
             <Box
                sx={{
                  width: 40,
                  ml: 1,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6ABECD",
                  color: "#DBE5E6",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                2
              </Box>
            <Typography variant='h5' sx={{ml:1}}> Code the design</Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  sx={{mt:2,backgroundColor:expanded=='panel3'?"#5553FF":"#151515",color:'white',
    border:2,
            borderRadius:2,
        borderColor:'white'}}>
        <AccordionSummary
         
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
             <Box sx={{display:'flex',
        flexDirection:'row',alignItems:'center'}}>
             <Box
                sx={{
                  width: 40,
                  ml: 1,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6ABECD",
                  color: "#DBE5E6",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                3
              </Box>
            <Typography variant='h5' sx={{ml:1}}> Submit your solution</Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  sx={{mt:2,backgroundColor:expanded=='panel4'?"#5553FF":"#151515",color:'white',border:2,
            borderRadius:2,
        borderColor:'white'}}>
        <AccordionSummary
         
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
             <Box sx={{display:'flex',
        flexDirection:'row',alignItems:'center'}}>
             <Box
                sx={{
                  width: 40,
                  ml: 1,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#6ABECD",
                  color: "#DBE5E6",
                  fontSize: 30,
                  fontWeight: "bold",
                  border: "1px ",
                  
                }}
              >
                4
              </Box>
            <Typography variant='h5' sx={{ml:1}}> Give others feedback</Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>



          </Box>
          </Grid>
     <Grid item md={5} xs={12} sx={{order: { xs: 1, md: 2 }}}>

         <Box sx={{height: "100%", width: "100%", position: "relative",mx:6,my:{md:10,xs:2.5},display: { xs: 'flex', md: 'block' } }}>
            <Image src={`/${mdx?"mentor5.png":"mentor5mobile.png"} `}
            alt="mentor5"
            height={ mdx ? 400 : 300}
            width={ mdx ? 400 : 300}
            
            >
            </Image>
          </Box>
          </Grid>
         
        </Grid>
    </>
  )
}

export default WorkingPanel