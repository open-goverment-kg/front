import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
const StyledLayout = styled(Box)(() => ({
  backgroundColor: "#333",
  color: "#fff",
}));
