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

const Resolved = () => {
  return (
    <>
            <Grid item xs={12} sm={6}>
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
                      <Typography sx={{ p: 0.8 }} variant="body2" color="white">
                        info
                      </Typography>
                    </Button>
                  </Box>
                  <Button
                    size='small'
                    sx={{
                      backgroundColor: "white",
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
                    defaultValue="resolved"
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
                    <MenuItem value="resolved">
                      <ListItemText primary="Status: Resolved" />
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
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                    size="small"
                      sx={{
                        color: "white",
                        fontSize:{xs:12},
                          textTransform:'none'
                      }}
                    >
                      Resolved
                    </Button>
                    <IconButton sx={{ color: "green" }}>
                      <VerifiedIcon
                        sx={{
                          ml: 0.2,
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#838383",ml:{xs:22} }}>
                    student id: 879684384
                  </Typography>
                </Box>
              </Box>
            </Grid>
    </>
  )
}

export default Resolved