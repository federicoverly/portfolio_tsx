import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Colors } from "../styles/globalStyles";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, handleShow] = useState<boolean>(false);

  const handleWindowChange = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowChange);
    return () => {
      window.removeEventListener("scroll", handleWindowChange);
    };
  }, []);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        primaryColor: Colors.secondary,
        marginBottom: 4,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: show ? Colors.secondary : Colors.primary,
          color: show ? Colors.primary : Colors.secondary,
          transition: (theme) =>
            theme.transitions.create("background-color", {
              easing: "ease-in",
              duration: 500,
            }),
        }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          style={{
            display: "flex",
            alignItems: "center",
            outline: "none",
            textDecoration: "none",
            marginRight: 70,
            color: `${show ? Colors.primary : Colors.secondary}`,
            cursor: "pointer",
          }}
        >
          <Typography
            fontFamily="Raleway"
            fontWeight={800}
            sx={{
              fontSize: { xs: 14, md: 24 },
            }}
          >
            Federico Verly
          </Typography>
        </Link>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            style={{
              display: "flex",
              alignItems: "center",
              outline: "none",
              marginRight: 35,
              textDecoration: "none",
              color: `${show ? Colors.primary : Colors.secondary}`,
              alignContent: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              fontFamily="Raleway"
              fontWeight={300}
              variant="h6"
              textAlign="center"
              onClick={toggleDrawer(false)}
            >
              Portfolio
            </Typography>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            style={{
              display: "flex",
              alignItems: "center",
              outline: "none",
              marginRight: 35,
              textDecoration: "none",
              color: `${show ? Colors.primary : Colors.secondary}`,
              alignContent: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              fontFamily="Raleway"
              fontWeight={300}
              variant="h6"
              onClick={toggleDrawer(false)}
            >
              About
            </Typography>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            style={{
              display: "flex",
              alignItems: "center",
              outline: "none",
              marginRight: 35,
              textDecoration: "none",
              color: `${show ? Colors.primary : Colors.secondary}`,
              alignContent: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              fontFamily="Raleway"
              fontWeight={300}
              variant="h6"
              onClick={toggleDrawer(false)}
            >
              Contact
            </Typography>
          </Link>
        </Box>
        <IconButton
          edge="end"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            mr: 2,
            display: { xs: "block", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            color: `${show ? Colors.primary : Colors.secondary}`,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            primaryoundColor: Colors.primary,
          }}
        >
          <Box
            sx={{
              primaryColor: Colors.primary,
              width: "100vw",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.primary,
            }}
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              style={{
                display: "flex",
                alignItems: "center",
                outline: "none",
                textDecoration: "none",
                color: `${Colors.secondary}`,
                height: "33vh",
                alignContent: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                fontFamily="Raleway"
                fontWeight={300}
                variant="h6"
                textAlign="center"
                onClick={toggleDrawer(false)}
              >
                Portfolio
              </Typography>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              style={{
                display: "flex",
                alignItems: "center",
                outline: "none",
                textDecoration: "none",
                color: `${Colors.secondary}`,
                height: "33vh",
                alignContent: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                fontFamily="Raleway"
                fontWeight={300}
                variant="h6"
                onClick={toggleDrawer(false)}
              >
                About
              </Typography>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              style={{
                display: "flex",
                alignItems: "center",
                outline: "none",
                textDecoration: "none",
                color: `${Colors.secondary}`,
                height: "33vh",
                alignContent: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                fontFamily="Raleway"
                fontWeight={300}
                variant="h6"
                onClick={toggleDrawer(false)}
              >
                Contact
              </Typography>
            </Link>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
