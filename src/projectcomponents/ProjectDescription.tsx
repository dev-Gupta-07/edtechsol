// import { Box, Divider, Grid, Typography } from "@mui/material";
// import React from "react";
// import ProjectSummary from "./ProjectSummary";
// import ProjectHelp from "./ProjectHelp";
// import { ProjectPageProps } from "@/types";
// import { useProject } from "@/contexts";

// function ProjectDescription() {
//   const { project, tasks, setProject } = useProject();
//   return (
//     <>
//       <Box sx={{ px: { md: 10, xs: 4 }, py: { md: 10, xs: 4 } }}>
//         <Grid container>
//           <Grid item md={8.5} xs={12}>
//             <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
//               <Typography
//                 sx={{ fontSize: "24px", color: "#EDEDED", fontWeight: "bold" }}
//               >
//                 Project Description
//               </Typography>
//               <Box sx={{ mt: 1 }}>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: `<div style="font-size: 13.5px; color: rgba(237,237,237,0.8);
//                   line-height:24px;">${project?.description}</div>`,
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Grid>

//           <Divider
//             sx={{
//               my: 3,
//               borderColor: "rgba(255,255,255,1)",
//               borderWidth: 0.2,
//               width: "121.3%",
//               ml: -4,
//               display: { md: "none", xs: "block" },
//             }}
//           />
//         </Grid>
//         <Grid container>
//           <Grid item md={8} xs={12} sx={{ mt: 5 }}>
//             <ProjectSummary />
//           </Grid>

//           <Grid item md={4} xs={12} sx={{ pl: 4 }}>
//             <ProjectHelp />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

// export default ProjectDescription;
