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
      bodyText: {
        fontSize: "24px",
        fontWeight: 400,
        fontFamily: "IBM Plex Mono",
        lineHeight: "32px",
        width: "50%",
        color: palette.common.white.main,
        [breakpoints.down('md')]: {
          fontSize: "30px",
          lineHeight: "40px",
          textAlign: "center",
        },
      },
      contentContainer: {
        position: "relative",
        [breakpoints.down('md')]: {
          padding: "10% 0 0 0",
          width: "100%",
        },
        [breakpoints.up('lg')]: {
          padding: "0% 5% 0 5%",
        },
        [breakpoints.up('xl')]: {
          padding: "5% 25% 0 25%",
        },
      },
      jumboText: {
        fontSize: "120px",
        lineHeight: "125px",
        fontWeight: 600,
        fontFamily: "Inter",
        color: palette.common.white.main,
        "& > span": {
          fontWeight: 400,
        },
        [breakpoints.down('md')]: {
          fontSize: "36px",
          lineHeight: "45px",
          width: "100%",
          textAlign: "center",
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
              <h1 className={classes.jumboText}>Web3</h1>
              <h1 className={classes.jumboText}>Ethereum</h1>
              <h1 className={classes.jumboText}>Product Design</h1>
              <p className={classes.bodyText}>
                Hey, I’m Tom. I’m a Toronto-based UI designer with research, UX, communication, and strategy skills. I’m looking to join a fast-paced team in the blockchain ecosystem disrupting some corner of the universe.
              </p>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing