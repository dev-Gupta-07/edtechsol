import React ,{useState}from 'react'
import Layout from './Layout'
import { Poppins } from 'next/font/google'
import { Box, Tabs,Tab, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import PersonalInfo from './PersonalInfo';
import Qualification from './Qualification';
import MentorSettings from './MentorSettings';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import Person4Icon from '@mui/icons-material/Person4';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ProfilePage = () => {
 const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Layout>
    <Box sx={{mx:{md:7},mt:8, fontFamily: 'Poppins, sans-serif'}} >
        <Typography variant='h5' sx={{color:'white',textTransform:'bold',ml:2}}>Profile</Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab 
          
           sx={{
         fontSize:{xs:'0.75rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
      icon={<PersonIcon sx={{mr:0.2}}/>}
          
          label="Personal Info" 
          {...a11yProps(0)} />
          <Tab   sx={{
           fontSize:{xs:'0.75rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
      icon={<SchoolIcon sx={{mr:0.2}}/>}label="Qualifications" {...a11yProps(1)} />
          <Tab  sx={{
            fontSize:{xs:'0.75rem',md:'1rem'},   
      color: 'white',
      textTransform: 'none',
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
    }}
          
      icon={<Person4Icon sx={{mr:0.2}}/>}label="Mentor Settings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalInfo/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Qualification/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MentorSettings/>
      </CustomTabPanel>
    </Box>
    </Layout>
    </>
  )
}

export default ProfilePage