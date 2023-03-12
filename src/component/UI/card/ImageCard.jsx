import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Pagination,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionSlice } from "../../../redux/slice";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageCard = ({ place, checked }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeDot, setActiveDot] = React.useState(1);

  const handleDotChange = (event, value) => {
    setActiveDot(value);
    setScrollPosition((value - 1) * 248);
  };

  const scrollRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    scrollRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  const getByIdHandler = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards`);
      dispatch(ActionSlice.getData(response.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateByIdHandler = useCallback(async (updateData) => {
    try {
      await axios.put(`http://localhost:3001/cards/${place.id}`, updateData);
      getByIdHandler();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeByIdHandler = useCallback(async (updateData) => {
    try {
      await axios.delete(`http://localhost:3001/cards/${place.id}`, updateData);
      getByIdHandler();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const changeLikeHandler = () => {
    let likeCount;
    const newIsLikeValue = !place.isLike;
    if (!newIsLikeValue) {
      likeCount = place.likes - 1;
    } else {
      likeCount = place.likes + 1;
    }

    const updateData = { ...place, isLike: newIsLikeValue, likes: likeCount };
    updateByIdHandler(updateData);
  };

  return (
    <StyledCollapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className="root">
        <CardContent className="card_content">
          <Link to={`card/${place.id}`}>
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
          </Link>

          <Box>
            <Box className="medies" ref={scrollRef}>
              {place.images.map((image, index) => (
                <CardMedia
                  key={index}
                  className="media"
                  image={image}
                  title="Contemplative Reptile"
                />
              ))}
            </Box>
            <Box
              sx={{
                padding: "10px 0",
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={place.images.length}
                page={activeDot}
                onChange={handleDotChange}
                color="primary"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>

          <Grid container spacing={5}>
            <Grid item display="flex" gap="8px">
              <Box onClick={changeLikeHandler}>
                {place.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Box>
              <Typography className="colorText">{place.likes}</Typography>
            </Grid>
            <Grid item display="flex" gap="8px">
              <Rating name="read-only" value={place.rating / 5} readOnly />
              <Typography className="colorText">{place.rating}</Typography>
            </Grid>
            <Grid item>
              <Button onClick={removeByIdHandler}>
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </StyledCollapse>
  );
};

export default ImageCard;

const StyledCollapse = styled(Collapse)(() => ({
  "& .MuiPaginationItem-root": {
    color: "green",
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    color: "blue",
  },

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
    transition: "scroll-left 5s ease-in-out",
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
    fill: "#ff3d9b",
  },
}));
