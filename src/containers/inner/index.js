import {
  Box,
  CardMedia,
  Container,
  Grid,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const InnerPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getByIdHandler = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const updateByIdHandler = useCallback(
    async (updateData) => {
      try {
        await axios.put(`http://localhost:3001/cards/${id}`, updateData);
        getByIdHandler();
      } catch (error) {
        console.log(error);
      }
    },
    [id]
  );

  const changeData = () => {
    let likeCount;
    const newIsLikeValue = !data.isLike;
    if (!newIsLikeValue) {
      likeCount = data.likes - 1;
    } else {
      likeCount = data.likes + 1;
    }

    const updateData = { ...data, isLike: newIsLikeValue, likes: likeCount };
    updateByIdHandler(updateData);
  };

  useEffect(() => {
    getByIdHandler();
  }, [getByIdHandler]);

  return (
    <StyledInnerPage>
      <Container>
        <Box className="content">
          <Box sx={{ padding: "1rem 0" }}>
            <Typography variant="h4" sx={{ padding: "1rem 0" }}>
              {data.title}
            </Typography>
            <Grid container spacing={5}>
              <Grid item display="flex" gap="8px">
                <Box onClick={changeData}>
                  {data.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Box>
                <Typography className="colorText">{data.likes}</Typography>
              </Grid>
              <Grid item display="flex" gap="8px">
                <Rating name="read-only" value={data.rating / 5} readOnly />
                <Typography className="colorText">{data.rating}</Typography>
              </Grid>
            </Grid>
          </Box>
          {data?.images?.map((image, index) => (
            <CardMedia
              key={index}
              className="media"
              image={image}
              title="Contemplative Reptile"
            />
          ))}
          <Typography variant="h5" sx={{ padding: "3rem 0" }}>
            {data.content}
          </Typography>
        </Box>
      </Container>
    </StyledInnerPage>
  );
};

export default InnerPage;

const StyledInnerPage = styled(Box)(() => ({
  backgroundColor: "#333",
  color: "#fff",
  "& .content": {
    padding: "100px 0",
  },
  "& .media": {
    width: "70vw",
    height: "60vh",
    borderRadius: "4px",
  },
  "& .MuiSvgIcon-root": {
    fill: "#5aff3d",
  },
}));
