import React,{useState} from "react";
import Layout from "./Layout";
import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  LinearProgress,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  Tabs,Tab,
} from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import VerifiedIcon from "@mui/icons-material/Verified";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Ongoing from "@/QueryComponents/Ongoing";
import Pending from "@/QueryComponents/Pending";
import Resolved from "@/QueryComponents/Resolved";
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
        <Box sx={{ mx:0.2,p:{md:2},mt:1.5 }}>
          {children}
        </Box>
      )}
    </Box>
  );


}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MyQueries = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>
      <Layout>
        <Box sx={{ mt: 5.5,mb:5.5, mx: { sm: 2, xs: 1} }}>
          <Typography
            sx={{ textTransform: "bold", color: "white" }}
            variant="h4"
          >
            My Queries
          </Typography>
           
          { /* added boxes for ongoing resolved etc */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' ,mt:2}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  
           sx={{
         fontSize:{xs:'1rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
    
          
           label={
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      Ongoing
      <Box
        sx={{
          width: 20,
          ml: 1,
          height: 20,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          color: 'black',
          fontSize: 10,
          fontWeight: 'bold',
          border: '1px solid',
        }}
      >
        3
      </Box>
    </Box>
  }
          {...a11yProps(0)}
          
          
          
          />
          <Tab   sx={{
           fontSize:{xs:'1rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
      
           label={
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      Pending
      <Box
        sx={{
          width: 20,
          ml: 1,
          height: 20,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          color: 'black',
          fontSize: 10,
          fontWeight: 'bold',
          border: '1px solid',
        }}
      >
        3
      </Box>
    </Box>} {...a11yProps(1)} />
          <Tab  sx={{
            fontSize:{xs:'1rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
      label={
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      Resolved
      <Box
        sx={{
          width: 20,
          ml: 1,
          height: 20,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          color: 'black',
          fontSize: 10,
          fontWeight: 'bold',
          border: '1px solid',
        }}
      >
        3
      </Box>
    </Box>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
         <Ongoing/>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Pending/>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={2}>
          <Resolved/>
        </Grid>
      </CustomTabPanel>

        
        </Box>
      </Layout>
    </>
  );
};

export default MyQueries;
