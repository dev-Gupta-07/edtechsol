import {
  ColorLens,
  DesktopWindowsOutlined,
  Done,
  OfflineBolt,
  SettingsSystemDaydreamOutlined,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ProjectPricing() {
  return (
    <Box
      sx={{
        border: "1px solid white",
        mb: 4,
        borderRadius: "15px",
        position: "absolute",
        top: -10,
      }}
    >
      <Box
        sx={{
          pt: 4,
          pb: 2,
          px: 4,
          borderRadius: "15px",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Basic
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              borderBottom: "2px solid #E38E2A",
              px: 2,
              pb: 0.25,
            }}
          >
            Plus
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#594ED7" }}
          >
            Premium
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          py: 3,
          pb: 4,
          px: 4,
          borderRadius: "15px",
          backgroundColor: "black",
        }}
      >
        {/* <Box sx={{ display: "flex", alignItems: "center" }}> */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            textAlign: "center",
            color: "#E38E2A",
          }}
        >
          Demo Version
        </Typography>
        {/* </Box> */}
        <Button
          sx={{
            borderRadius: "10px",
            color: "white",
            textTransform: "none",
            width: "100%",
            mt: 1,
            py: 1.5,
          }}
          variant="contained"
          disabled
        >
          Upgrade Coming Soon...
        </Button>
        <Box>
          <Box sx={{ display: "flex", width: "70%", mt: 2, ml: 1 }}>
            <Done sx={{ color: "#594ED7" }} />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "19px",
                color: "rgba(233, 233, 233,0.8)",
                ml: 2,
              }}
            >
              12 months access all Projects and Personalized Learning Paths
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "70%", ml: 1 }}>
            <Done sx={{ color: "#594ED7" }} />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "19px",
                color: "rgba(233, 233, 233,0.8)",
                ml: 2,
              }}
            >
              Completion certificates
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "70%", ml: 1 }}>
            <Done sx={{ color: "#594ED7" }} />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "19px",
                color: "rgba(233, 233, 233,0.8)",
                ml: 2,
              }}
            >
              Expert Support Included
            </Typography>
          </Box>
          <Box sx={{ display: "flex", width: "70%", ml: 1 }}>
            <Done sx={{ color: "#594ED7" }} />
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "19px",
                color: "rgba(233, 233, 233,0.8)",
                ml: 2,
              }}
            >
              AI expert included
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ borderTop: "1.5px solid #E5E7EB", my: 1, mx: 1.5 }}></Box> */}
        {/* <Box sx={{ ml: 5, mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ColorLens sx={{ color: "#594ED7", fontSize: "18px" }} />
              <Typography sx={{ color: "#C6C6C6", fontSize: "12px", ml: 1 }}>
                2 hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <OfflineBolt sx={{ color: "#594ED7", fontSize: "18px" }} />
              <Typography sx={{ color: "#C6C6C6", fontSize: "12px", ml: 1 }}>
                Intermediate
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "74%",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DesktopWindowsOutlined
                sx={{ color: "#594ED7", fontSize: "18px" }}
              />
              <Typography sx={{ color: "#C6C6C6", fontSize: "12px", ml: 1 }}>
                Desktop only
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SettingsSystemDaydreamOutlined
                sx={{ color: "#594ED7", fontSize: "18px" }}
              />
              <Typography sx={{ color: "#C6C6C6", fontSize: "12px", ml: 1 }}>
                No setup
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}

export default ProjectPricing;
