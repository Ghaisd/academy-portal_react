import ButtonMui from "@mui/material/Button";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <ButtonMui
      component={Link}
      to={props.to}
      variant="contained"
      size="medium"
      sx={{
        background: "#909590",
        textTransform: "none",
        "&:hover": {
          background: "#6B6B6B",
          color: "white",
        },
      }}
    >
      {props.children}
    </ButtonMui>
  );
};

export default Button;
