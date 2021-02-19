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
          padding: "0% 5% 0 5%",
        },
        [breakpoints.up('xl')]: {
          padding: "0% 10% 0 10%",
        },
      },
      titleWrapper: {
        maxWidth: "80%",
        [breakpoints.down('lg')]: {
          maxWidth: "100%",
          textAlign: "left",
        }
      },
      headshotWrapper: {
        marginTop: "4rem",
        maxWidth: "30%",
        [breakpoints.down(2200)]: {
          maxWidth: "33%",
          position: "absolute",
          top: "5%",
          right: "10%",
        },
        [breakpoints.down('sm')]: {
          display: "none",
        }
      },
      bodyText: {
        fontSize: "24px",
        fontWeight: 400,
        fontFamily: "IBM Plex Mono",
        lineHeight: "32px",
        width: "80%",
        color: palette.common.white.main,
        [breakpoints.down(2200)]: {
          maxWidth: 1000,
        },
        [breakpoints.down('md')]: {
          fontSize: "16px",
          lineHeight: "32px",
        },
      },
      jumboText: {
        fontSize: "120px",
        lineHeight: "125px",
        fontWeight: 600,
        fontFamily: "Inter",
        color: palette.common.white.main,
        width: "100%",
        [breakpoints.down(2200)]: {
          fontSize: "80px",
          lineHeight: "80px",
          width: "80%",
        },
        [breakpoints.down('md')]: {
          fontSize: "40px",
          lineHeight: "48px",
          width: "100%",
        }
      },
      transitionGradient: {
        position: "relative",
        maxWidth: "100vw",
        zIndex: zIndex?.layer3,
        [breakpoints.down('lg')]: {
          bottom: 0,
        },
        [breakpoints.down('md')]: {
          minHeight: "35vh",
        },
        [breakpoints.up('xl')]: {
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "auto",
        }
      }
    })
  })
  return useStyles();
}

const Landing: React.FC = () => {
  const classes = useMyStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={12} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
              <h1 className={classes.jumboText}>Web3</h1>
              <h1 className={classes.jumboText}>Defi</h1>
              <h1 className={classes.jumboText}>Product Design</h1>
              <p className={classes.bodyText}>
                Hey, I’m Tom. I’m a Toronto-based UI designer with research, UX, communication, and strategy skills. I’m looking to join a fast-paced team in the blockchain ecosystem disrupting some corner of the universe.
              </p>
            </div>
            <div className={classes.headshotWrapper}>
              <img src="/graphics/landing/headshot.png" alt="Thomas Amiri" />
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing