// import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";
// import React from "react";
// import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
// import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
// import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
// import { useProject } from "@/contexts";

// function Tasks() {
//   const { project, projectActivity } = useProject();

//   return (
//     <Box>
//       <Box
//         sx={{
//           display: { md: "none", xs: "flex" },
//           p: 1,
//           backgroundColor: "#252525",
//           width: "45%",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mx: "auto",
//           borderRadius: "8px",
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: "12px",
//             fontWeight: "bold",
//             lineHeight: "22.5px",
//             backgroundColor: "black",
//             p: 0.5,
//             px: 1,
//             color: "white",
//             borderRadius: "8px",
//           }}
//         >
//           Instructions
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: "12px",
//             fontWeight: "bold",
//             lineHeight: "22.5px",
//             color: "#EAEAEA",
//             pr: 1,
//           }}
//         >
//           code
//         </Typography>
//       </Box>
//       <PanelGroup
//         autoSaveId={`task-editor-${project?._id}`}
//         direction="horizontal"
//       >
//         <Panel defaultSize={40} minSize={30}>
//           <Box>
//             <Card
//               sx={{
//                 maxHeight: "87vh",
//                 height: "87vh",
//                 overflow: "auto",
//                 border: "1px solid #F4E7E7",
//                 borderRadius: "10px",
//                 backgroundColor: "#252525",
//                 my: 2,
//                 mx: 1,
//               }}
//             >
//               <Box sx={{ px: 2, py: 2 }}>
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: "500",
//                     lineHeight: "22.5px",
//                   }}
//                 >
//                   Project Instructions
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{ py: { md: 2, xs: 1 }, px: 2, backgroundColor: "black" }}
//               >
//                 <Grid container>
//                   <Grid item md={1} xs={2}>
//                     <Box
//                       sx={{
//                         backgroundColor: "#181818",
//                         borderRadius: "5px",
//                         px: 3,
//                         py: 1,
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           backgroundColor: "black",
//                           borderRadius: "5px",
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           1
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           2
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           3
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           4
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           5
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           6
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           7
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           mt: 2.5,
//                           px: 1.5,
//                           py: 1,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                             lineHeight: "18px",
//                           }}
//                         >
//                           8
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Grid>
//                   <Grid item md={10} xs={10} sx={{ pl: { md: 2, xs: 1 } }}>
//                     <Box sx={{ px: 1 }}>
//                       <Typography
//                         sx={{
//                           fontSize: "14px",
//                           fontWeight: "500",
//                           lineHeight: "22.5px",
//                           color: "#E9E9E9",
//                         }}
//                       >
//                         Task 1 : Instructions to project
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "12px",
//                           lineHeight: "18px",
//                           color: "rgba(202,202,202,0.8)",
//                         }}
//                       >
//                         Within months, COVID-19 went from an epidemic to a
//                         pandemic. From the first identified case in December
//                         2019, how did the virus spread so fast and widely? In
//                         this free R project, we will visualize data from the
//                         early months of the coronavirus outbreak to see how this
//                         virus grew to be a global pandemic.
//                       </Typography>
//                       <Box sx={{ display: "flex", mt: 0.5 }}>
//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: { md: 1, xs: 0 },
//                           }}
//                         >
//                           dplyr
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "24px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           and make plots using
//                         </Typography>

//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: 1,
//                           }}
//                         >
//                           ggplot2
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Box sx={{ px: 1, mt: 3 }}>
//                       <Typography
//                         sx={{
//                           fontSize: "20px",
//                           fontWeight: "bold",
//                           lineHeight: "22.5px",
//                           color: "#E9E9E9",
//                         }}
//                       >
//                         Projects Instructions
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "12px",
//                           lineHeight: "24px",
//                           color: "rgba(202,202,202,0.8)",
//                         }}
//                       >
//                         This project assumes you can manipulate data frames
//                         using
//                       </Typography>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           ml: 3,
//                         }}
//                       >
//                         <CircleIcon sx={{ fontSize: "4px", mt: 0.8 }} />
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "18px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           Within months, COVID-19 went from an epidemic to a
//                           pandemic. From the first identified case in December
//                           2019, how did the virus spread so fast and widely?
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           ml: 3,
//                         }}
//                       >
//                         <CircleIcon sx={{ fontSize: "4px", mt: 0.8 }} />
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "18px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           In this free R project, we will visualize data from
//                           the early months of the coronavirus outbreak to see
//                           how this virus grew to be a global pandemic.
//                         </Typography>
//                       </Box>

//                       <Box sx={{ display: "flex", mt: 0.5 }}>
//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: { md: 1, xs: 0 },
//                           }}
//                         >
//                           dplyr
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "24px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           and make plots using
//                         </Typography>

//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: 1,
//                           }}
//                         >
//                           ggplot2
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Box sx={{ px: 1, mt: 3 }}>
//                       <Typography
//                         sx={{
//                           fontSize: "14px",
//                           fontWeight: "500",
//                           lineHeight: "22.5px",
//                           color: "#E9E9E9",
//                         }}
//                       >
//                         Helpful links
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "12px",
//                           lineHeight: "24px",
//                           color: "rgba(202,202,202,0.8)",
//                         }}
//                       >
//                         This project assumes you can manipulate data frames
//                         using
//                       </Typography>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           ml: 3,
//                         }}
//                       >
//                         <CircleIcon sx={{ fontSize: "4px", mt: 0.8 }} />
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "18px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           Within months, COVID-19 went from an epidemic to a
//                           pandemic. From the first identified case in December
//                           2019, how did the virus spread so fast and widely?
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           ml: 3,
//                         }}
//                       >
//                         <CircleIcon sx={{ fontSize: "4px", mt: 0.8 }} />
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "18px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           In this free R project, we will visualize data from
//                           the early months of the coronavirus outbreak to see
//                           how this virus grew to be a global pandemic.
//                         </Typography>
//                       </Box>

//                       <Box sx={{ display: "flex", mt: 0.5 }}>
//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: { md: 1, xs: 0 },
//                           }}
//                         >
//                           dplyr
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "12px",
//                             lineHeight: "24px",
//                             color: "rgba(202,202,202,0.8)",
//                             ml: 1,
//                           }}
//                         >
//                           and make plots using
//                         </Typography>

//                         <Typography
//                           sx={{
//                             backgroundColor: "#757575",
//                             color: "#cacaca",
//                             fontSize: "12px",
//                             lineHeight: "12px",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             borderRadius: "5px",
//                             px: 1,
//                             ml: 1,
//                           }}
//                         >
//                           ggplot2
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <Button
//                       size="small"
//                       sx={{
//                         border: "1px solid white",
//                         borderRadius: "5px",
//                         color: "white",
//                         backgroundColor: "black",
//                         textTransform: "none",
//                         mt: 2.5,
//                         px: 2,
//                         ml: 1,
//                       }}
//                       startIcon={<LightbulbCircleIcon />}
//                     >
//                       Take Hint
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Card>
//             <Divider
//               sx={{
//                 borderColor: "rgba(255,255,255,1)",
//                 borderWidth: 0.2,
//                 width: "100%",
//                 display: { md: "block", xs: "none" },
//                 mb: 2,
//               }}
//             />
//             <Box
//               sx={{
//                 mx: 14,
//                 display: "flex",
//                 flexDirection: { md: "row", xs: "column" },
//                 justifyContent: "space-between",
//                 mb: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",

//                   alignItems: "center",
//                 }}
//               >
//                 <ArrowCircleUpIcon />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: "500",
//                     lineHeight: "22.5px",
//                     ml: 1,
//                   }}
//                 >
//                   Previous Task
//                 </Typography>{" "}
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   mt: { md: 0, xs: 2 },
//                   alignItems: "center",
//                 }}
//               >
//                 <ArrowCircleDownIcon />
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     fontWeight: "500",
//                     lineHeight: "22.5px",
//                     ml: 1,
//                   }}
//                 >
//                   Next Task
//                 </Typography>{" "}
//               </Box>
//             </Box>
//           </Box>
//         </Panel>
//         <PanelResizeHandle>
//           <div className="resizer" />
//         </PanelResizeHandle>
//         <Panel minSize={40}>
//           <Box
//             sx={{
//               borderRadius: "5px",
//               backgroundColor: "#252525",
//               // px: 2,
//               // py: 2,
//               // my: 2,
//               // mx: 2,
//               height: "100vh",
//               display: { md: "block", xs: "none" },
//             }}
//           >
//             <iframe
//               src={`${projectActivity?.jupyter_link}?token=${process.env.NEXT_PUBLIC_JUPYTER_TOKEN}`}
//               height={"100%"}
//               width={"100%"}
//             ></iframe>
//           </Box>
//         </Panel>
//       </PanelGroup>
//     </Box>
//   );
// }

// export default Tasks;
