import React from "react";
import {
  createStyles, ITheme, makeStyles
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
    linkWrapper: {
      background: palette.secondary.main,
      padding: "0.6rem",
      position: "relative",
      zIndex: zIndex?.background,
      display: "flex",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "1rem",
      color: palette.common.black.main,
      fontWeight: "lighter",
      transition: "all 0.1s ease-in",
      '&:hover': {
        color: "#e872dc",
      },
    },
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();

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
        <Grid item className={classes.linksMenu} >
          <div className={classes.linkWrapper}>

            <a href="https://twitter.com/tomoamiri" target="_blank" rel="noopener noreferrer" className={classes.link}>About</a>
          </div>
        </Grid>
      </Grid>
    </nav >
  );
};

export default NavBar