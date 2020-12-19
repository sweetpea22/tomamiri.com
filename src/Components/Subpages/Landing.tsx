import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      margin: "0 4%",
      paddingTop: "10vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [breakpoints.up('xl')]: {
        margin: 0,
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      },
    },
    titleWrapper: {
      maxWidth: "100%",
    },
    titleText: {
      fontSize: "80px",
      fontWeight: "bold",
      fontFamily: 'IBM Plex Sans Condensed',
      lineHeight: "96px",
      width: "100%",
      color: palette.primary.main,
      [breakpoints.down('md')]: {
        fontSize: "48px",
        lineHeight: "64px",
      },
    },
    cursiveContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      [breakpoints.up('lg')]: {
        marginTop: "3%",
      }

    },
    contentContainer: {
      position: "relative",
      [breakpoints.up('lg')]: {
        padding: "5% 15% 0 15%",
      },
      [breakpoints.up('xl')]: {
        padding: "5% 15% 0 15%",
      },
    },
    introWrapper: {
      position: "relative",
      top: 100,
      left: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      marginLeft: "6.75rem",
    },
    img: {
      maxWidth: "300px",
    },
    descriptionWrapper: {
      height: 250,
      width: 306,
      background: palette.secondary.main,
      position: "relative",
      [breakpoints.up('lg')]: {
        top: -120,
        left: 265,
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      "& > div": {
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      }
    },
    bodyText: {
      color: palette.common.black.main,
      fontSize: "30px",
      marginBottom: "1.5rem",
    },

  })
})

const Landing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={12} className={classes.contentContainer}>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing