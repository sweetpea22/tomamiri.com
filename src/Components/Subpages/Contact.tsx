import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import dribIcon from "./svg/drib.svg";
import twitterIcon from "./svg/twitter.svg";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      margin: "0% 5%",
      justifyContent: "center",
      alignItems: "center",
      [breakpoints.down('md')]: {
        padding: 0,
        margin: 0,
      }
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [breakpoints.up('lg')]: {
        width: "100%",
      },
      [breakpoints.down('xl')]: {
        justifyContent: "flex-start",
      },
      [breakpoints.down('md')]: {
        paddingTop: "10vh",
      },
    },
    img: {
      maxWidth: "100%",
      [breakpoints.down('md')]: {
        width: "100%",
        height: "auto",
      },
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      [breakpoints.down('md')]: {
        marginLeft: constants.generalUnit * 2,
      },
      "& > h1": {
        fontWeight: 700,
        fontSize: "50px",
        color: palette.common.white.main,
        [breakpoints.down('lg')]: {
          fontSize: "24px",
          fontWeight: "bolder",
        },
        [breakpoints.down('sm')]: {
          fontSize: "16px",
          fontWeight: "bolder",
        },
        [breakpoints.up('xl')]: {
          fontSize: "74px",
          fontWeight: "bolder",
        }
      },
      "& > p": {
        fontWeight: "normal",
        fontFamily: "IBM Plex Mono",
        color: palette.common.white.main,
        fontSize: "24px",
        lineHeight: "32px",
        maxWidth: "320px",
        [breakpoints.down('md')]: {
          fontSize: "16px",
        },
        "& > span": {
          marginRight: constants.generalUnit / 2,
        }
      },
    },
    iconWrapper: {
      display: "flex",
      flexDirection: "row",
    },
    icon: {
      height: "30px",
      marginRight: constants.generalUnit * 2,
      transition: "all 0.3s ease-out",
      "&:hover": {
        transform: "translateY(-4px)",
      }
    },

  })
})

const Contact: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <Grid item xs={3} xl={2}>
              <img className={classes.img} src="/graphics/landing/phone.png" alt="3d glass phone by thomas amiri" />
            </Grid>
            <Grid item xs={5} className={classes.textWrapper}>
              <p>Drop me a line</p>
              <h1>tomoamiri(at)gmail.com</h1>
              <div className={classes.iconWrapper}>
                <a href="https://twitter.com/tomoamiri" target="_blank" rel="noopener noreferrer">
                  <img className={classes.icon} src={twitterIcon} alt="Twitter link" />
                </a>
                <a href="https://dribbble.com/tomoamiri" target="_blank" rel="noopener noreferrer">
                  <img className={classes.icon} src={dribIcon} alt="Dribble link" />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Contact