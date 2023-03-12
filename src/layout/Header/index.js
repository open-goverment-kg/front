import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import useScroll from "../../hook/useScroll";
import useToggle from "../../hook/useToggle";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Header = () => {
  const [openMenu, setOpenMenu, open] = useToggle();
  const scroll = useScroll();

  return (
    <StyledHeader className="root" id="header">
      <AppBar
        className={`appbar ${scroll ? "scrolled" : ""}`}
        elevation={scroll ? 24 : 0}
      >
        <Toolbar className="appbarWrapper">
          <h1 className="appbarTitle">
            My<span className="colorText">Kyrgyzstan.</span>
          </h1>
          <IconButton onClick={setOpenMenu}>
            <SortIcon className="icon" />
          </IconButton>
          <Menu
            open={open}
            anchorEl={openMenu}
            onClose={setOpenMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={setOpenMenu}>
              <Link to={ROUTES.MAIN}>Home</Link>
            </MenuItem>
            <MenuItem onClick={setOpenMenu}>
              <Link to={ROUTES.PUBLISH}>Publish</Link>
            </MenuItem>
            <MenuItem onClick={setOpenMenu}>
              <Link to={ROUTES.SIGNIN}>Sign In</Link>
            </MenuItem>
            <MenuItem onClick={setOpenMenu}>
              <Link to={ROUTES.SIGNUP}>Sign Up</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled(Box)(() => ({
  "& .root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  "& .appbar": {
    background: "none",
    transition: "0.9s",
  },
  "& .appbar.scrolled": {
    background: "#111",
  },
  "& .appbarWrapper": {
    width: "80%",
    margin: "0 auto",
  },
  "& .appbarTitle": {
    flexGrow: "1",
  },
  "& .icon": {
    color: "#fff",
    fontSize: "2rem",
  },
  "& .collapsed": {
    maxHeight: "50px",
  },
}));
