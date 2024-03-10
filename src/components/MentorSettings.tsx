import { Box, Button, Chip, Typography } from "@mui/material";
import React,{useState} from "react";
import DoneIcon from "@mui/icons-material/Done";
const MentorSettings = () => {
  const categories = [
  { id: 1, label: "Translation" },
  { id: 2, label: "Natural Language Processing" },
  { id: 3, label: "Language Processing" },
  { id: 4, label: "Multilingual" },
  { id: 5, label: "Multilingual" },
  { id: 6, label: "Multilingual" },
  { id: 7, label: "Multilingual" },
  { id: 8, label: "Multilingual" },
  { id: 9, label: "Multilingual" },
  { id: 10, label: "Language Processing" },
  { id: 11, label: "Multilingual" },
  { id: 12, label: "Multilingual" },
];


  const tags = [
    { id:1,label: "Translation" },
    { id:2,label: "Natural Language Processing" },
    { id:3,label: "Language Processing" },
    { id:4,label: "Multilingual" },
    { id:5,label: "Multilingual" },
    { id:6,label: "Multilingual" },
    { id:7,label: "Multilingual" },
    { id:8,label: "Multilingual" },
    { id:9,label: "Multilingual" },
  ];
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [selectedTags, setSelectedTags] = useState([]);
     const handleChipClick = (label) => {
    if (selectedCategories.includes(label)) {
      setSelectedCategories(selectedCategories.filter((selectedLabel) => selectedLabel !== label));
    } else {
      setSelectedCategories([...selectedCategories, label]);
    }
  };
   const handleChipClickTag = (label) => {
    if (selectedTags.includes(label)) {
      setSelectedTags(selectedTags.filter((selectedLabel) => selectedLabel !== label));
    } else {
      setSelectedTags([...selectedTags, label]);
    }
  };
  return (
    
    <>
      <Box>
        <Box sx={{ mt: 1, mr: { md: 8, sx: 2 } }}>
          <Typography color="white">Categories</Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {categories.map((item) => (
              <Chip
                id={item.id}
                key={item.id}
                 sx={{
    '&:hover': {
      backgroundColor: selectedCategories.includes(item.id) ? '#5553FF' : '#C2D1FC', 
      color: selectedCategories.includes(item.id) ? 'white' : 'black', 
    },
    backgroundColor: selectedCategories.includes(item.id) ? '#5553FF' : '#C2D1FC',
    marginRight: 1.2,
    marginBottom: 1,
    color: selectedCategories.includes(item.id) ? 'white' : 'black',
  }}
                label= {selectedCategories.includes(item.id) ? `${item.label } ✔` : `${item.label}`}
                   clickable
          onClick={() => handleChipClick(item.id)}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 1.5, mr: { md: 8, sx: 2 } }}>
          <Typography color="white">Tags</Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {tags.map((item) => (
              <Chip
                id={item.id}
                key={item.id}
                 sx={{
    '&:hover': {
      backgroundColor: selectedTags.includes(item.id) ? '#9F53FF' : '#DFC2FC', 
      color: selectedTags.includes(item.id) ? 'white' : 'black', 
    },
    backgroundColor: selectedTags.includes(item.id) ? '#9F53FF' : '#DFC2FC',
    marginRight: 1.2,
    marginBottom: 1,
    color: selectedTags.includes(item.id) ? 'white' : 'black',
  }}
                label= {selectedTags.includes(item.id) ? `${item.label } ✔` : `${item.label}`}
                   clickable
          onClick={() => handleChipClickTag(item.id)}
                
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#5553FF",
              borderRadius: 4,
              paddingX: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textTransform: "capitalize",
            }}
          >
            Save Profile
          </Button>
          <Typography sx={{ ml: 2 }} color="white">
            Step 3/3
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MentorSettings;
