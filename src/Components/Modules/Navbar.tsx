import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Typography } from "@chainsafe/common-components";
import menuButton from "../Subpages/svg/burger.svg";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      height: constants.generalUnit * 9,
      position: "fixed",
      zIndex: zIndex?.layer4,
      background: "#121212",
      [breakpoints.down('sm')]: {
        padding: "none",
      }
    },
    linksMenu: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      [breakpoints.down('md')]: {
        alignItems: "center",
        justifyContent: "flex-end"
      },
    },
    logo: {
      width: constants.generalUnit * 4,
      height: constants.generalUnit * 4,
      margin: constants.generalUnit,
    },
    brandName: {
      color: palette.common.white.main,
      marginLeft: constants.generalUnit * 4,
      textDecoration: "none",
    },
    linkWrapper: {
      padding: "1.3rem 2rem",
      position: "relative",
      zIndex: zIndex?.layer3,
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "1rem",
      color: palette.common.white.main,
      fontWeight: "lighter",
      transition: "all 0.1s ease-in",
      '&:hover': {
        color: "#0B23F5",
      },
    },
    wrapper: {
      background: "black",
      position: "absolute",
      margin: "-1rem 0",
      left: 0,
      width: "100%",
      height: "105vh",
      zIndex: 400000,
    },
    mobileLinkContainer: {
      zIndex: 1000,
      display: "flex",
      width: "100%",
      marginTop: "20vh",
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mobileLinkWrapper: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mobileLink: {
      fontFamily: "Inter",
      textDecoration: "none",
      fontSize: "2rem",
      color: palette.common.white.main,
      '&:hover': {
        color: palette.additional["geekblue"][5],
        transition: "0.33s ease-in-out",
      },
      '&:active': {
        color: palette.additional["geekblue"][4],
        transition: "0.33s ease-in-out",
      },
    },
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <nav className={classes.container}>
      <Grid container xs={12}>
        <Grid item justifyContent="center" alignItems="flex-start">
          <Grid container alignItems="center">
            <Typography variant="h4">
              <a className={classes.brandName} href="/">Thomas Amiri</a>
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.linksMenu} onClick={toggleNav} >
          <div className={classes.linkWrapper} onClick={toggleNav}>
            <img src={menuButton} alt="menu button icon" onClick={toggleNav} />
          </div>
        </div>
        {(isNavVisible) && (
          <div className={classes.wrapper}>

            <img src={menuButton} alt="menuIcon" onClick={toggleNav} style={{ float: "right", position: "absolute", top: "4%", right: "32px" }} />
            <ul className={classes.mobileLinkContainer}>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/">Home</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/about">About</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/meta-alert">Meta-alert</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/kemistry">Kemistry</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/criterion-redesign">Criterion</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/cadencia">Cadencia</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} href="/posters">Graphic Work</a>
              </div>

              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} target="_blank" rel="noopener noreferrer" href="https://twitter.com/tomoamiri">Twitter</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} target="_blank" rel="noopener noreferrer" href="https://dribbble.com/tomoamiri">Dribbble</a>
              </div>
            </ul>
          </div>
        )}
      </Grid>
    </nav >
  );
};

export default NavBar