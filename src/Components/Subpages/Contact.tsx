import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
// import emailIcon from "./svg/email.svg";
import dribIcon from "./svg/dribbble.svg";
import twitterIcon from "./svg/twitter.svg";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {

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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

    },
    img: {
      width: "100%",
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
      justifyContent: "center",
      "& > h1": {
        fontWeight: "bold",
        fontSize: "40px",
        color: palette.common.black.main,
      },
      "& > p": {
        fontWeight: "normal",
        color: palette.primary.main,
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
            <div >
              <img className={classes.img} src="/graphics/landing/phone.png" alt="3d glass phone by thomas amiri" />
            </div>
            <div className={classes.textWrapper}>
              <h1>Contact</h1>
              {/* <p><span><img src={emailIcon} alt="email icon" style={{ height: 20, width: 30, }} /></span>Email</p> */}
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