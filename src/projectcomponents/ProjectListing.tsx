// import {
//   Box,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
//   Button,
// } from "@mui/material";
// import React, { FC } from "react";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

// interface SelectDropdownProps {
//   label: string;
//   options: string[];
// }

// const selectStyle = {
//   backgroundColor: "#4A4A4A",
//   color: "white",
//   "&:hover": {
//     backgroundColor: "#4A4A4A",
//   },
// };

// const SelectDropdown: FC<SelectDropdownProps> = ({ label, options }) => (
//   <FormControl variant="outlined" fullWidth>
//     <InputLabel>{label}</InputLabel>
//     <Select style={selectStyle} label={label}>
//       {options.map((option, index) => (
//         <MenuItem key={index} value={option}>
//           {option}
//         </MenuItem>
//       ))}
//     </Select>
//   </FormControl>
// );

// const ProjectListing = () => {
//   const levels = ["Beginner", "Intermediate", "Advanced"];
//   const prices = ["Free", "Paid"];
//   const types = ["Web Development", "Mobile Development", "Data Science"];
//   const timeToComplete = ["Short-term", "Medium-term", "Long-term"];
//   const projects = ["1-5", "6-10", "11-15"];

//   return (
//     <>
//       <Box sx={{ mx: 6, my: 4 }}>
//         <Box
//           sx={{
//             background: "linear-gradient(180deg, #008736 0%, #006943 100%);",
//             px: { md: 5, xs: 3 },
//             py: { md: 4, xs: 3 },
//             borderRadius: "15px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               mt: { md: 4, xs: 0 },
//               alignItems: "flex-start",
//             }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: { md: "32.14px", xs: "20px" },
//                   fontWeight: "bold",
//                   lineHeight: "40.8px",
//                   mt: { xs: 3, md: 0 },
//                 }}
//               >
//                 Projects
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   lineHeight: "21px",
//                   width: { md: "70%", xs: "170%" },
//                   mt: { md: 2.5, xs: 4 },
//                   fontWeight: "100",
//                   display: { md: "block", xs: "block" },
//                 }}
//               >
//                 HTML is the foundation of all web pages. It defines the
//                 structure of a page, while CSS defines its style. HTML and CSS
//                 are the beginning of everything you need to know to make your
//                 first web page! Learn both and start creating amazing websites.
//               </Typography>
//             </Box>
//             <Box sx={{ mr: { md: 8, xs: 0 } }}>
//               <img
//                 src="/courses/book-open-variant.png"
//                 style={{ height: "77px", width: "99px" }}
//               />
//             </Box>
//           </Box>
//         </Box>
//         <Box sx={{ display: "flex", mt: 4, justifyContent: "space-between" }}>
//           <SelectDropdown label="Level" options={levels} />
//           <SelectDropdown label="Price" options={prices} />
//           <SelectDropdown label="Type" options={types} />
//           <SelectDropdown label="Time to Complete" options={timeToComplete} />
//           <SelectDropdown label="Projects" options={projects} />
//         </Box>
//         <Box sx={{ display: { md: "flex", xs: "block" } }}>
//           <Box
//             sx={{
//               mt: 4,
//               display: { md: "flex", xs: "block" },
//             }}
//           >
//             <Box
//               sx={{
//                 border: "1px solid white",
//                 borderRadius: "15px",
//                 position: "relative",
//               }}
//             >
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 4,
//                   width: "350px",
//                   backgroundColor: "#5553FF",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Box sx={{ display: "flex" }}>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "white",
//                       color: "#1f1f1f",
//                       textTransform: "none",
//                       px: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Project
//                   </Button>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "#F9FED1",
//                       color: "#6D7A25",
//                       borderRadius: "20px",
//                       textTransform: "none",
//                       px: 1,
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Beginner friendly
//                   </Button>
//                 </Box>
//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     lineHeight: "26.9px",
//                     color: "#D5D7DE",
//                     width: "80%",
//                     mt: 2,
//                     pb: 4,
//                   }}
//                 >
//                   Grokking Coding Interview Patterns in Python
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 2,
//                   width: "350px",
//                   backgroundColor: "#000000",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     lineHeight: "21px",
//                     fontWeight: "100",
//                     color: "#ffffff",
//                     width: "80%",
//                   }}
//                 >
//                   Learn how to implement elegant transitions, create new layouts
//                   and serve users with dynamic needs.
//                 </Typography>
//                 <Box sx={{ mt: 3 }}>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     NLP
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     AI/ML
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       textTransform: "none",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     Python
//                   </Button>
//                 </Box>
//                 <Button
//                   size="large"
//                   sx={{
//                     backgroundColor: "white",
//                     color: "black",
//                     textTransform: "none",
//                     p: 1,
//                     px: 2,
//                     mt: 3,
//                     borderRadius: 0,
//                     fontSize: "18px",
//                     mb: 3,
//                   }}
//                 >
//                   Get Started
//                 </Button>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 27,
//                     right: 20,
//                     backgroundColor: "#222222",
//                     border: "1px solid #9CA3AF",
//                     p: 1,
//                     borderRadius: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <BookmarkBorderOutlinedIcon
//                     sx={{ height: "24px", width: "24px", color: "#9CA3AF" }}
//                   />
//                 </Box>
//                 <Box sx={{ position: "absolute", top: 30, right: 10 }}>
//                   <img
//                     style={{ height: "30px", width: "95px" }}
//                     src="/courses/premium.png"
//                   />
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               mt: 4,
//               display: { md: "flex", xs: "block" },
//               ml: { md: 6 },
//             }}
//           >
//             <Box
//               sx={{
//                 border: "1px solid white",
//                 borderRadius: "15px",
//                 position: "relative",
//               }}
//             >
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 4,
//                   width: "350px",
//                   backgroundColor: "#FFBA53",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Box sx={{ display: "flex" }}>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "white",
//                       color: "#1f1f1f",
//                       textTransform: "none",
//                       px: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Project
//                   </Button>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "#F9FED1",
//                       color: "#6D7A25",
//                       borderRadius: "20px",
//                       textTransform: "none",
//                       px: 1,
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Beginner friendly
//                   </Button>
//                 </Box>
//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     lineHeight: "26.9px",
//                     color: "#000000",
//                     width: "80%",
//                     mt: 2,
//                     pb: 4,
//                   }}
//                 >
//                   Grokking Coding Interview Patterns in Python
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 2,
//                   width: "350px",
//                   backgroundColor: "#000000",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     lineHeight: "21px",
//                     fontWeight: "100",
//                     color: "#ffffff",
//                     width: "80%",
//                   }}
//                 >
//                   Learn how to implement elegant transitions, create new layouts
//                   and serve users with dynamic needs.
//                 </Typography>
//                 <Box sx={{ mt: 3 }}>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     NLP
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     AI/ML
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       textTransform: "none",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     Python
//                   </Button>
//                 </Box>
//                 <Button
//                   size="large"
//                   sx={{
//                     backgroundColor: "white",
//                     color: "black",
//                     textTransform: "none",
//                     p: 1,
//                     px: 2,
//                     mt: 3,
//                     borderRadius: 0,
//                     fontSize: "18px",
//                     mb: 3,
//                   }}
//                 >
//                   Get Started
//                 </Button>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 27,
//                     right: 20,
//                     backgroundColor: "#222222",
//                     border: "1px solid #9CA3AF",
//                     p: 1,
//                     borderRadius: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <BookmarkBorderOutlinedIcon
//                     sx={{ height: "24px", width: "24px", color: "#9CA3AF" }}
//                   />
//                 </Box>
//                 {/* <Box sx={{ position: "absolute", top: 30, right: 10 }}>
//                 <img
//                   style={{ height: "30px", width: "95px" }}
//                   src="/courses/premium.png"
//                 />
//               </Box> */}
//               </Box>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               mt: 4,
//               display: { md: "flex", xs: "block" },
//               ml: { md: 6 },
//             }}
//           >
//             <Box
//               sx={{
//                 border: "1px solid white",
//                 borderRadius: "15px",
//                 position: "relative",
//               }}
//             >
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 4,
//                   width: "350px",
//                   backgroundColor: "#FF5353",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Box sx={{ display: "flex" }}>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "white",
//                       color: "#1f1f1f",
//                       textTransform: "none",
//                       px: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Project
//                   </Button>
//                   <Button
//                     size="small"
//                     sx={{
//                       backgroundColor: "#F9FED1",
//                       color: "#6D7A25",
//                       borderRadius: "20px",
//                       textTransform: "none",
//                       px: 1,
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                   >
//                     Beginner friendly
//                   </Button>
//                 </Box>
//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     lineHeight: "26.9px",
//                     color: "#D5D7DE",
//                     width: "80%",
//                     mt: 2,
//                     pb: 4,
//                   }}
//                 >
//                   Grokking Coding Interview Patterns in Python
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   px: 3,
//                   pt: 2,
//                   width: "350px",
//                   backgroundColor: "#000000",
//                   borderRadius: "15px",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "12px",
//                     lineHeight: "21px",
//                     fontWeight: "100",
//                     color: "#ffffff",
//                     width: "80%",
//                   }}
//                 >
//                   Learn how to implement elegant transitions, create new layouts
//                   and serve users with dynamic needs.
//                 </Typography>
//                 <Box sx={{ mt: 3 }}>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     NLP
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     AI/ML
//                   </Button>
//                   <Button
//                     sx={{
//                       color: "#F9FED1",
//                       border: "1px solid #F9FED1",
//                       ml: 1,
//                       textTransform: "none",
//                       fontSize: "10px",
//                     }}
//                     size="small"
//                   >
//                     Python
//                   </Button>
//                 </Box>
//                 <Button
//                   size="large"
//                   sx={{
//                     backgroundColor: "white",
//                     color: "black",
//                     textTransform: "none",
//                     p: 1,
//                     px: 2,
//                     mt: 3,
//                     borderRadius: 0,
//                     fontSize: "18px",
//                     mb: 3,
//                   }}
//                 >
//                   Get Started
//                 </Button>
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 27,
//                     right: 20,
//                     backgroundColor: "#222222",
//                     border: "1px solid #9CA3AF",
//                     p: 1,
//                     borderRadius: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <BookmarkBorderOutlinedIcon
//                     sx={{ height: "24px", width: "24px", color: "#9CA3AF" }}
//                   />
//                 </Box>
//                 <Box sx={{ position: "absolute", top: 30, right: 10 }}>
//                   <img
//                     style={{ height: "30px", width: "95px" }}
//                     src="/courses/premium.png"
//                   />
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ProjectListing;
