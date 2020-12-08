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
      color: "#000",
      transition: "0.4s ease-in",
      '&:hover': {
        fontWeight: "bold",
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
      background: "black",
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
      color: palette.primary.light,
      transition: "0.1s ease-in-out",
      '&:hover': {
        fontWeight: "bold",
      },
      '&:active': {
        color: palette.additional["yellow"][4],
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
          <Link onClick={() => redirect('/services')} className={classes.link}>Services</Link>
          <Link onClick={() => redirect('/work')} className={classes.link}>Work</Link>
          <Link onClick={() => redirect('/careers')} className={classes.link}>Careers</Link>
          <Link onClick={() => redirect('/hireus')} className={classes.link}>Hire Us</Link>
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
              <Link className={classes.mobileLink} onClick={() => redirect('/')}>Home</Link>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <Link className={classes.mobileLink} onClick={() => redirect('/services')}>Services</Link>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <Link className={classes.mobileLink} onClick={() => redirect('/work')}>Work</Link>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <Link className={classes.mobileLink} onClick={() => redirect('/careers')}>Careers</Link>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <Link className={classes.mobileLink} onClick={() => redirect('/hireus')}>Hire Us</Link>
            </div>
          </ul>
        </div>
      )}
    </nav >
  );
};

export default NavBar