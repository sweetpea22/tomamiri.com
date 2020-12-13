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
      marginBottom: "5rem",
    },
    contentContainer: {
      position: "relative",
    },
    bodyText: {
      fontSize: "28px",
      maxWidth: "700px",
    },

  })
})

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={8} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
              <p className={classes.bodyText}>
                I’m a self-taught designer with research, design, communication, and strategy skills. I’m looking to join a fast-paced team disrupting some corner of the universe.
              </p>
            </div>
            <Grid item xs={12} lg={8} >
              <img src="/graphics/landing/hand.png" alt="Hand bursting through water, pushing a blackbox out into a solid wave" />
            </Grid>
            <Grid item xs={4} >
              <img src={lines} alt="vertical line pointing to Thomas Amiri projects section" />
            </Grid>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default About