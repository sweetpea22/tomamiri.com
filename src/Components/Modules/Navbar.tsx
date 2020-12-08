import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Typography, useHistory, Link } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      height: constants.generalUnit * 9,
      position: "fixed",
      padding: "0.7rem",
      zIndex: zIndex?.layer4,
      background: "#fafafa",
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
      color: palette.common.black.main,
      marginLeft: constants.generalUnit,
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "1rem",
      color: palette.primary.main,
      transition: "all 0.1s ease-in",
      '&:hover': {
        color: "#e872dc",
      },
    },
    menuToggle: {
      [breakpoints.down(1170)]: {
        display: "block",
        cursor: "pointer",
      },
      display: "none",
      width: "40px",
      marginTop: "13px",
      zIndex: 400000,
      height: "40px",
      transition: "transform 0.4s ease-in",
    },
    wrapper: {
      background: palette.primary.main,
      position: "absolute",
      margin: "-1rem 0",
      left: 0,
      width: "100%",
      height: "103vh",
      zIndex: 400000,
    },
    mobileLinkContainer: {
      zIndex: 1000,
      display: "flex",
      width: "100%",
      marginTop: "15vh",
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
      textDecoration: "none",
      fontSize: "3rem",
      color: palette.common.white.main,
      transition: "0.1s ease-in-out",
      '&:hover': {
        color: palette.common.white.main,
      },
      '&:active': {
        color: palette.secondary.main,
      },
    },
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1170px)");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }
  const { redirect } = useHistory()


  return (
    <nav className={classes.container}>
      <Grid container xs={12}>
        <Grid item justifyContent="center" alignItems="flex-start">
          <Grid container alignItems="center">
            <Typography variant="h4">
              <Link className={classes.brandName} onClick={() => redirect('/')}>Thomas Amiri</Link>
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.menuToggle} onClick={toggleNav}>
          <p>hello</p>

        </div>

        {!isMobile && <Grid item className={classes.linksMenu} >
          <a href="https://twitter.com/tomoamiri" target="_blank" rel="noopener noreferrer" className={classes.link}>Twitter</a>
          <a href="https://dribbble.com/tomoamiri" target="_blank" rel="noopener noreferrer" className={classes.link}>Dribble</a>
        </Grid>
        }
      </Grid>
      {(isMobile && isNavVisible) && (
        <div className={classes.wrapper}>
          <div className={classes.menuToggle} onClick={toggleNav} style={{ float: "right", margin: "1.7rem 1rem" }}>
            <p>hello</p>
          </div>
          <ul className={classes.mobileLinkContainer}>
            <div className={classes.mobileLinkWrapper} >
              <a href="https://twitter.com/tomoamiri" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Twitter</a>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <a href="https://dribbble.com/tomoamiri" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Dribble</a>
            </div>
          </ul>
        </div>
      )}
    </nav >
  );
};

export default NavBar