// import { Box, Button, Typography } from "@mui/material";
// import React from "react";
// import NotStartedIcon from "@mui/icons-material/NotStarted";
// import LinearProgress from "@mui/material/LinearProgress";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import { ProjectPageProps } from "@/types";

// function ProjectResume() {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundImage: `url("/projects/header-bg.png")`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           px: 2,
//           pt: 3,
//           pb: 1.5,
//           borderRadius: "10px",
//           mt: { md: 0, xs: 1.5 },
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
//             Resume Project
//           </Typography>
//           <NotStartedIcon sx={{ ml: 2 }} />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             mt: 1,
//           }}
//         >
//           <Typography sx={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>
//             40% Complete
//           </Typography>
//           <Box sx={{ width: "60%", ml: 2 }}>
//             <LinearProgress
//               variant="determinate"
//               value={40}
//               sx={{
//                 "& .MuiLinearProgress-root": {
//                   backgroundColor: "#656565", // Change background color here
//                 },
//                 "& .MuiLinearProgress-barColorPrimary": {
//                   backgroundColor: "white", // Change progress color here
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             mt: 2,
//             borderBottom: "1px dashed white",
//             width: "107%",
//             ml: "-13.5px",
//           }}
//         ></Box>
//         <Box sx={{ display: "flex", mt: 2, alignItems: "center" }}>
//           <img
//             style={{ height: "21px", width: "23px" }}
//             src="/projects/archery-bg.png"
//           />
//           <Typography
//             sx={{
//               fontSize: "14px",
//               textDecoration: "underline",
//               ml: 1,
//               lineHeight: "20px",
//               color: "rgba(255,255,255,0.9)",
//             }}
//           >
//             Task 1: Build a Catalog of Products
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             borderLeft: "1.4px solid white",
//             height: 12,
//             ml: 1.4,
//             mt: 0.3,
//           }}
//         ></Box>
//         <Box
//           sx={{
//             border: "1px solid white",
//             borderRadius: "5px",
//             display: "flex",
//             p: 0.7,
//             mt: 0.3,
//           }}
//         >
//           <img
//             style={{ height: "10px", width: "10px", marginTop: "4px" }}
//             src="/projects/aim-bg.png"
//           />
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "12px",
//                 ml: 1,
//                 color: "rgba(255,255,255,0.8)",
//               }}
//             >
//               Within months, COVID-19 went from an epidemic to a pandemic. From
//               the first identified case in December 2019.
//             </Typography>
//           </Box>
//         </Box>
//         <Box>
//           <Button
//             endIcon={<SupportAgentIcon />}
//             sx={{
//               fontSize: "10px",
//               border: "1px solid white",
//               backgroundColor: "rgba(37, 37, 37, 0.34)",
//               "&:hover": {
//                 backgroundColor: "#204887",
//               },
//               mt: 2,
//               color: "rgba(255,255,255,.8)",
//               px: 1.7,
//             }}
//           >
//             Stuck in a loop? Contact our Experts
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default ProjectResume;
