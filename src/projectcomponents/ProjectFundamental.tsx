import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { ProjectPageProps } from "@/types";
import Image from "next/image";
import axios from "axios";
// import { useProject, useUser } from "@/contexts";
import { Star } from "@mui/icons-material";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";

function ProjectFundamental() {
  // const { user, setUser } = useUser();
  // const [saved, setSaved] = useState(false);
  // const { project, tasks, projectActivity, setProject, setProjectActivity } =
  //   useProject();
  // const router = useRouter();

  // useEffect(() => {
  //   if (user && project) {
  //     setSaved(project.likes.includes(user._id));
  //   }
  // }, [user, project]);

  // const startProject = async () => {
  //   if (project?.environment === "jupyter") {
  //     if (user && !projectActivity?.jupyter_link) {
  //       let res = await axios.post(`/api/jupyter/createFile`, {
  //         projectId: project?._id,
  //         userId: user?._id,
  //       });
  //       if (res.status === 201) {
  //         res = await axios.put(
  //           `/api/project_activities/${projectActivity?._id}`,
  //           {
  //             jupyter_link: `https://jupyter.rise11.com/notebooks/projects/${project?._id}/${user?._id}.ipynb`,
  //           }
  //         );
  //         if (setProjectActivity) setProjectActivity(res.data);
  //         toast.success("Project Started");
  //       } else {
  //         toast.error("Some issue occurred!");
  //       }
  //     }
  //   }
  //   router.push(`/projects/${project?._id}/tasks`);
  // };

  // const saveProject = () => {
  //   if (saved) {
  //     axios
  //       .put(`/api/projects/${project?._id}`, { $pull: { likes: user?._id } })
  //       .then((res) => {
  //         if (setProject) setProject(res.data);
  //       });
  //   } else {
  //     axios
  //       .put(`/api/projects/${project?._id}`, { $push: { likes: user?._id } })
  //       .then((res) => {
  //         if (setProject) setProject(res.data);
  //       });
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9FED1",
          borderRadius: "20px",
          maxWidth: { md: "140px", xs: "92px" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#6D7A25",
            fontSize: { md: "12px", xs: "8px" },
            p: 0.5,
          }}
        > Beginner Friendly
          {/* {project?.level} */}
        </Typography>
      </Box>
      <Typography
        component="h1"
        color="white"
        sx={{
          fontSize: { md: "32px", xs: "24px" },
          fontWeight: "900",
          mt: { md: 1.4, xs: 1.2 },
        }}
      >  
        Image to Text Converter
        {/* {project?.title} */}
      </Typography>
      <Box sx={{ display: "flex", mt: { md: 1.4, xs: 1.2 } }}>
        <Box
          sx={{
            border: "1px solid #A1A1A9",
            borderRadius: "10px",
            maxWidth: { md: "160px", xs: "125px" },
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            style={{ marginLeft: "7px" }}
            alt="icon"
            src="/projects/timer-sand.png"
            width={14}
            height={14}
          />
          <Typography
            sx={{
              fontSize: { md: "12px", xs: "8px" },
              p: 0.5,
              fontWeight: 700,
            }}
          > 2 hrs to complete
            {/* {project?.time_required} to complete */}
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid #A1A1A9",
            borderRadius: "10px",
            maxWidth: { md: "210px", xs: "170px" },
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            ml: { md: 1.5, xs: 1 },
            p: 0.5,
            px: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "12px", xs: "8px" },
              // fontWeight: 700,
              color: "#A1A1A9",
            }}
          >
            Difficulty:
          </Typography>
          {/* project?.difficulty */}
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              style={{ marginLeft: "7px", width: "17.5px", height: "16px" }}
              src="/projects/archery1.png"
              alt="diff-icon"
              width={17.5}
              height={16}
            />
          ))}
          {[...Array(5 - ( 3|| 0))].map((_, i) => (
            <Image
              key={i}
              style={{ marginLeft: "7px", width: "17.5px", height: "16px" }}
              src="/projects/archery2.png"
              alt="diff-icon"
              width={17.5}
              height={16}
            />
          ))}
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: { md: "15px", xs: "12px" },
          fontWeight: "light",
          mt: { md: 2.2, xs: 1.6 },
          letterSpacing: "0.4px",
          lineHeight: { md: "28px", xs: "12px" },
          color: "rgba(161,161,169,0.8)",
        }}
      > 
      Learn the basics of Neo4j and the property graph model
        {/* {project?.subtitle} */}
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: { md: 2.2, xs: 1.6 },
          mb: { md: 0, xs: 4 },
        }}
      >
        <Button
          sx={{
            backgroundColor: "#fafafa",
            color: "black",
            "&:hover": {
              backgroundColor: "#bcbec2",
            },
            fontWeight: "bold",
            fontSize: { md: "18px", xs: "12px" },
            borderRadius: "20px",
            lineHeight: "24px",
            letterSpacing: "0.25px",
            textTransform: "none",
            p: { md: 1, xs: 0.5 },
            px: { md: 3, xs: 3 },
          }}
          // onClick={startProject}
        >
          Start Now
        </Button>
        <Button
          // startIcon={saved ? <Star /> : <StarBorderIcon />}
          startIcon={<Star/>}
          sx={{
            color: "rgba(197,197,197,0.7)",
            "&:hover": {
              backgroundColor: "#050414",
            },
            border: "1px solid #F5F7FA",
            fontSize: { md: "18px", xs: "12px" },
            lineHeight: "24px",
            letterSpacing: "0.25px",
            borderRadius:"20px",
            textTransform: "none",
            p: { md: 1, xs: 0.5 },
            px: { md: 3, xs: 3 },
            ml: 2,
          }}
          // onClick={saveProject}
        >
          {/* {saved ? "Saved" : "Save Project"} */}
           {true ? "Favorite Course" : "Save Project"}
        </Button>
      </Box>
      <Divider
        sx={{
          my: 1,
          borderColor: "rgba(255,255,255,1)",
          borderWidth: 0.2,
          width: "121.3%",
          ml: -4,
          display: { md: "none", xs: "block" },
        }}
      />
    </>
  );
}

export default ProjectFundamental;
