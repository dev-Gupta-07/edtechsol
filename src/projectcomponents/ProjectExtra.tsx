// import { ArrowForward, BookmarkBorder } from "@mui/icons-material";
// import { Box, Button, Typography } from "@mui/material";
// import Image from "next/image";
// import React from "react";

// function ProjectExtra() {
//   return (
//     <>
//       <Box
//         sx={{
//           px: { md: 3, xs: 2.5 },
//           pt: { md: 3, xs: 2 },
//           mx: { md: 8, xs: 2 },
//           pb: 4,
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
//           <img
//             src="/dashboard/book-icon.png"
//             style={{ height: "24px", width: "24px" }}
//           />
//           <Typography
//             sx={{
//               color: "#D5D7DE",
//               fontSize: "19.5px",
//               fontWeight: "bold",
//               lineHeight: "27px",
//               ml: 3,
//             }}
//           >
//             Popular Projects For You
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             backgroundColor: "#252525",
//             borderRadius: "10px",
//             display: "flex",
//             p: 0.5,
//             px: 1,
//             pr: 1.5,
//             alignItems: "center",
//             justifyContent: "space-between",
//             maxWidth: { md: "40%", xs: "100%" },
//             mt: { md: 3, xs: 2 },
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "black",
//               fontSize: "12px",
//               fontWeight: "bold",
//               textAlign: "center",
//               p: 1,
//               borderRadius: "10px",
//             }}
//           >
//             Interview Prep
//           </Box>
//           <Typography
//             sx={{
//               color: "#9f9f9f",
//               ml: 2,
//               fontSize: "12px",
//               fontWeight: "bold",
//             }}
//           >
//             JavaScript
//           </Typography>
//           <Typography
//             sx={{
//               color: "#9f9f9f",
//               ml: 2,
//               fontSize: "12px",
//               fontWeight: "bold",
//             }}
//           >
//             Python3
//           </Typography>
//         </Box>
//         {/* Slider */}
//         <Box sx={{ display: { md: "flex", xs: "block" }, mt: 2 }}>
//           <Box sx={{ mt: 2, mr: 4 }}>
//             <Box>
//               <Image
//                 style={{
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//                 alt="icon"
//                 src="/dashboard/dashboard-bg-slider.png"
//                 width={445}
//                 height={200}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 border: "1px solid white",
//                 borderBottomLeftRadius: "10px",
//                 borderBottomRightRadius: "10px",
//                 mt: -1,
//               }}
//             >
//               <Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     px: 3,
//                     pt: 3,
//                   }}
//                 >
//                   <Box>
//                     <Button
//                       size="small"
//                       sx={{
//                         color: "white",
//                         backgroundColor: "black",
//                         border: "1px solid white",
//                         textTransform: "none",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       Project
//                     </Button>
//                     <Button
//                       size="small"
//                       sx={{
//                         color: "#6D7A25",
//                         backgroundColor: "#F9FED1",
//                         border: "1px solid white",
//                         textTransform: "none",
//                         borderRadius: "15px",
//                         ml: 2,
//                       }}
//                     >
//                       Beginner friendly
//                     </Button>
//                   </Box>
//                   <BookmarkBorder sx={{ color: "#9CA3AF" }} />
//                 </Box>
//               </Box>
//               <Typography
//                 sx={{
//                   fontSize: "19.2px",
//                   fontWeight: "500",
//                   lineHeight: "27px",
//                   mx: 3,
//                   width: "60%",
//                   mt: 2,
//                   color: "#D5D7DE",
//                 }}
//               >
//                 Grokking Coding Interview Patterns in Python
//               </Typography>
//               <Box
//                 sx={{
//                   mx: 3,
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     maxWidth: { md: "210px", xs: "170px" },
//                     mt: 6,
//                     pb: 2,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: { md: "12px", xs: "8px" },
//                       // fontWeight: 700,
//                       color: "#A1A1A9",
//                     }}
//                   >
//                     Difficulty:
//                   </Typography>
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery2.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery2.png"
//                   />
//                 </Box>
//                 <Box>
//                   <Button
//                     endIcon={<ArrowForward />}
//                     sx={{
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       textTransform: "none",
//                       lineHeight: "20px",
//                       letterSpacing: "0.38px",
//                       backgroundColor: "#ffffff",
//                       "&:hover": {
//                         backgroundColor: "#f2f2f2",
//                       },
//                       color: "#2B2121",
//                       mt: 6,
//                       py: 1,
//                       px: 1.5,
//                       borderRadius: "10px",
//                     }}
//                   >
//                     Get Started
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//           <Box sx={{ mt: 2, mr: 4 }}>
//             <Box>
//               <Image
//                 style={{
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//                 alt="icon"
//                 src="/dashboard/dashboard-bg-slider.png"
//                 width={445}
//                 height={200}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 border: "1px solid white",
//                 borderBottomLeftRadius: "10px",
//                 borderBottomRightRadius: "10px",
//                 mt: -1,
//               }}
//             >
//               <Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     px: 3,
//                     pt: 3,
//                   }}
//                 >
//                   <Box>
//                     <Button
//                       size="small"
//                       sx={{
//                         color: "white",
//                         backgroundColor: "black",
//                         border: "1px solid white",
//                         textTransform: "none",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       Project
//                     </Button>
//                     <Button
//                       size="small"
//                       sx={{
//                         color: "#6D7A25",
//                         backgroundColor: "#F9FED1",
//                         border: "1px solid white",
//                         textTransform: "none",
//                         borderRadius: "15px",
//                         ml: 2,
//                       }}
//                     >
//                       Beginner friendly
//                     </Button>
//                   </Box>
//                   <BookmarkBorder sx={{ color: "#9CA3AF" }} />
//                 </Box>
//               </Box>
//               <Typography
//                 sx={{
//                   fontSize: "19.2px",
//                   fontWeight: "500",
//                   lineHeight: "27px",
//                   mx: 3,
//                   width: "60%",
//                   mt: 2,
//                   color: "#D5D7DE",
//                 }}
//               >
//                 Grokking Coding Interview Patterns in Python
//               </Typography>
//               <Box
//                 sx={{
//                   mx: 3,
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     maxWidth: { md: "210px", xs: "170px" },
//                     mt: 6,
//                     pb: 2,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: { md: "12px", xs: "8px" },
//                       // fontWeight: 700,
//                       color: "#A1A1A9",
//                     }}
//                   >
//                     Difficulty:
//                   </Typography>
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery1.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery2.png"
//                   />
//                   <img
//                     style={{
//                       width: "13px",
//                       height: "12px",
//                       marginLeft: "5px",
//                     }}
//                     src="/dashboard/archery2.png"
//                   />
//                 </Box>
//                 <Box>
//                   <Button
//                     endIcon={<ArrowForward />}
//                     sx={{
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       textTransform: "none",
//                       lineHeight: "20px",
//                       letterSpacing: "0.38px",
//                       backgroundColor: "#ffffff",
//                       "&:hover": {
//                         backgroundColor: "#f2f2f2",
//                       },
//                       color: "#2B2121",
//                       mt: 6,
//                       py: 1,
//                       px: 1.5,
//                       borderRadius: "10px",
//                     }}
//                   >
//                     Get Started
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           px: { md: 3, xs: 2.5 },
//           pt: { md: 3, xs: 2 },
//           // pr: { md: 18, xs: 0 },
//           mx: { md: 8, xs: 2 },
//           // ml: 10,
//           pb: 4,
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
//           <img
//             src="/projects/video-icon.png"
//             style={{ height: "24px", width: "24px" }}
//           />
//           <Typography
//             sx={{
//               color: "#D5D7DE",
//               fontSize: "19.5px",
//               fontWeight: "bold",
//               lineHeight: "27px",
//               ml: 3,
//             }}
//           >
//             Videos for Understanding
//           </Typography>
//         </Box>

//         {/* Custom Tabs for selecting programming language */}

//         <Box
//           sx={{
//             backgroundColor: "#252525",
//             borderRadius: "10px",
//             display: "flex",
//             p: 0.5,
//             px: 1,
//             pr: 1.5,
//             alignItems: "center",
//             justifyContent: "space-between",
//             maxWidth: { md: "40%", xs: "100%" },
//             mt: { md: 3, xs: 2 },
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "black",
//               fontSize: "12px",
//               fontWeight: "bold",
//               textAlign: "center",
//               p: 1,
//               borderRadius: "10px",
//             }}
//           >
//             Interview Prep
//           </Box>
//           <Typography
//             sx={{
//               color: "#9f9f9f",
//               ml: 2,
//               fontSize: "12px",
//               fontWeight: "bold",
//             }}
//           >
//             JavaScript
//           </Typography>
//           <Typography
//             sx={{
//               color: "#9f9f9f",
//               ml: 2,
//               fontSize: "12px",
//               fontWeight: "bold",
//             }}
//           >
//             Python3
//           </Typography>
//         </Box>
//         {/* Slider */}
//       </Box>
//     </>
//   );
// }

// export default ProjectExtra;
