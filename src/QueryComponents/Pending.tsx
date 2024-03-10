import React,{useState} from "react";

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


const Pending = () => {
  return (
   <>
    <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 2, p: "8px", backgroundColor: "#5E5F61" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography color="white">Test Case Failure</Typography>

                    <Button
                    size="small"
                      sx={{
                        ml: 0.8,
                        backgroundColor: "#838383",
                        borderRadius: 2,
                        textTransform:'none'
                      }}
                    >
                      <Box
                sx={{
                  width: 20, 
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: 10,
                  fontWeight: "bold",
                  border: "1px ",
                  textTransform:'lowercase'
                }}
              >
                i
              </Box>
                      <Typography sx={{ p: 0.8}} variant="body2" color="white">
                        info
                      </Typography>
                    </Button>
                  </Box>
                  <Button
                    size='small'
                    sx={{
                      backgroundColor: "white",
                      mr:1,
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textTransform:'none'
                    }}
                  >
                    <ChatIcon sx={{ color: "black" }} />

                    <Typography sx={{ p: 0.6, color: "black" }} variant="body2">
                      Check Chat
                    </Typography>
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                   
                    mt: 2,
                    width: "100%",
                  }}
                >
                  <MenuBookTwoToneIcon sx={{color:'white'}}/>
                  <Typography sx={{ml:1}}color="white">Python Fundamentals</Typography>

                  <Select
                    defaultValue="pending"
                    size="small"
                    IconComponent={(props) => <ArrowDropDownIcon {...props} style={{ color: "white" }} />}
                    sx={{
                      marginLeft:{md:6,xs:4},
                    
                      color: "white",
                      backgroundColor: "#838383",
                      width: "200px",
                      borderRadius: "20px",
                    }} 
                   
                  >
                    <MenuItem value="pending">
                      <ListItemText primary="Status: Pending" />
                    </MenuItem>
                  </Select>
                </Box>
                <Typography variant="body2" color="white"
                sx={{mt:1}}
                >
                  Text 2,Chapter 2
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                    mr:1
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      size='small'
                      variant="contained"
                      sx={{
                        backgroundColor: "#5553FF",
                        color: "white",
                        borderRadius: 1,
                        fontSize:{xs:12},
                        textTransform:'none'
                      }}
                    >
                      Answer 
                    </Button>
                    <Button
                    size='small'
                      variant="outlined"
                      sx={{
                        ml:1,
                        borderColor: "white",
                        color: "white",
                        borderRadius: 1,
                        fontSize:{xs:12},
                          textTransform:'none'
                      }}
                    >
                      Escalate
                    </Button>
                    <Button
                      sx={{
                        color: "red",
                        fontSize:{xs:12},
                        ml:1,
                          textTransform:'none'
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#838383",ml:{xs:5} }}>
                    student id:879684384
                  </Typography>
                </Box>
              </Box>
            </Grid>
   </>
  )
}

export default Pending