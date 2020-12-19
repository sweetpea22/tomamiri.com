import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import lines from "./svg/lines.svg";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      margin: "0% 10% 0 10%",
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
      marginBottom: "5rem",
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",

    },
    imgContainer: {
      maxWidth: "80%",
    },
    bodyText: {
      fontSize: "28px",
      lineHeight: "38px",
      maxWidth: "630px",
      fontWeight: "lighter",
      [breakpoints.up('lg')]: {
        marginLeft: "5rem",
      },
    },
    workLine: {
      [breakpoints.up('lg')]: {
        position: "absolute",
        right: 50,
      },
      [breakpoints.down('lg')]: {
        right: 0,
      },
    },
  })
})

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <Grid container className={classes.imgContainer}>
              <Grid item xs={12} md={5}  >
                <img src="/graphics/landing/hand.png" alt="Hand bursting through water, pushing a blackbox out into a solid wave" />
              </Grid>
              <Grid item >
                <img className={classes.workLine} src={lines} alt="vertical line pointing to Thomas Amiri projects section" />
              </Grid>
            </Grid >
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default About