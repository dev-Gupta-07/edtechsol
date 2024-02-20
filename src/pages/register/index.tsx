import {
  Grid,
  Box,
  Typography,
  Stack,
  Avatar,
  TextField,
  Button,
  Radio,
} from "@mui/material";

import React from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const register = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          md={7}
          xs={12}
          sx={{
            backgroundColor: "red",
            backgroundImage: " linear-gradient(135deg,#030021, #9E9E9E )",
            paddingBottom: { xs: "15px" },
          }}
        >
          <Box
            marginTop={12}
            marginBottom={5}
            sx={{ mx: { xs: "40px", md: "110px" } }}
          >
            <Typography
              variant="h4"
              style={{
                color: "white",
                fontStyle: "bold",
                fontWeight: "bolder",
              }}
            >
              Get your demo
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "white", paddingTop: "10px" }}
            >
              Find out why 80% of the Fortune 1000 choses datacamp
            </Typography>
          </Box>
          <Box mx={13} sx={{ mx: { xs: "40px", md: "110px" } }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <Stack flexGrow={1}>
                  <Typography px={1} color="white">
                    FirstName*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#9E9E9E",
                        borderRadius: "20px",
                      },
                    }}
                  />
                </Stack>
                <Stack flexGrow={1}>
                  <Typography color="white" px={1}>
                    LastName*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#9E9E9E",
                        borderRadius: "20px",
                      },
                    }}
                  />
                </Stack>
              </Stack>
              <Stack direction="row">
                <Stack flexGrow={1}>
                  <Typography color="white" px={1}>
                    Email*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#9E9E9E",
                        borderRadius: "20px",
                      },
                    }}
                  />
                </Stack>
              </Stack>
              <Stack direction="row">
                <Stack flexGrow={1}>
                  <Typography color="white" px={1}>
                    Organisation*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    InputProps={{
                      sx: {
                        color: "white",
                        fontSize: "4",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#9E9E9E",
                        borderRadius: "20px",
                      },
                    }}
                  />
                </Stack>
              </Stack>
              <Stack direction="row" paddingTop={4} px={3}>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "#594ED7",
                    borderRadius: "20px",
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Box
            mx={30}
            sx={{
              display: { xs: "none", md: "block" },
            }}
            mt={10}
            mb={2}
          >
            <Typography variant="body2" fontSize={14} color="white">
              By continuing, you accept our{" "}
              <span style={{ color: "blue", textDecoration: "underline" }}>
                Terms of Use
              </span>
              ,our{" "}
              <span style={{ color: "blue", textDecoration: "underline" }}>
                Privacy Policy
              </span>{" "}
              and that your data is stored in the USA
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          md={5}
          xs={12}
          sx={{ backgroundColor: "#1E1E1E", paddingBottom: { xs: "20px" } }}
        >
          <Box marginTop={12} mx={10}>
            <Typography variant="h6" fontStyle="bold" color="white">
              Subscription Details
            </Typography>

            <Stack mt={4}>
              <Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      <PeopleOutlineIcon />
                    </Avatar>
                    <Typography marginLeft={1} color="white">
                      Users
                    </Typography>
                  </Box>
                  <Typography color="white">19</Typography>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    sx={{
                      height: 10,
                      "& .MuiLinearProgress-root": {
                        backgroundColor: "#191919",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: "#FFFFFF",
                      },
                    }}
                  />
                </Box>
                <Stack />
                <Stack mt={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        <HourglassBottomIcon />
                      </Avatar>
                      <Typography marginLeft={1} color="white">
                        Time Period
                      </Typography>
                    </Box>
                    <Typography color="white">19 Days</Typography>
                  </Box>

                  <Box sx={{ marginTop: "10px" }}>
                    <LinearProgress
                      style={{ marginTop: "10" }}
                      sx={{
                        height: 10,
                        "& .MuiLinearProgress-root": {
                          backgroundColor: "#191919",
                        },
                        "& .MuiLinearProgress-barColorPrimary": {
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                      variant="determinate"
                      value={60}
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box mx={10} mt={8}>
            <Typography color="white">Plan</Typography>
          </Box>
          <Box
            mx={10}
            mt={4}
            paddingBottom={2}
            sx={{ backgroundColor: "#191919" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      borderColor: "white",
                    },
                  }}
                />
                <Typography color="#9695FF">Teams</Typography>
              </Box>

              <Typography color="white">$49</Typography>
            </Box>

            <Stack>
              <Typography color="white">✔ Manage your group </Typography>
              <Typography color="white">
                ✔ View learning activity and track progress
              </Typography>
              <Typography color="white">✔ License Management Tools</Typography>
            </Stack>
          </Box>

          <Box
            mx={10}
            mt={3}
            paddingBottom={1}
            sx={{ backgroundColor: "#191919" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      borderColor: "white",
                    },
                  }}
                />
                <Typography color="#E95151">Enterprise</Typography>
              </Box>
              <Typography sx={{ textAlign: "right" }} color="white">
                $49
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" mx={10} paddingTop={4} px={3}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#594ED7",
                borderRadius: "20px",
              }}
            >
              Request free Demo
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default register;
