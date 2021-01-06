import React from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints, zIndex, constants }: ITheme) => {
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
      },
      "& > p": {
        color: "#333",
        "& > a": {
          color: "#333",
          transition: "all 0.5s",
          "&:visited": {
            color: "#5757f5",
          },
          "&:hover": {
            color: "#5757F5",
          }
        }
      },
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
      <p>&copy; {currentYear} TOM AMIRI made by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/moodypea99">Rain</a></p>
    </footer >
  );
};

export default Footer