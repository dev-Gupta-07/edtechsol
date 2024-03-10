import React from "react";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
import ExploreIcon from "@mui/icons-material/Explore";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { CheckCircle, PsychologyOutlined } from "@mui/icons-material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import AddIcon from "@mui/icons-material/Add";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ComputerIcon from "@mui/icons-material/Computer";
import CreateIcon from "@mui/icons-material/Create";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useMediaQuery, useTheme } from "@mui/material";

const ExploreStarting = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box >
        <Box
          sx={{
            position: "relative",
          
            width: "100%",
            height: "550px",
          }}
        >
          <Box sx={{ position: { md: "relative" } }}>
            <img
              src="/explore/backgroundimg.png"
              alt="python"
              style={{ width: "100%", height: "420px" }}
            />
            
          </Box>
          {/* <Box
            sx={{
              position: { xs: "relative", md: "relative" }, // Set position to relative only for mobile
              width: "100%",
              height: isMobile ? "800px" : "420px", // Adjust height for mobile and other screen sizes
            }}
          >
            <img
              src="/clubbed_explore_images/backgroundimg.png"
              alt="python"
              style={{ width: "100%", height: isMobile ? "none" : "100%" }} // Make image responsive
            /> */}
{/* 
            {isMobile && ( // Render img2 as background image only for mobile
              <Box
                sx={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%", // Adjust width as needed
                  height: "100%", // Adjust height as needed
                  backgroundImage: "url('/clubbed_explore_images/backgroundimg_mobile.png')",
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            )}
            {!isMobile && ( // Render img2 as background image only for mobile
              <Box
                sx={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%", // Adjust width as needed
                  height: "100%", // Adjust height as needed
                  backgroundImage: "url('/clubbed_explore_images/backgroundimg.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            )} */}


          {/* </Box> */}

          <Box
            sx={{
              position: { xs: "absolute", md: "absolute" },
              top: {md:35},
              left: { md: 70, xs: 30 },
              color: "white",
            }}
          >
            <Image
              height={89}
              width={89}
              src="/explore/pythonimg.png"
              alt="python"
              //   sx={{width: {md:"89px",xs:"50px"}, height: "89px" }}
              //   style={{ width: {md:"89px",xs:"50px"}, height: "89px" }}
              //   style={{ width: "100%", height: "100%" }}
            />

            <Typography
              sx={{ fontSize: { md: "32px", xs: "25px" }, fontWeight: "bold" }}
            >
              Python Fundamentals Full Course
            </Typography>
            <Box sx={{ width: { md: "550px", xs: "350px" } }}>
              This course has been designed to set you on your way to becoming a
              Neo4j expert. In this course you will learn about the underlying
              principles that underpin Neo4j.
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: { md: "200px", xs: "170px" },
                  height: "45px",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "black",
                  borderRadius: "6px",
                  mt: 2,
                  fontWeight: "medium",
                }}
              >
                Start your free trial
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: { md: "170px", xs: "140px" },
                  height: "45px",
                  backgroundColor: "#594ED7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  borderRadius: "6px",
                  mt: 2,
                  fontWeight: "medium",
                  ml: 3,
                  textTransform: "none",
                }}
                endIcon={
                  <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
                }
              >
                View Plans
              </Button>
            </Box>

            <Box
              sx={{
                backgroundColor: "#333333",
                height: { md: "80px", xs: "70px" },
                width: { md: "395px", xs: "350px" },
                mt: 2,
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", ml: { md: 3, xs: 2 }, pt: 1 }}>
                <Box>
                  <img
                    src="/explore/targets.png"
                    alt="python"
                    style={{ width: "100px", height: "30px" }}
                  />
                  <Typography sx={{ fontSize: { md: "12px", xs: "10px" } }}>
                    Beginner Level
                  </Typography>
                </Box>
                <Box
                  sx={{
                    length: "10px",
                    width: "2px",
                    backgroundColor: "white",
                    ml: { md: 2, xs: 1 },
                    mt: 0.5,
                  }}
                ></Box>
                <Box
                  sx={{
                    // width: "120px",
                    // alignItems: "center",
                    // justifyContent: "center",
                    ml: { md: 2, xs: 1 },
                    mr: 1,
                    mt: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      ml: { md: 4, xs: 3 },
                    }}
                  >
                    60+
                  </Typography>
                  <Typography sx={{ fontSize: { md: "12px", xs: "10px" } }}>
                    Hours of lectures
                  </Typography>
                </Box>
                <Box
                  sx={{
                    length: "10px",
                    width: "2px",
                    backgroundColor: "white",
                    mt: 0.5,
                    ml: { md: 2, xs: 1 },
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "90px",
                    // alignItems: "center",
                    // justifyContent: "center",
                    ml: { md: 2, xs: 1 },
                    mr: 1,
                    mt: 0.5,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold", ml: 2 }}
                  >
                    350+
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "12px", xs: "10px" },
                      ml: { md: 1, xs: 1.5 },
                    }}
                  >
                    Problems
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "580px",
              position: { md: "absolute" },
              top: "20px",
              right: "20px",
              width: "400px",
              backgroundColor: "#333333",
              pt: 2,
              px: 3,
              color: "white",
              borderRadius: "20px",
              //   pd:2
            }}
          >
            <img
              src="/explore/Programming-With-Python-Tutorials-01.png"
              alt="python"
              style={{ width: "100%", borderRadius: "10px" }}
              //   style={{ width: "100%", height: "200px", borderRadius: "10px" }}
            />
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                4 Chapters
              </Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "5px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "white",
                  ml: 1,
                  mt: 0.8,
                }}
              ></Box>
              <Typography sx={{ fontSize: "12px", ml: 1, color: "white" }}>
                16 Projects
              </Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "5px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "white",
                  ml: 1,
                  mt: 0.8,
                }}
              ></Box>
            </Box>
            <Typography sx={{ mt: 1, fontWeight: "bold" }}>
              Price Starting from.
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography>₹1999</Typography>
                  <Typography
                    sx={{ color: "#8B8B8B", ml: 1, fontSize: "12px", mt: 0.4 }}
                  >
                    ₹1,944.99
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "10px" }}>
                  Included in Plus Package
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1071B7",
                  borderRadius: "10px",
                  textTransform: "none",
                  ml: 15,
                  py: 0.1,
                }}
              >
                Get Course
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 1,
                // fontWeight: "bold",
              }}
            >
              <DoneIcon sx={{ marginRight: "5px" }} />
              12 months access to 190 hands-on Projects and Personalized
              Learning Paths
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 1,
                // fontWeight: "bold",
              }}
            >
              <DoneIcon sx={{ marginRight: "5px" }} />
              Completion certificates
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 1,
                // fontWeight: "bold",
              }}
            >
              <DoneIcon sx={{ marginRight: "5px" }} />
              New courses every week
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: 1,
                // fontWeight: "bold",
              }}
            >
              <DoneIcon sx={{ marginRight: "5px" }} />
              Early access to new courses
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                height: "5px",
                width: "95%",
                mt: 2,
              }}
            ></Box>
            <Typography sx={{ mt: 2, color: "#1071B7", pd: 3 }}>
              View all courses
            </Typography>
            {/* <Box>h</Box> */}
          </Box>

          {/* ------------------line------------ */}
          <Box
            sx={{
              backgroundColor: "white",
              height: "2px",
              width: { md: "68%", xs: "90%" },
              mt: { md: 11, xs: 15 },
              ml: 4,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            mt: { md: -13, xs: 57 },
            ml: 4,
            maxWidth: "100%",
            overflowX: "auto",
            display: "flex",
            alignItems: "center",
            // gap: 2,
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          {/* <Box sx={{ display: "flex", ml: 4, mt: -13 }}> */}
          {/* ------------1st button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5553FF",
              color: "white",
              borderRadius: "14px",
              //   borderRadius: {md:"14px",xs:"10px"},
              textTransform: "none",
              //   fontSize:{md:"20px",xs:"10px"}
              //   fontSize:{md:"20px",xs:"10px"}
              //   width:"350px",
              //   height:"38px"
            }}
            startIcon={<SchoolIcon sx={{ ml: 0 }} />} // Replace YourIcon with your actual icon component
            // startIcon={<SchoolIcon sx={{ml:{md:2,xs:0.5}, height:{md:"20px",xs:"10px"}, width:{md:"20px",xs:"10px"}}} />} // Replace YourIcon with your actual icon component
          >
            Overview
          </Button>

          {/* ------------2nd button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",
              ml: 1.5,
              px: 1.2,
              border: "1px solid white",
              // Disable text transformation
            }}
            startIcon={<BookIcon />} // Replace YourIcon with your actual icon component
          >
            Modules
          </Button>
          {/* ------------3rd button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",

              ml: 1.5,
              border: "1px solid white",
              px: 1.2,
              // Disable text transformation
            }}
            startIcon={<ImportContactsIcon />} // Replace YourIcon with your actual icon component
          >
            Courses & Projects
          </Button>
          {/* ------------4th button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",

              ml: 1.2,
              border: "1px solid white",
              px: 1.5,
              // Disable text transformation
            }}
            startIcon={<PersonIcon />} // Replace YourIcon with your actual icon component
          >
            Mentor Help
          </Button>
          {/* ------------5th button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",

              ml: 1.5,
              border: "1px solid white",
              px: 1.2,
              // Disable text transformation
            }}
            startIcon={<BookIcon />} // Replace YourIcon with your actual icon component
          >
            Career Boost
          </Button>
          {/* ------------6th button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",

              ml: 1.2,
              border: "1px solid white",
              px: 1.5,
              // Disable text transformation
            }}
            startIcon={<ExploreIcon />} // Replace YourIcon with your actual icon component
          >
            Plans
          </Button>
          {/* ------------7th button-------------- */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "14px",
              textTransform: "none",

              ml: 1.5,
              border: "1px solid white",
              px: 1.2,
              // Disable text transformation
            }}
            startIcon={<PsychologyAltIcon />} // Replace YourIcon with your actual icon component
          >
            FAQ
          </Button>
        </Box>
        <Box
          sx={{
            // display: "absolute",
            backgroundColor: "#333333",
            // height: "250px",
            width: { md: "64%", xs: "85%" },
            mx: 4,
            mt: 8,
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              color: "white",
              ml: { md: 4, xs: 2 },
              pt: 3,
            }}
          >
            <SchoolIcon />
            <Typography sx={{ ml: 2, fontWeight: "bold", fontSize: "20px" }}>
              You will learn to
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: "white" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  color: "white",
                  ml: { md: 8, xs: 4 },
                  pt: 2,
                }}
              >
                <GpsFixedIcon />
                <Typography
                  sx={{ ml: 2, fontSize: { md: "15px", xs: "10px" } }}
                >
                  Create a data stream using a Python script.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  color: "white",
                  ml: { md: 8, xs: 4 },
                  pt: 1,
                }}
              >
                <GpsFixedIcon />
                <Typography
                  sx={{ ml: 2, fontSize: { md: "15px", xs: "10px" } }}
                >
                  Create a data stream using a Python script.
                </Typography>
              </Box>
            </Box>
            <Box>
              <AddIcon sx={{ ml: { md: 50, xs: 3 }, mt: 3 }} />
            </Box>
          </Box>

          <Box
            sx={{
              width: "90%", // Adjust the width as needed
              height: "5px", // Adjust the height as needed
              borderBottom: "2px dotted white", // Adjust the color and style as needed
              margin: "20px 0",
              mr: 20, // Adjust the margin as needed
              ml: 2,
            }}
          />

          <Box
            sx={{
              display: "flex",
              color: "white",
              ml: { md: 4, xs: 2 },
              pt: 1,
            }}
          >
            <TrackChangesIcon />
            <Typography sx={{ ml: 2, fontWeight: "bold", fontSize: "20px" }}>
              Skills
            </Typography>
            <Box>
              <AddIcon sx={{ ml: { md: 84, xs: 23 } }} />
            </Box>
          </Box>
          <Box sx={{ display: { md: "flex", sx: "block" } }}>
            <Box
              sx={{
                display: "flex",
                color: "white",
                ml: { md: 8, xs: 4 },
                pt: 1,
              }}
            >
              <CheckCircle sx={{ color: "#30EE00", fontSize: "15px" }} />
              <Typography
                sx={{
                  ml: { md: 2, xs: 1 },
                  fontSize: { md: "15px", xs: "10px" },
                  mt: { md: -0.4 },
                }}
              >
                Data Engineering
              </Typography>
              <CheckCircle
                sx={{
                  color: "#30EE00",
                  fontSize: "15px",
                  ml: { md: 2, xs: 2 },
                }}
              />
              <Typography
                sx={{
                  ml: { md: 2, xs: 1 },
                  fontSize: { md: "15px", xs: "10px" },
                  mt: { md: -0.4 },
                }}
              >
                Data Visualization
              </Typography>
            </Box>
            <Box>
              <CheckCircle
                sx={{
                  color: "#30EE00",
                  fontSize: "15px",
                  ml: { md: 2, xs: 4 },
                  mt: { md: 1, xs: 1 },
                }}
              />
              <Typography
                sx={{
                  ml: { md: 6, xs: 7 },
                  fontSize: { md: "15px", xs: "10px" },
                  mt: { md: -3, xs: -2.3 },
                  color: "white",
                }}
              >
                Streaming Data Handling
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#333333",
              height: "22px",
              width: "80%",
              ml: 5,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            // display: "absolute",
            backgroundColor: "#333333",
            height: { md: "90px", xs: "140px" },
            width: { md: "64%", xs: "85%" },
            ml: 4,
            mt: -2.8,
            borderRadius: "20px",
          }}
        >
          {/* <Box sx={{ display: { md: "flex", xs: "block" } }}> */}
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              color: "white",
              ml: { md: 4, xs: 2 },
              pt: 3,
              mt: { md: 5, xs: 5 },
            }}
          >
            <ComputerIcon />
            <Typography
              sx={{
                ml: { md: 2, xs: 5 },
                mt: { md: 0, xs: -3 },
                fontWeight: "bold",
                fontSize: { md: "20px", xs: "15px" },
              }}
            >
              Technologies
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  ml: { md: 10, xs: 3 },
                  px: 3,
                  mt: { md: 0, xs: 2 },
                }}
              >
                <Box sx={{}}>
                  <ComputerIcon />
                  <Typography sx={{ fontSize: { md: "20px", xs: "10px" } }}>
                    Kafka
                  </Typography>
                </Box>
                <Box sx={{ ml: 4 }}>
                  <ComputerIcon sx={{}} />
                  <Typography sx={{ fontSize: { md: "20px", xs: "10px" } }}>
                    Druid
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    ml: 4,
                  }}
                >
                  <ComputerIcon />
                  <Typography sx={{ fontSize: { md: "20px", xs: "10px" } }}>
                    Python
                  </Typography>
                </Box>
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    ml: 4,
                  }}
                >
                  <ComputerIcon />
                  <Typography sx={{ fontSize: { md: "20px", xs: "10px" } }}>
                    Cofluent
                  </Typography>
                </Box>

                <AddIcon sx={{ ml: { md: 20, xs: 2 } }} />
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
        </Box>

        <Box
          sx={{
            // display: "absolute",
            backgroundColor: "#333333",
            height: "160px",
            width: { md: "64%", xs: "85%" },
            ml: 4,
            mt: -2.8,
            borderRadius: "20px",
            color: "white",
            // mr:4
          }}
        >
          <Box
            sx={{
              display: "flex",
              color: "white",
              ml: { md: 4, xs: 2 },
              pt: 3,
              mt: 5,
            }}
          >
            <CreateIcon />
            <Typography
              sx={{
                ml: 2,
                fontWeight: "bold",
                fontSize: { md: "20px", xs: "15px" },
              }}
            >
              Prerequisites
            </Typography>
            <AddIcon sx={{ ml: { md: 75, xs: 18 } }} />
          </Box>
          <Box sx={{ display: "flex", ml: { md: 9, xs: 4 }, mt: 2 }}>
            <Typography sx={{ fontSize: { md: "12px", xs: "9px" } }}>
              Basic understanding of Kafka
            </Typography>
            <Typography
              sx={{
                ml: { md: 3, xs: 1 },
                fontSize: { md: "12px", xs: "10px" },
                visibility: { md: "visible", xs: "hidden" },
              }}
            >
              Basic understanding of Druid
            </Typography>
            <Typography
              sx={{
                ml: { md: 3, xs: 1 },
                fontSize: { md: "12px", xs: "10px" },
                visibility: { md: "visible", xs: "hidden" },
              }}
            >
              AWS Account
            </Typography>
          </Box>
          <Box sx={{ display: "flex", ml: { md: 9, xs: 4 }, mt: 2 }}>
            <Typography sx={{ fontSize: { md: "12px", xs: "9px" } }}>
              Free account Confluent Cloud
            </Typography>
            <Typography
              sx={{
                ml: 3,
                fontSize: { md: "12px", xs: "10px" },
                visibility: { md: "visible", xs: "hidden" },
              }}
            >
              Basic understanding of Grafana
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExploreStarting;
