import React from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";
import { Grid, Typography } from "@chainsafe/common-components";

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
      padding: "0.6rem 1.4rem",
      position: "relative",
      zIndex: zIndex?.layer3,
      display: "flex",
      alignItems: "center",
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
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();

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
        <Grid item className={classes.linksMenu} >
          <div className={classes.linkWrapper}>
            <a href="/about" className={classes.link}>About</a>
          </div>
        </Grid>
      </Grid>
    </nav >
  );
};

export default NavBar