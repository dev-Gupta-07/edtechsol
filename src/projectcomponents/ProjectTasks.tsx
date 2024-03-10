// import {
//   Box,
//   Button,
//   Grid,
//   LinearProgress,
//   Typography,
//   linearProgressClasses,
//   styled,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useProject, useUser } from "@/contexts";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import Image from "next/image";
// import { ITask, ITaskActivity } from "@/types";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { NotStarted, PlayArrow } from "@mui/icons-material";
// import { toast } from "react-toastify";

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 5,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.mode === "light" ? "#656565" : "#656565",
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "white" : "white",
//   },
// }));

// const Task = ({ task }: { task: ITask }) => {
//   const { user } = useUser();
//   const { project, projectActivity, setProjectActivity } = useProject();
//   const [taskActivity, setTaskActivity] = useState<ITaskActivity | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (project && user && task) {
//       const query = {
//         project: project._id,
//         user: user?._id,
//         task: task._id,
//       };
//       axios
//         .get(`/api/task_activities/createOrFind`, {
//           params: query,
//         })
//         .then((res) => {
//           setTaskActivity(res.data);
//         });
//     }
//   }, [project, user, task]);

//   const start = async () => {
//     if (taskActivity?.status === "Not Started") {
//       await axios.put(`/api/task_activities/${taskActivity?._id}`, {
//         status: "Ongoing",
//       });
//     }
//     if (project?.environment === "jupyter") {
//       if (user && !projectActivity?.jupyter_link) {
//         let res = await axios.post(`/api/jupyter/createFile`, {
//           projectId: project?._id,
//           userId: user?._id,
//         });
//         if (res.status === 201) {
//           res = await axios.put(
//             `/api/project_activities/${projectActivity?._id}`,
//             {
//               jupyter_link: `https://jupyter.rise11.com/notebooks/projects/${project?._id}/${user?._id}.ipynb`,
//             }
//           );
//           if (setProjectActivity) setProjectActivity(res.data);
//           toast.success("Project Started");
//         } else {
//           toast.error("Some issue occurred!");
//         }
//       }
//     }
//     router.push(`/projects/${project?._id}/tasks/${task._id}`);
//   };

//   return (
//     <>
//       {
//         <Grid
//           container
//           sx={{
//             backgroundColor: "#1A1A1A",
//             mt: 2,
//             px: 1,
//             py: 1.5,
//             borderRadius: "10px",
//           }}
//         >
//           <Grid item md={1} xs={1}>
//             <Typography
//               sx={{
//                 fontSize: { md: "22px", xs: "12px" },
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 borderRadius: { md: "10px", xs: "5px" },
//                 color: "black",
//                 backgroundColor: "white",
//                 py: 0.5,
//                 px: { md: 0, xs: 1 },
//                 width: { md: "60%", xs: "100%" },
//               }}
//             >
//               {task.order}
//             </Typography>
//           </Grid>
//           <Grid item md={7} xs={7}>
//             <Typography
//               sx={{
//                 color: "#F3F3F3",
//                 fontSize: { md: "16px", xs: "10px" },
//                 mt: 1,
//                 ml: 6,
//               }}
//             >
//               {task.title}
//             </Typography>
//           </Grid>
//           <Grid item md={4} xs={4}>
//             <Box sx={{ mt: 0.5, ml: { md: 6, xs: 2 } }}>
//               {taskActivity?.status === "Ongoing" ? (
//                 <Button
//                   endIcon={
//                     <PlayArrow
//                       sx={{
//                         fontSize: { md: "16px", xs: "12px" },
//                         color: "#818321",
//                       }}
//                     />
//                   }
//                   onClick={start}
//                   sx={{
//                     color: "#177400",
//                     // border: "1px solid white",
//                     "&:hover": {
//                       backgroundColor: "#EAEC76",
//                     },
//                     backgroundColor: "#EAEC76",
//                     borderRadius: "5px",
//                     py: { md: 0.65, xs: 0.35 },
//                     px: { md: 2, xs: 1 },
//                     textTransform: "none",
//                   }}
//                 >
//                   Resume
//                 </Button>
//               ) : taskActivity?.status === "Completed" ? (
//                 <Button
//                   size="small"
//                   endIcon={<CheckCircleIcon />}
//                   onClick={start}
//                   sx={{
//                     textTransform: "none",
//                     backgroundColor: "#2ECF05",
//                     color: "#1A7F00",
//                     px: 2,
//                     borderRadius: "10px",
//                   }}
//                 >
//                   Completed
//                 </Button>
//               ) : (
//                 <Button
//                   size="small"
//                   endIcon={<NotStarted sx={{ color: "white" }} />}
//                   sx={{
//                     color: "white",
//                     backgroundColor: "#594ED7",
//                     px: 1.5,
//                     borderRadius: "10px",
//                   }}
//                   onClick={start}
//                 >
//                   Start
//                 </Button>
//               )}
//             </Box>
//           </Grid>
//         </Grid>
//       }
//     </>
//   );
// };

// function ProjectTasks() {
//   const { project, tasks, setProject } = useProject();

//   return (
//     <>
//       <Grid container sx={{ mb: 4 }}>
//         <Grid item md={8.5} xs={12}>
//           <Box
//             sx={{
//               border: "1px solid white",
//               borderRadius: "8px",
//               px: { md: 3, xs: 2.5 },
//               pt: { md: 3, xs: 2 },
//               mx: { md: 10, xs: 4 },
//               pb: 4,
//             }}
//           >
//             <Grid container alignItems={"center"}>
//               <Grid item md={8} xs={12}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <img
//                     style={{ height: "21px", width: "24px" }}
//                     src="/projects/archery1.png"
//                   />
//                   <Typography
//                     sx={{ fontSize: "24px", fontWeight: "bold", ml: 1 }}
//                   >
//                     Tasks
//                   </Typography>
//                 </Box>
//                 <Typography
//                   sx={{
//                     color: "#535B66",
//                     fontSize: "16px",
//                     width: { md: "60%", xs: "100%" },
//                     mt: 1,
//                     ml: 0.5,
//                   }}
//                 >
//                   {project?.subtitle}
//                 </Typography>
//               </Grid>

//               {/* <Grid item md={4} xs={12} sx={{ mt: { md: 0, xs: 1 } }}>
//                 <Typography sx={{ fontSize: "14px" }}>40% Complete</Typography>
//                 <Box sx={{ width: "100%", mt: 0.5 }}>
//                   <BorderLinearProgress variant="determinate" value={40} />
//                 </Box>
//               </Grid> */}
//             </Grid>

//             {tasks?.map((task, i) => (
//               <Task task={task} key={i} />
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default ProjectTasks;
