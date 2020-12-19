import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import dribIcon from "./svg/dribbble.svg";
import twitterIcon from "./svg/twitter.svg";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {
  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      margin: "0% 15% 0 15%",
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
      justifyContent: "flex-start",
      [breakpoints.up('lg')]: {
        width: "80%",
      },
      [breakpoints.up('xl')]: {
        margin: 0,
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      },
    },
    img: {
      width: 465,
      height: 360,
      [breakpoints.down('md')]: {
        
      },
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
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      "& > h1": {
        fontWeight: 400,
        fontSize: "40px",
        color: palette.common.black.main,
      },
      "& > p": {
        fontWeight: "normal",
        color: palette.common.black.main,
        marginBottom: "2rem",
        fontSize: "24px",
        lineHeight: "32px",
        maxWidth: "320px",
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
            <Grid item xs={5} lg={5}>
              <img className={classes.img} src="/graphics/landing/phone.png" alt="3d glass phone by thomas amiri" />
            </Grid>
            <div className={classes.textWrapper}>
              <h1>CONTACT</h1>
              <p>tomoamiri(at)gmail.com</p>
              <div className={classes.iconWrapper}>
                <a href="https://twitter.com/tomoamiri" target="_blank" rel="noopener noreferrer">
                  <img className={classes.icon} src={twitterIcon} alt="Twitter link" />
                </a>
                <a href="https://dribbble.com/tomoamiri" target="_blank" rel="noopener noreferrer">
                  <img className={classes.icon} src={dribIcon} alt="Dribble link" />
                </a>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Contact