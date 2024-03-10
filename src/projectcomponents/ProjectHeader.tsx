import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import ProjectFundamental from "./ProjectFundamental";

// import { ProjectPageProps } from "@/types";
//import { useProject } from "@/contexts";
import ProjectPricing from "./ProjectPricing";

function ProjectHeader() {
 // const { project, tasks, setProject } = useProject();
  return (
    <>
      <Box sx={{ px: { md: 10, xs: 4 }, py: { md: 6, xs: 4 } }}>
        <Grid container>
          <Grid item md={8} xs={12}>
            <ProjectFundamental />
          </Grid>
          <Grid item md={4} xs={12} sx={{ position: "relative" }}>
            <ProjectPricing />
          </Grid>
        </Grid>
      </Box>
      <Divider
        sx={{
          my: 1,
          borderColor: "rgba(255,255,255,1)",
          borderWidth: 0.2,
          width: "100%",
          display: { md: "block", xs: "none" },
        }}
      />
    </>
  );
}

export default ProjectHeader;
