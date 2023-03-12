import React, { useEffect } from "react";
import useWindowPosition from "../hook/useWindowPosition";
import ImageCard from "./UI/card/ImageCard";
import { Box, Grid, styled, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ActionSlice } from "../redux/slice";
import axios from "axios";
import Chart from "./chart";
import SimpleBarChart from "./chart/BarChart";

const PlaceToVisit = () => {
  const checked = useWindowPosition("header");
  const { data } = useSelector((state) => state.slice);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cards");
        dispatch(ActionSlice.getData(response.data));
      } catch (erro) {
        console.log(erro);
      }
    };
    getData();
  }, []);

  return (
    <StyledPlaceToVisit className="root" id="place-to-visit">
      <Box>
        <Typography></Typography>
      </Box>
      {data?.map((place) => (
        <ImageCard place={place} checked={checked} key={place.id} />
      ))}
    </StyledPlaceToVisit>
  );
};

export default PlaceToVisit;

const StyledPlaceToVisit = styled(Box)(() => ({
  "&.root": {
    minHeight: "100vh",
    display: "grid",
    gap: "8px",
    [`theme.breakpoints.down("md")`]: {
      flexDirection: "column",
    },
  },
}));
