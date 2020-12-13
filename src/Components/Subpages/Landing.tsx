import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import cursive from "./svg/cursive.svg";
import arrow from "./svg/arrow.svg";


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
      [breakpoints.up('lg')]: {
        // marginLeft: "6rem",
      }
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
      [breakpoints.down('sm')]: {
        fontSize: "40px",
        lineHeight: "60px",
      }
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
    whiteSquare: {
      background: palette.secondary.main,
      height: 250,
      width: 306,
      left: "18%",
      top: 120,
      position: "absolute",
      zIndex: zIndex?.background,
    },
    darkSquare: {
      background: palette.common.black.main,
      height: 250,
      width: 306,
      position: "absolute",
      [breakpoints.up('lg')]: {
        marginTop: "15rem",
        left: "45rem",
      },
      zIndex: zIndex?.background,
      [breakpoints.up('xl')]: {
        left: "49rem",
      },
      [breakpoints.down('lg')]: {
        display: "none",
      },
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
            <div className={classes.whiteSquare}></div>
            <div className={classes.darkSquare}></div>
            <Grid item xs={12} lg={5} className={classes.introWrapper}>
              <div className={classes.titleWrapper}>
                <p className={classes.titleText}><span>Hey, I'm Tom</span></p>
              </div>
              <div className={classes.cursiveContainer} >
                <img src={cursive} alt="Some things I'm passionate about" style={{ width: "80%" }} />
                <img src={arrow} alt="hand-drawn arrow" />
                <div className={classes.descriptionWrapper}>
                  <div>
                    <p className={classes.bodyText}>Web3</p>
                    <p className={classes.bodyText}>Ethereum</p>
                    <p className={classes.bodyText}>Product Design</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <img src="/graphics/landing/portrait.jpg" />
            </Grid>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing