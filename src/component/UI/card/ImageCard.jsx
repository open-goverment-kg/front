import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
              {place.content}
            </Typography>
          </Box>
          <Box>
            {place.images.map((image) => (
              <CardMedia
                className="media"
                image={image}
                title="Contemplative Reptile"
              />
            ))}
          </Box>

          <Grid container spacing={5}>
            <Grid item>
              <FavoriteIcon />
              <FavoriteBorderIcon />
            </Grid>
            <Grid item>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
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
    minWidth: "240px",
    borderRadius: "5px",
  },
  "& .medies": {
    display: "flex",
    width: "240px",
    overflow: "auto",
    gap: "8px",
  },
  "& .medies::-webkit-scrollbar": {
    display: "none",
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
  "& .MuiSvgIcon-root": {
    fill: "#5aff3d",
  },
}));
