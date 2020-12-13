import React from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      height: constants.generalUnit * 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0,
      zIndex: zIndex?.layer4,
      background: palette.secondary.main,
      [breakpoints.down('sm')]: {
        padding: "none",
      }
    },
    buttonWrapper: {
      position: "absolute",
      background: "#fff",
      height: constants.generalUnit * 10,
      padding: "0 1rem 1rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      cursor: "pointer",
    },
    buttonText: {
      fontWeight: "lighter",
      fontSize: "13px",
    },
    chevron: {
      width: "35px",
    }
  })
})


const Footer: React.FC = () => {

  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  // const handleClick = () => {
  //   window[`scrollTo`]({ top: 0, behavior: "smooth" })
  // }

  return (
    <footer className={classes.container}>
      &copy; {currentYear} TOM AMIRI
      {/* <div className={classes.buttonWrapper} onClick={handleClick}>
        <img src={chevron} className={classes.chevron} alt="chevron arrow" />
        <p className={classes.buttonText}>Return to top</p>
      </div> */}
    </footer >
  );
};

export default Footer