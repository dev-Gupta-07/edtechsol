import React from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Switch,
  Button,
  Box,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  SwitchProps,
  styled,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#6156DB",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
const index = () => {
  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={0} md={6}>
          <div style={{ height: "100%", width: "100%", position: "relative" }}>
            <Image src="/imgsignup.png" layout="fill" alt="imgsignup" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ backgroundColor: "#1E1E1E" }}>
          <Box
            sx={{
              mx: { md: "80px", xs: "20px" },

              marginTop: 5, // 1 px<--0.25
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  border: "1px solid white",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  color="white"
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                >
                  CodePro.
                </Typography>
              </Box>
              <IconButton sx={{ color: "white" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} color="white">
              Level up your
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} color="white">
              Career for free
            </Typography>
          </Box>
          <Box
            sx={{
              mx: { md: "80px", xs: "20px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              justifyContent: "space-between",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <TextField
              fullWidth
              required
              label="Name"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  fontSize: "4",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
            <TextField
              fullWidth
              required
              label="Username"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  fontSize: "4",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
            <TextField
              fullWidth
              required
              label="Email"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  fontSize: "4",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />
            <TextField
              fullWidth
              required
              type="Password"
              label="Password"
              InputLabelProps={{
                sx: {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  fontSize: "4",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <RemoveRedEyeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControl>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label={undefined}
                />
              </FormControl>
              <Typography color="white">Remember Me</Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                backgroundColor: "#6156DB",
                borderRadius: "10px",
              }}
            >
              SIGN IN
            </Button>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1} borderBottom={1} borderColor="white" />
              <Typography color="white" px={2}>
                OR
              </Typography>
              <Box flexGrow={1} borderBottom={1} borderColor="white" />
            </Box>

            <Button
              size="medium"
              variant="outlined"
              sx={{
                mx: { md: "150px", xs: "60px" },
                borderRadius: "20px",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">G</Typography>
                <Typography marginLeft="15px" textTransform="capitalize">
                  Sign With Google
                </Typography>
              </Box>
            </Button>
          </Box>

          <Box
            sx={{
              mx: { md: "80px", xs: "25px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "35px",
            }}
          >
            <Typography color="white">Already have an account?</Typography>
            <Link href="/login">
              <Typography
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
                color="white"
              >
                Sign in
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
