import React ,{useEffect,useState}from 'react'
import { Grid,Typography,TextField,Button } from '@mui/material';
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';

const ProfileContent = () => {
    const [user,setUser]=useState({});
    const router=useRouter();
     useEffect(()=>{
         const userDetailsString = localStorage.getItem("userDetails");
    if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        setUser(userDetails);
    } else {
        router.push("/signup");
    }
  
    },[router]);
    console.log(user);
  return (
    <>
       <Layout>
      <Grid container spacing={2} sx={{}}>
            <Grid item xs={12}>
              <Typography variant="h6">Name</Typography>
              {/* <TextField label="Name" variant="outlined" fullWidth /> */}
              <Typography variant='h5'>{user.name}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Email</Typography>
              {/* <TextField label="Email" variant="outlined" fullWidth /> */}
               <Typography variant='h5'>{user.email}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Username</Typography>
              {/* <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
              /> */}
               <Typography variant='h5'>{user.username}</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Qualifications</Typography>
              <TextField label="Qualifications" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Tags for Experts</Typography>
              <TextField label="Tags" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Achievements</Typography>
              <TextField label="Achievements" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "grey",
                  color: "white",
                  "&:hover": {
                    bgcolor: "darkgrey", // Change color on hover if needed
                  },
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
          </Layout>
    </>
  )
}

export default ProfileContent;