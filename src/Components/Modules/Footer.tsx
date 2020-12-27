import React from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      height: constants.generalUnit * 10,
      color: "#262626",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: zIndex?.layer4,
      [breakpoints.down('sm')]: {
        padding: "none",
      }
    },
    chevron: {
      width: "35px",
    }
  })
})


const Footer: React.FC = () => {

  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.container}>
      &copy; {currentYear} TOM AMIRI
    </footer >
  );
};

export default Footer