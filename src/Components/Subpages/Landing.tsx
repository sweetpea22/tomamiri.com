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
        minHeight: "70vh",
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
          minHeight: "50vh",
        },
      },
      titleWrapper: {
        maxWidth: "100%",
      },
      titleText: {
        fontSize: "36px",
        fontWeight: 400,
        fontFamily: 'IBM Plex Sans Condensed',
        lineHeight: "47px",
        width: "100%",
        color: palette.primary.main,
        [breakpoints.down('md')]: {
          fontSize: "30px",
          lineHeight: "40px",
        },
      },
      contentContainer: {
        position: "relative",
        [breakpoints.up('lg')]: {
          padding: "5% 15% 0 15%",
        },
        [breakpoints.up('xl')]: {
          padding: "5% 25% 0 25%",
        },
      },
      jumboText: {
        fontSize: "64px",
        lineHeight: "80px",
        fontWeight: "bold",
        background: "linear-gradient(45deg,  #01FF85,#038CFD, #DC2430, #7B4397, #F0CB35)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "200% 300%",
        animation: `$gradientFill 13s linear infinite`,
        "& > span": {
          fontWeight: 400,
        },
      },

      "@keyframes gradientFill": {
        "0%": {
          backgroundPosition: "0% 60%",
        },
        "50%": {
          backgroundPosition: "100% 0%",

        },
        "100%": {
          backgroundPosition: "0% 60%",

        }
      },

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
              <p className={classes.titleText}>
                Hey, I’m Tom. I’m a self-taught designer with research, UX, communication, and strategy skills. I’m looking to join a fast-paced team disrupting some corner of the universe. I’m passionate about:
              </p>
              <h1 className={classes.jumboText}>Web3<span>/</span>Ethereum<span>/</span>Product Design</h1>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing