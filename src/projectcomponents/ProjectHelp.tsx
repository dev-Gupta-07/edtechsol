// import React from "react";
// import { Box, Button, Divider, Grid, Typography } from "@mui/material";
// import { ProjectPageProps } from "@/types";

// function ProjectHelp() {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "#252525",
//           borderRadius: "10px",
//           display: "flex",
//           p: 1,
//           px: 2,
//           alignItems: "center",
//           justifyContent: "space-between",
//           maxWidth: { md: "90%", xs: "100%" },
//           mt: { md: 0, xs: 2 },
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "black",
//             fontSize: "12px",
//             fontWeight: "bold",
//             textAlign: "center",
//             p: 1,
//             borderRadius: "10px",
//           }}
//         >
//           Ask Expert
//         </Box>
//         <Typography
//           sx={{
//             color: "#9f9f9f",
//             ml: 2,
//             fontSize: "12px",
//             fontWeight: "bold",
//           }}
//         >
//           AI Assistant
//         </Typography>
//         <Typography
//           sx={{
//             color: "#9f9f9f",
//             ml: 2,
//             fontSize: "12px",
//             fontWeight: "bold",
//           }}
//         >
//           Resources
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           border: "1px solid white",
//           pt: 3,
//           mt: 2,
//           borderRadius: "5px",
//           maxWidth: { md: "90%", xs: "100%" },
//         }}
//       >
//         <Grid container sx={{ pl: 3 }}>
//           <Grid item md={3} xs={3}>
//             <img
//               style={{ height: "65px", width: "65px" }}
//               src="/projects/face-agent.png"
//             />
//           </Grid>
//           <Grid item md={7} xs={7}>
//             <Box
//               sx={{
//                 ml: 6,
//                 textAlign: "center",
//                 display: "flex",
//                 alignItems: "center",
//                 flexDirection: "column",
//               }}
//             >
//               <Button
//                 sx={{
//                   px: 4,
//                   borderRadius: "5px",
//                   backgroundColor: "white",
//                   "&:hover": {
//                     backgroundColor: "#bcbec2",
//                   },
//                   color: "black",
//                   width: "158px",
//                 }}
//               >
//                 <Typography sx={{ fontSize: "10px" }}>
//                   Talk to an Expert
//                 </Typography>
//               </Button>
//               {/* <Button
//                 sx={{
//                   px: 2.2,
//                   borderRadius: "5px",
//                   backgroundColor: "#050414",
//                   "&:hover": {
//                     backgroundColor: "#050414",
//                   },
//                   color: "white",
//                   border: "1px solid white",
//                   mt: 1,
//                   width: "158px",
//                 }}
//               >
//                 <Typography sx={{ fontSize: "8px" }}>
//                   Single purchase for Rs 1000
//                 </Typography>
//               </Button> */}
//               <Box>
//                 <Typography
//                   sx={{
//                     fontSize: "8px",
//                     mt: 1,
//                     color: "#eeeeee",
//                   }}
//                 >
//                   Included with premium plan
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//         <Box sx={{ borderBottom: "1px dashed white", mt: 1, mb: 1 }}></Box>
//         <Box sx={{ pl: 3, color: "#eeeeee", mt: 2 }}>
//           <Typography sx={{ fontSize: "14px", fontWeight: "bold", my: 1 }}>
//             Support Highlights
//           </Typography>
//           <Typography sx={{ fontSize: "10px", my: 1 }}>
//             • Doubt Clearing Sessions
//           </Typography>
//           <Typography sx={{ fontSize: "10px", my: 1 }}>
//             • One on One Connect
//           </Typography>
//           <Typography sx={{ fontSize: "10px", my: 1, mb: 2 }}>
//             • Experienced/Industry Professional
//           </Typography>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default ProjectHelp;
