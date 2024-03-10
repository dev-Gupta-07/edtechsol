import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
const PersonalInfo = () => {
  return (
    <>
      <Box sx={{ mr: { md: 70 } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "48%" }}>
            <Typography color="white">Name</Typography>
            <TextField
              fullWidth
              label="Name"
              
              InputLabelProps={{
                sx: {
                  color: "white",
                  opacity:0.4
                },
              }}
              InputProps={{
                endAdornment: (
      <InputAdornment position="end">
        <LockIcon style={{ color: 'white' }} />
      </InputAdornment>
    ),
                sx: {
                  color: "white",
                  fontSize: "4",
                },
              }}
              sx={{
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#9E9E9E",
                  borderRadius: "10px",
                 borderColor: '#ff0000',
                },
               
              }}
            />
          </Box>
          <Box sx={{ ml: { md: 3,xs:2 }, width: "48%" }}>
            <Typography color="white">Surname</Typography>
            <TextField
              fullWidth
              label="Surname"
              InputLabelProps={{
                sx: {
                  color: "white",
                  opacity:0.4
                },
              }}
              InputProps={{
                endAdornment: (
      <InputAdornment position="end">
        <LockIcon style={{ color: 'white' }} />
      </InputAdornment>
    ),
                sx: {
                    
                  color: "white",
                  fontSize: "4",
                },
              }}
              sx={{
                mt: 1,
              
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#9E9E9E",
                  borderRadius: "10px",
                  borderColor:'FF0000'
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography color="white">Email Id *</Typography>
          <TextField
            label="Email Id"
            fullWidth
            InputLabelProps={{
              sx: {
                color: "white",
                opacity:0.4
              },
            }}
            InputProps={{
              sx: {
                color: "white",
                fontSize: "4",
              },
            }}
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#959595",
                borderRadius: "10px",
              }
            }}
          />
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography color="white">Password *</Typography>
          <TextField
            label="*******"
            fullWidth
            type="Password"
            InputLabelProps={{
              sx: {
                color: "white",
                opacity:0.4
              },
            }}
            InputProps={{
              sx: {
                color: "white",
                fontSize: "4",
              },
            }}
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#959595",
                borderRadius: "10px",
              
              },
            }}
          />
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography color="white">Mobile No *</Typography>
          <TextField
            label="Mobile No"
            fullWidth
            InputLabelProps={{
              sx: {
                color: "white",
                opacity:0.4
              },
            }}
            InputProps={{
              sx: {
                color: "white",
                fontSize: "4",
              },
            }}
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#959595",
                borderRadius: "10px",
               
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
          <Button
            variant="contained"
            endIcon={<EastIcon sx={{ color: "white" }} />}
            size="large"
            sx={{
              backgroundColor: "#7068DE",
              color: "white",
              borderRadius: 4,
              paddingX: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
            }}
          >
            Next
          </Button>
          <Typography sx={{ ml: 2 }} color="white">
            Step 1/3
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfo;
