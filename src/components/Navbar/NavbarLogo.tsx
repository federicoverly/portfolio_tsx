import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import { Colors } from "../../styles/globalStyles";

export interface IProps {
  show: boolean;
}

export const NavbarLogo = ({ show }: IProps) => {
  return (
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
  );
};

NavbarLogo.displayName = "NavbarLogo";
