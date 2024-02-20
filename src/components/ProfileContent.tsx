import React from 'react'
import { Grid,Typography,TextField,Button } from '@mui/material';
import Layout from '@/components/Layout'

const ProfileContent = () => {
  return (
    <>
       <Layout>
      <Grid container spacing={2} sx={{}}>
            <Grid item xs={12}>
              <Typography variant="h6">Name</Typography>
              <TextField label="Name" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Email</Typography>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">Password</Typography>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
              />
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