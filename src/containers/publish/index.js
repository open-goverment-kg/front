import {
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  FormControl,
  FormLabel,
  Grid,
  InputBase,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import PhotoUploader from "../../component/PhotoUpload";

const Publish = () => {
  const [value, setValue] = useState("");
  const [chips, setChips] = useState([]);
  const [images, setImages] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && value.trim() !== "") {
      if (!chips.includes(value.trim())) {
        setChips([...chips, value.trim()]);
        setValue("");
      }
    }
  };

  const handleDelete = (chipToDelete) => {
    setChips((prevState) => prevState.filter((chip) => chip !== chipToDelete));
  };

  const getImages = (image) => {
    setImages((prevState) => [...prevState, image]);
  };

  return (
    <StyledPublish>
      <Container>
        <Box>
          <Grid container spacing={5}>
            <Grid item xl={4} lg={4}>
              <FormControl>
                <FormLabel className="formLabel" required>
                  Заголовок публикации
                </FormLabel>
                <InputBase
                  placeholder="Заголовок публикации"
                  className="inputBase"
                />
              </FormControl>
            </Grid>
            <Grid item xl={6} lg={6}>
              <FormControl>
                <FormLabel className="formLabel" required>
                  Содержимое публикации
                </FormLabel>
                <InputBase
                  placeholder="Содержимое публикации"
                  className="inputBase"
                />
              </FormControl>
            </Grid>
            <Grid item xl={12} lg={12}>
              <FormControl>
                <FormLabel className="formLabel">Теги</FormLabel>
                <Box className="chips">
                  {chips.map((chip) => (
                    <Chip
                      key={chip}
                      label={chip}
                      onDelete={() => handleDelete(chip)}
                      className="purpleChip"
                    />
                  ))}
                </Box>
                <InputBase
                  placeholder="Type and press enter"
                  className="inputBase"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
            </Grid>
            <Grid item xl={12} lg={12}>
              <FormControl>
                <FormLabel className="formLabel">Изображение</FormLabel>
                <PhotoUploader getImages={getImages} />
              </FormControl>
            </Grid>
            {images.map((image) => (
              <Grid item xl={2.5} lg={2.5} display="flex">
                <Card>
                  <CardMedia
                    image={image}
                    component="img"
                    height="140"
                    alt="Image"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </StyledPublish>
  );
};

export default Publish;
const StyledPublish = styled(Box)(() => ({
  padding: "120px 0",
  height: "100vh",
  overflow: "auto",
  "& .inputBase": {
    width: "360px",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "4px",
    padding: "8px 12px",
  },

  "& .inputBase::placeholder": {
    color: "#ccc",
  },

  "& .inputBase:focus": {
    outline: "none",
    backgroundColor: "#555",
  },
  "& .formLabel": {
    color: "#ccc",
    padding: "3px 0",
  },
  "& .purpleChip": {
    backgroundColor: "#5aff3d",
    color: "#333",
  },
  "& .chips": {
    padding: "8px 0",
    width: "80vw",
    overflow: "auto",
    display: "flex",
    gap: 8,
  },
}));
