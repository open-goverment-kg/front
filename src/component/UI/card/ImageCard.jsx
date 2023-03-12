import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  styled,
  Typography,
} from "@mui/material";

const ImageCard = ({ place, checked }) => {
  return (
    <StyledCollapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className="root">
        <CardContent className="card_content">
          <Box className="typographies">
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className="title"
            >
              {place.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="desc"
            >
              {place.description}
            </Typography>
          </Box>

          <CardMedia
            className="media"
            image={place.imageUrl}
            title="Contemplative Reptile"
          />
        </CardContent>
      </Card>
    </StyledCollapse>
  );
};

export default ImageCard;

const StyledCollapse = styled(Collapse)(() => ({
  "& .root": {
    background: "rgba(0,0,0,0.5)",
  },
  "& .media": {
    height: 240,
    borderRadius: "5px",
  },
  "& .title": {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  "& .desc": {
    fontSize: "1.1rem",
    color: "#ddd",
  },
  "& .card_content": {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  },
  "& .typographies": {
    padding: "1rem",
  },
}));
