// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import { ProjectPageProps } from "@/types";
// import { useProject } from "@/contexts";

// function ProjectSummary() {
//   const { project, tasks, setProject } = useProject();
//   return (
//     <>
//       <Box
//         sx={{
//           border: "1px solid white",
//           borderRadius: "8px",
//           px: { md: 6, xs: 2.5 },
//           pt: { md: 3, xs: 2 },
//           pr: { md: 18, xs: 0 },
//           pb: 2,
//           backgroundColor: "#262626",
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <img
//             style={{ width: "22px", height: "18px" }}
//             src="/projects/cap.png"
//           />
//           <Typography
//             sx={{
//               fontSize: { md: "24px", xs: "18px" },
//               lineHeight: { md: "32px", xs: "32px" },
//               fontWeight: "bold",
//               ml: 2,
//             }}
//           >
//             You will learn to:
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: { md: "block", xs: "block" },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               color: "#D3D6DB",
//               mt: 1,
//               width: { md: "100%%", xs: "100%" },
//               ml: { md: 4, xs: 0 },
//             }}
//           >
//             <img
//               style={{ width: "14px", height: "14px", marginTop: "4px" }}
//               src="/projects/aim-bg.png"
//             />
//             <Typography sx={{ fontSize: "12px", lineHeight: "24px", ml: 2 }}>
//               Create a data stream using a Python script.
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               color: "#D3D6DB",
//               mt: 1,
//               width: { md: "100%", xs: "100%" },
//               ml: { md: 4, xs: 0 },
//             }}
//           >
//             <img
//               style={{ width: "14px", height: "14px", marginTop: "4px" }}
//               src="/projects/aim-bg.png"
//             />
//             <Typography sx={{ fontSize: "12px", lineHeight: "24px", ml: 2 }}>
//               Create a data stream using a Python script.
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             ml: { md: 2, xs: 0.75 },
//             width: { md: "100%", xs: "90%" },
//             border: "1px dashed white",
//             mb: 2,
//             mt: 2,
//           }}
//         ></Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             pr: { md: 18, xs: 0 },
//           }}
//         >
//           <img
//             style={{ width: "24px", height: "26px" }}
//             src="/projects/archery1.png"
//           />
//           <Typography sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}>
//             Skills
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: { md: "flex", xs: "block" },
//             justifyContent: "space-between",
//             ml: { md: 4.8, xs: 1 },
//             mt: 2,
//             mb: 2,
//           }}
//         >
//           {project?.skills?.map((skill, i) => (
//             <Box sx={{ display: "flex", alignItems: "center" }} key={i}>
//               <img
//                 style={{ height: "14px", width: "14px" }}
//                 src="/projects/green-tick.png"
//               />
//               <Typography
//                 sx={{
//                   color: "#DDDDDD",
//                   fontSize: "14px",
//                   lineHeight: "20px",
//                   ml: 2,
//                 }}
//               >
//                 {skill}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* <Box
//         sx={{
//           border: "1px solid white",
//           borderRadius: "8px",
//           px: { md: 6, xs: 3 },
//           pt: { md: 3, xs: 2 },
//           pb: 2,
//           mt: 2,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             pr: { md: 18, xs: 0 },
//           }}
//         >
//           <img
//             style={{ width: "24px", height: "26px" }}
//             src="/projects/archery1.png"
//           />
//           <Typography sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}>
//             Skills
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: { md: "flex", xs: "block" },
//             justifyContent: "space-between",
//             ml: { md: 4.8, xs: 1 },
//             mt: 2,
//             mb: 2,
//           }}
//         >
//           {project?.skills?.map((skill, i) => (
//             <Box sx={{ display: "flex", alignItems: "center" }} key={i}>
//               <img
//                 style={{ height: "14px", width: "14px" }}
//                 src="/projects/green-tick.png"
//               />
//               <Typography
//                 sx={{
//                   color: "#DDDDDD",
//                   fontSize: "14px",
//                   lineHeight: "20px",
//                   ml: 2,
//                 }}
//               >
//                 {skill}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box> */}
//       <Grid container sx={{ mt: 1 }} spacing={2}>
//         <Grid item md={12} xs={12}>
//           <Box
//             sx={{
//               border: "1px solid white",
//               borderRadius: "8px",
//               pl: { md: 6, xs: 3 },
//               pr: { md: 4, xs: 2 },
//               pt: { md: 3, xs: 2 },
//               pb: 2,
//               backgroundColor: "#262626",
//             }}
//           >
//             <Box
//               sx={{
//                 display: { md: "flex", xs: "none" },
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   style={{ width: "20px", height: "20px" }}
//                   src="/projects/computer.png"
//                 />
//                 <Typography
//                   sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}
//                 >
//                   Technologies
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   style={{
//                     height: "50px",
//                     width: "50px",
//                     color: "#A1A1A1",
//                   }}
//                   src="/projects/kafka-logo.png"
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#f5f5f5",
//                     lineHeight: "24px",
//                   }}
//                 >
//                   Kafka
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   style={{
//                     height: "50px",
//                     width: "60px",
//                     color: "#A1A1A1",
//                   }}
//                   src="/projects/Druid.png"
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#f5f5f5",
//                     lineHeight: "24px",
//                   }}
//                 >
//                   Druid
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   style={{
//                     height: "50px",
//                     width: "60px",
//                     color: "#A1A1A1",
//                   }}
//                   src="/projects/Python.png"
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#f5f5f5",
//                     lineHeight: "24px",
//                   }}
//                 >
//                   Python
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   style={{
//                     height: "50px",
//                     width: "58px",
//                     color: "#A1A1A1",
//                   }}
//                   src="/projects/Grafana.png"
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#f5f5f5",
//                     lineHeight: "24px",
//                   }}
//                 >
//                   Grafana
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   // mt: 2,
//                   // ml: { md: 3, xs: 1 },
//                 }}
//               >
//                 <img
//                   style={{
//                     height: "50px",
//                     width: "60px",
//                     color: "#A1A1A1",
//                   }}
//                   src="/projects/Confluent.png"
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     color: "#f5f5f5",
//                     lineHeight: "24px",
//                     ml: 1,
//                   }}
//                 >
//                   Confluent
//                 </Typography>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: { md: "none", xs: "flex" },
//                 flexDirection: { xs: "column" },
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   style={{ width: "20px", height: "20px" }}
//                   src="/projects/computer.png"
//                 />
//                 <Typography
//                   sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}
//                 >
//                   Technologies
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{ display: "flex", ml: 3, justifyContent: "space-between" }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: "50px",
//                       width: "50px",
//                       color: "#A1A1A1",
//                     }}
//                     src="/projects/kafka-logo.png"
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#f5f5f5",
//                       lineHeight: "24px",
//                     }}
//                   >
//                     Kafka
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: "50px",
//                       width: "60px",
//                       color: "#A1A1A1",
//                     }}
//                     src="/projects/Druid.png"
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#f5f5f5",
//                       lineHeight: "24px",
//                     }}
//                   >
//                     Druid
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: "50px",
//                       width: "60px",
//                       color: "#A1A1A1",
//                     }}
//                     src="/projects/Python.png"
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#f5f5f5",
//                       lineHeight: "24px",
//                     }}
//                   >
//                     Python
//                   </Typography>
//                 </Box>
//               </Box>
//               <Box sx={{ display: "flex", ml: 3 }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: "50px",
//                       width: "58px",
//                       color: "#A1A1A1",
//                     }}
//                     src="/projects/Grafana.png"
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#f5f5f5",
//                       lineHeight: "24px",
//                     }}
//                   >
//                     Grafana
//                   </Typography>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     ml: 5.5,
//                     justifyContent: "center",
//                   }}
//                 >
//                   <img
//                     style={{
//                       height: "40px",
//                       width: "70px",
//                       color: "#A1A1A1",
//                     }}
//                     src="/projects/Confluent.png"
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "12px",
//                       color: "#f5f5f5",
//                       lineHeight: "24px",
//                     }}
//                   >
//                     Confluent
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item md={12} xs={12}>
//           <Box
//             sx={{
//               border: "1px solid white",
//               borderRadius: "8px",
//               px: { md: 6, xs: 3 },
//               pt: 1,
//               pb: 1,
//               backgroundColor: "#262626",
//             }}
//           >
//             <Box
//               sx={{
//                 display: { md: "flex", xs: "block" },
//                 alignItems: "center",
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   style={{ width: "16px", height: "16px" }}
//                   src="/projects/pen.png"
//                 />
//                 <Typography
//                   sx={{ fontSize: "24px", fontWeight: "bold", ml: 2 }}
//                 >
//                   Prerequisites
//                 </Typography>
//               </Box>
//               <Box sx={{ color: "rgba(245,245,245,0.7)", ml: 4, mt: 1 }}>
//                 {project?.prerequisites?.map((prerequisite, i) => (
//                   <Typography
//                     key={i}
//                     sx={{
//                       fontSize: "14px",
//                       lineHeight: "24px",
//                       fontWeight: 100,
//                       my: 1,
//                     }}
//                   >
//                     {prerequisite.name}
//                   </Typography>
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default ProjectSummary;
