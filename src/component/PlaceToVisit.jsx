import React from "react";
import useWindowPosition from "../hook/useWindowPosition";
import ImageCard from "./UI/card/ImageCard";
import places from "../static/places";
import { Box, styled } from "@mui/material";

const PlaceToVisit = () => {
  const checked = useWindowPosition("header");

  return (
    <StyledPlaceToVisit className="root" id="place-to-visit">
      {places.map((place) => (
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
