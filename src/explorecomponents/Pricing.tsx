import React from 'react'
import { Grid, Box, Typography, Switch, Button } from "@mui/material";
import { Poppins } from "next/font/google";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Pricing = () => {
  return (
    <>
    <Box sx={{backgroundImage:'linear-gradient(90deg,#796EF5,#5C1E5D)',py:{md:4,xs:2},px:{md:18,xs:2}}}>

     <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',textAlign:{xs:'center'},mb:4,px:{xs:6}}}>

        <Typography variant="h5" color="white" sx={{fontWeight:600}}>Choose the plan that works for you</Typography>
     </Box>



           <Grid container spacing={2}>
        
   

        
        <Grid item xs={12} md={4} 
          sx={{ ml: { xs: 2, md: 0 }, mr: { xs: 2, md: 0 },mb:{xs:2} }}>
       
          <Box
            sx={{
              backgroundColor: "black",
              padding: "0.8rem",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
               
                <Grid
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: "white",
                    width: "60px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src="/explore/for_plus.png"
                    height={35}
                    width={35}
                    alt="imgsignup"
                  />
                </Grid>
                {/* Typography */}
                <Grid container direction="column" sx={{ marginLeft: "1rem" }}>
                  <Typography variant="body1" color="white">
                    For individuals
                  </Typography>
                  <Typography
                    variant="body1"
                    color="orange"
                    fontWeight="bold"
                    fontSize="20px"
                  >
                    Plus
                  </Typography>
                </Grid>
              </Box>

              <Typography sx={{ marginBottom: "10px", fontSize: "15px" }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Typography>
          </Box>
          <Grid container sx={{ color: "white", fontFamily: "Poppins" }}>
            {/* First box takes up 30% */}

            <Grid item xs={2}>
              <Box
                sx={{
                  bgcolor: "orange",
                  height: "60px",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Text box with text "12" positioned at the bottom */}
                <Box sx={{ marginTop: "auto" }}>$12</Box>
              </Box>
            </Grid>
            {/* Second box takes up 70% */}
            <Grid item xs={10}>
              <Box sx={{ bgcolor: "orange", height: "60px", display: "flex" }}>
                {/* Two boxes inside the second box */}
                <Box
                  sx={{
                    bgcolor: "orange",
                    height: "60px",
                    p: 2,
                    width: "10%",
                    fontSize: "40px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  6
                </Box>
                <Box
                  sx={{
                    bgcolor: "orange",
                    height: "60px",
                    // p: 1,
                    width: "90%",
                  }}
                >
                  <Typography
                    sx={{ p: 0, marginTop: "6px", fontWeight: "bold" }}
                  >
                    .17 /month
                  </Typography>
                  <Typography sx={{ marginLeft: "15px", marginBottom: "15px" }}>
                    billed annually
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* <Box> */}

          <Box
            sx={{
              backgroundColor: "black",
              padding: "0.8rem",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                What's included
              </Typography>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Access our full content library
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                All certificates and projects
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Go from zero to job ready
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "orange",
                    
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    marginTop: "50px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "darkorange",
                    },
                  }}
                >
                  Upgrade to Plus
                </Button>
              </Box>
            </Typography>
          </Box>
        </Grid>

        {/* -----------------------------3--------------------------------------- */}

        <Grid item xs={12} md={4} 
          sx={{ ml: { xs: 2, md: 0 }, mr: { xs: 2, md: 0 },mb:{xs:2} }}>
          

          <Box
            sx={{
              position: "relative",
              backgroundColor: "black",
              padding: "0.8rem",
            
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Box
              position="absolute"
              sx={{
                bgcolor: "grey",
                borderRadius: "8px", // Adjust the value as needed
                p: 2, // Padding
                width: { md: "30%", xs: "25%" },
                height: "5%",
                color: "white",
                display: "flex",
                alignItems: "center",
                zIndex: 1,
                right: "37%",
                top: "-12%",
              }}
            >
              Popular
            </Box>

            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {/* Image */}
                <Grid
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: "white",
                    width: "60px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                >
                  {/* Placeholder for image */}
                  <Image
                    src="/explore/for_premium.png"
                    height={25}
                    width={25}
                    alt="imgsignup"
                  />
                </Grid>
                {/* Typography */}
                <Grid container direction="column" sx={{ marginLeft: "1rem" }}>
                  <Typography variant="body1" color="white">
                    For individuals
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#B2B1FF"
                    fontWeight="bold"
                    fontSize="20px"
                  >
                    Premium
                  </Typography>
                </Grid>
              </Box>

              <Typography sx={{ marginBottom: "10px", fontSize: "15px" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </Typography>
            </Typography>
          </Box>


          <Grid container sx={{ color: "white", fontFamily: "Poppins" }}>
            {/* First box takes up 30% */}

            <Grid item xs={2}>
              <Box
                sx={{
                  bgcolor: "#5553FF",
                  height: "60px",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Text box with text "12" positioned at the bottom */}
                <Box sx={{ marginTop: "auto" }}>$12</Box>
              </Box>
            </Grid>
            {/* Second box takes up 70% */}
            <Grid item xs={10}>
              <Box sx={{ bgcolor: "#5553FF", height: "60px", display: "flex" }}>
                {/* Two boxes inside the second box */}
                <Box
                  sx={{
                    bgcolor: "#5553FF",
                    height: "60px",
                    p: 2,
                    width: "10%",
                    fontSize: "40px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  6
                </Box>
                <Box
                  sx={{
                    bgcolor: "#5553FF",
                    height: "60px",
                    // p: 1,
                    width: "90%",
                  }}
                >
                  <Typography
                    sx={{ p: 0, marginTop: "6px", fontWeight: "bold" }}
                  >
                    .17 /month
                  </Typography>
                  <Typography sx={{ marginLeft: "15px", marginBottom: "15px" }}>
                    billed annually
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              backgroundColor: "black",
              padding: "0.8rem",
              // borderRadius: "20px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                What's included
              </Typography>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "5px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Access our full content library
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                All certificates and projects
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Go from zero to job ready
              </Box>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Our top Python, SQL, Tableau, Power BI and R programs
              </Box>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                More ways to learn to code
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt:1,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5553FF",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    marginTop: "15px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "darkorange",
                    },
                  }}
                >
                  Upgrade to Premium
                </Button>
              </Box>
            </Typography>
          </Box>
        </Grid>

        {/* ------------------------------------4------------------------------------- */}

        <Grid item xs={12} md={4} 
          sx={{ ml: { xs: 2, md: 0 }, mr: { xs: 2, md: 0 },mb:{xs:2} }}>
          {/* Box with black background color */}

          <Box
            sx={{
              position: "relative",
              backgroundColor: "black",
              padding: "0.8rem",
             
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <Box
              position="absolute"
              sx={{
                bgcolor: "grey",
                borderRadius: "8px", // Adjust the value as needed
                p: 2, // Padding
                width: { md: "30%", xs: "25%" },
                height: "5%",
                color: "white",
                display: "flex",
                alignItems: "center",
                zIndex: 1,
                right: "37%",
                top: "-12%",
              }}
            >
              Popular
            </Box>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {/* Image */}
                <Grid
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundColor: "white",
                    width: "60px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                >
                  {/* Placeholder for image */}
                  <Image
                    src="/explore/for_enterprise.png"
                    height={25}
                    width={25}
                    alt="imgsignup"
                  />
                </Grid>
                {/* Typography */}
                <Grid container direction="column" sx={{ marginLeft: "1rem" }}>
                  <Typography variant="body1" color="white">
                    For big companies
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#FF5959"
                    fontWeight="bold"
                    fontSize="20px"
                  >
                    Enterprise
                  </Typography>
                </Grid>
              </Box>

              <Typography
                sx={{
                  marginBottom: "10px",
                  fontSize: "15px",
                  marginTop: "5px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Typography>
          </Box>

        

          <Grid container sx={{ color: "white", fontFamily: "Poppins" }}>
            {/* First box takes up 30% */}

            <Grid item xs={2}>
              <Box
                sx={{
                  bgcolor: "#FF5959",
                  height: "60px",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Text box with text "12" positioned at the bottom */}
                <Box sx={{ marginTop: "auto" }}>$12</Box>
              </Box>
            </Grid>
            {/* Second box takes up 70% */}
            <Grid item xs={10}>
              <Box sx={{ bgcolor: "#FF5959", height: "60px", display: "flex" }}>
                {/* Two boxes inside the second box */}
                <Box
                  sx={{
                    bgcolor: "#FF5959",
                    height: "60px",
                    p: 2,
                    width: "10%",
                    fontSize: "40px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  6
                </Box>
                <Box
                  sx={{
                    bgcolor: "#FF5959",
                    height: "60px",
                    // p: 1,
                    width: "90%",
                  }}
                >
                  <Typography
                    sx={{ p: 0, marginTop: "6px", fontWeight: "bold" }}
                  >
                    .17 /month
                  </Typography>
                  <Typography sx={{ marginLeft: "15px", marginBottom: "15px" }}>
                    billed annually
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              backgroundColor: "black",
              padding: "0.8rem",
              // borderRadius: "20px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "Poppins" }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                What's included
              </Typography>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "0px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Manage your group
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "5px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                View learning activity and track progress
              </Box>

              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                License management tools
              </Box>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Personalized and adaptive learning paths for employees
              </Box>
              <Box
                sx={{
                  height: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "2px", fontSize: "12px" }}
                />
                Single Sign-On (SSO) through Okta, Auth0, Azure and more
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt:2,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#5553FF",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    marginTop: "10px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "darkorange",
                    },
                  }}
                >
                  Request a Demo
                </Button>
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Pricing