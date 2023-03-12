import {
  Box,
  Collapse,
  Container,
  CssBaseline,
  IconButton,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaceToVisit from "../../component/PlaceToVisit";
import bgImage from "../../assets/images/b170629001.jpg";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <StyledHome image={bgImage}>
      <CssBaseline />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        className={checked ? "" : "collapsed"}
      >
        <div className="container">
          <h1 className="title">
            Welcome to <br />
            My <span className="colorText">Kyrgyzstan.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className="goDown" />
            </IconButton>
          </Scroll>
        </div>

        
      </Collapse>
      <Box className="cards" id="place-to-visit">
        <Container>
          <PlaceToVisit />
        </Container>
      </Box>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled(Box)(({ image }) => ({
  minHeight: "200vh",
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  display: "flex",
  flexDirection: "column",
  gap: "200px",
  "& .cards": {
    padding: "120px 0",
  },
  "& .container": {
    textAlign: "center",
    padding: "120px 0",
  },
  "& .title": {
    color: "#fff",
    fontSize: "4.5rem",
  },
  "& .goDown": {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));
