import React from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { Box, Typography, Slider, Grid, LinearProgress,useTheme,useMediaQuery } from "@mui/material";
import Image from "next/image";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const YoutubeAlgorithm = () => {
     const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      sx={{
        backgroundColor: "#131313",
        minWidth:{md:370,xs:320},maxWidth:{md:370,xs:320},
        borderRadius: "20px",
        border: "1px solid white",
        overflow:'hidden',
        pb:2,
      }}
    >
      <Box sx={{
           height:{md:225,xs:193},
           backgroundImage:'url("/explore/youtube_algo.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}></Box>

      <Typography
        sx={{
          color: "white",
          fontWeight: "500",
          mx: 2.5,
          fontSize: "16px",
          mt: 1,
          mb: 1,
        }}
      >
        Learn how to implement elegant transitions, create new layouts and serve
        users with dynamic needs.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "flex", mx: 3 }}>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
              }}
            >
              #python
            </Typography>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
                ml: 1,
              }}
            >
              #hands-on
            </Typography>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
                ml: 1,
              }}
            >
              #algorithm
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mx: 3, mt: 2,mb:1 }}>
            <Typography sx={{ fontSize: "14px",color:"white" }}>4 Chapters</Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "white",
                ml: 1,
                mt: 1,
                
              }}
            ></Box>
            <Typography sx={{ fontSize: "14px", ml: 1 ,color:"white"}}>25 hours</Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "white",
                ml: 1,
                mt: 1,
              }}
            ></Box>
          </Box>
          <LinearProgress
            value={50}
            variant="determinate"
            sx={{
              mt: 1,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "white",
              },
              ml: 2,
              height:8,
              mr: 3,
              borderRadius: "30px",
            }}
          />
        </Box>

        {/* <Box sx={{height:"72px", width:"50px", backgroundColor:"#838383", borderRadius:"40px"}}>
        
      </Box> */}
        <Box
          sx={{
            position: "relative",
            height: "72px",
            width: "50px",
            backgroundColor: "#838383",
            borderRadius: "40px",
            ml:{md:4,xs:2}
          }}
        >
          <PlayCircleIcon
            sx={{
              position: "absolute",
              bottom: -4,
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "58px",
            }}
          />
          <CheckCircleOutlineIcon
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "18px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
const SpotifyAlgorithm = () => {
     const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      sx={{
        backgroundColor: "#131313", 
        maxWidth:{md:370,xs:320},
        minWidth:{md:370,xs:320},
        borderRadius: "20px",
        border: "1px solid white",
        pb:2,
        overflow:"hidden"
      }}
    >
    <Box sx={{
           height:{md:225,xs:193},
           backgroundImage:'url("/explore/spotify_algo.png")',
            backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           }}></Box>

      <Typography
        sx={{
          color: "white",
          fontWeight: 500,
          mx: 2.5,
          fontSize: "16px",
          mt: 1,
          mb: 1,
        }}
      >
        Learn how to implement elegant transitions, create new layouts and serve
        users with dynamic needs.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "flex", mx: 2 }}>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
              }}
            >
              #python
            </Typography>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
                ml: 1,
              }}
            >
              #hands-on
            </Typography>
            <Typography
              sx={{
                color: "#63B0B0",
                fontSize: {md:"15px",xs:"13px"},
                textDecoration: "underline",
                ml: 1,
              }}
            >
              #algorithm
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mx: 2, mt: 2 ,mb:1}}>
            <Typography sx={{ fontSize: "14px",color:"white"  }}>4 Chapters</Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "white",
                ml: 0.8,
                mt: 0.8,
              }}
            ></Box>
            <Typography sx={{ fontSize: "14px",color:"white" , ml: 0.5 }}>25 hours</Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "white",
                ml: 0.8,
                mt: 0.8,
              }}
            ></Box>
            <Typography sx={{ fontSize: "14px",color:"white" , ml:0.5 }}>3 left</Typography>
          </Box>
          <LinearProgress
            value={50}
            variant="determinate"
            sx={{
              mt: 1,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "white",
              },
              ml: 2,
               height:8,
            
              borderRadius: "30px",
            }}
          />
        </Box>

        <PlayCircleIcon
          sx={{
            color: "white",
            fontSize: "58px",
            mt:2,
            ml:{md:5,xs:3}
          }}
        />
      </Box>
    </Box>
  );
};

const Learn = () => {
       const theme=useTheme();
  const mdx=useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
         <Box>
        <Box sx={{ display: "flex",mt:1 }}>
          <AutoStoriesIcon sx={{ color: "white" }} />

          <Typography
            sx={{ color: "white", fontSize: 20, fontWeight: "bold", ml: 2}}
          >
            Courses for Python
          </Typography>
        </Box>
        {
            mdx&& <Typography sx={{ mt: 0.5,color:"white" }}>
          Get the inspiration you need with these collections carefully selected
          to boost your project’s engagement.
        </Typography>
        }
       

        <Box
          sx={{
            mt: 2,
            maxWidth: "100%",
            overflowX: "auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <YoutubeAlgorithm />
          <SpotifyAlgorithm />
          <YoutubeAlgorithm />
          <SpotifyAlgorithm />
          
        </Box>
        </Box>
      
    </>
  );
};

export default Learn;
