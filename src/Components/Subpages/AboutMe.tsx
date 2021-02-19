import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";



const useMyStyles = () => {
  const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

    return createStyles({
      wrapper: {
        maxWidth: "2560px",
        display: "flex",
        background: "#121212",
        minHeight: "70vh",
        margin: "0 4%",
        padding: "10vh 0 5vh 0",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [breakpoints.up('xl')]: {
          margin: 0,
          position: "relative",
          left: "50%",
          transform: "translate(-50%)",
          minHeight: "50vh",
        },
      },
      contentContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [breakpoints.down('md')]: {
          padding: "10% 0 0 0",
          width: "100%",
        },
        [breakpoints.up('lg')]: {
          padding: "0% 5% 0 15%",
        },
        [breakpoints.up('xl')]: {
          padding: "0% 15% 0 15%",
        },
      },
      titleWrapper: {
        maxWidth: "50%",
        [breakpoints.down('lg')]: {
          maxWidth: "100%",
          textAlign: "left",
        }
      },
      bodyText: {
        fontSize: "20px",
        fontWeight: 400,
        fontFamily: "IBM Plex Mono",
        lineHeight: "28px",
        width: "100%",
        color: palette.common.white.main,
        [breakpoints.down('md')]: {
          fontSize: "16px",
          lineHeight: "32px",
        },
      },
      jumboText: {
        fontSize: "64px",
        lineHeight: "76px",
        fontWeight: 600,
        fontFamily: "Inter",
        color: palette.common.white.main,
        width: "100%",
        [breakpoints.down('sm')]: {
          fontSize: "40px",
          lineHeight: "48px",
          width: "100%",
        }
      },
      transitionGradient: {
        position: "relative",
        maxWidth: "100vw",
        marginTop: "10vh",
        zIndex: zIndex?.layer3,
        [breakpoints.down('md')]: {
          minHeight: "20vh",
        },
      }
    })
  })
  return useStyles();
}

const About: React.FC = () => {
  const classes = useMyStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={12} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
              <h1 className={classes.jumboText}>This could be the beginning of something beautiful...</h1>
              <p className={classes.bodyText}>
                When I discovered web3 I was excited to see an industry that valued autonomy, privacy, and community empowerment. I also appreciate how this space embraces experimentation and ideas that challenge the status quo.
              </p>
              <br></br>
              <p className={classes.bodyText}>
                That’s why I want to work on dapps and contribute to the success of the space because I believe users having control over their data is the future.
              </p>
              <br></br>
              <p className={classes.bodyText}>
                What sets me apart is my sensitivity to both business and user needs, understanding the roadmap while staying open-minded to feedback for better product market fit.

              </p>
            </div>
          </Grid>
          <img className={classes.transitionGradient} src="/graphics/landing/gradient1.png" alt="gradient from blue to magenta by Tom Amiri" />
        </div>
      </Section>
    </>
  )
}

export default About