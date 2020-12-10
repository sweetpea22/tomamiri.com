import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";


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
      margin: "10vh",
      display: "flex",
      [breakpoints.down('md')]: {
        margin: "2vh 0",
        paddingTop: "5vh",
      },
      [breakpoints.up('xl')]: {
        maxWidth: "1200px",
        margin: "10vh 0",
      },
      [breakpoints.up('3800')]: {
        maxWidth: "1450px",
        margin: "10vh 0",
      }
    },
    text: {
      fontSize: "64px",
      fontWeight: "bold",
      fontFamily: 'IBM Plex Sans Condensed',
      lineHeight: "80px",
      color: palette.common.black.main,
      [breakpoints.down('md')]: {
        fontSize: "48px",
        lineHeight: "64px",
      },
      [breakpoints.down('sm')]: {
        fontSize: "40px",
        lineHeight: "60px",
      }
    },
    taglineContainer: {
      [breakpoints.up('lg')]: {
        padding: "0 10% 0 10%",
      },
      [breakpoints.up('xl')]: {
        padding: "0 15% 0 15%",
      },
    },
    taglineWrapper: {
      [breakpoints.down('md')]: {
        width: "100%",
        padding: constants.generalUnit,
      }
    },
    imgWrapper: {
      [breakpoints.up('xl')]: {
        display: "flex",
        alignItems: "flex-end",
      }
    },
    img: {
      maxWidth: "300px",
    }
  })
})

const Landing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <div className={classes.titleWrapper}>
            <p className={classes.text}>Thomas Amiri</p>
          </div>
          <Grid container xs={12} className={classes.taglineContainer}>
            <Grid item xs={12} md={4} xl={3} className={classes.imgWrapper}>
            </Grid>
            <Grid item xs={12} md={8} xl={7} className={classes.taglineWrapper}>
              <p className={classes.text}><span>Product Designer</span></p>
            </Grid>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Landing