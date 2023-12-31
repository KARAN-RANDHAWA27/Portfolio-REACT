import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Toggle from "../Toggle/Toggle";
import CV from "../../CV/CV_2024.pdf";
import { Link, Element, scroller } from "react-scroll";

const pages = ["Home", "Skills", "Projects", "Experience", "Contact"];
const navItemStyle = {
  background: "none",
  "&:hover": {
    background: "none",
    color: "var(--orange)",
  },
};
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#252424" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Link
              style={{ textDecoration: "none" }}
              to="intro"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              isDynamic={true}
            >
              <Button
                sx={{ my: 2, color: "#fff", display: "block", ...navItemStyle }}
              >
                Home
              </Button>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              isDynamic={true}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#fff", display: "block", ...navItemStyle }}
              >
                Skills
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              isDynamic={true}
            >
              <Button
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#fff", display: "block", ...navItemStyle }}
              >
                {/* {page} */}
                Projects
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              isDynamic={true}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#fff", display: "block", ...navItemStyle }}
              >
                Contact Me
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <a href={CV} download="Karan_Randhawa_CV.pdf">
              <Button className="button">Download Cv</Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
