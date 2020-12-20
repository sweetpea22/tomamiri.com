import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, useHistory } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      margin: "0% 10% 0 10%",
      flexDirection: "column",
      [breakpoints.up('xl')]: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "5rem",
      [breakpoints.up('md')]: {
        minHeight: "85vh",
      },
      [breakpoints.up('lg')]: {
        justifyContent: "center",
        alignItems: "center",
      },
      "& > div": {
        [breakpoints.down('lg')]: {
          width: "100%",
        }
      },
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      [breakpoints.down('md')]: {
        width: "80%",
      }
    },
    title: {
      marginTop: "2rem",
      fontSize: "55px",
      fontWeight: "bolder",
    },
    subtitleText: {
      fontSize: "30px",
      fontWeight: "normal",
      marginBottom: constants.generalUnit * 2,
    },
    subHeading: {
      fontSize: "45px",
      fontWeight: "bold",
      marginBottom: constants.generalUnit * 2,
    },
    imgContainer: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      margin: "3rem 0",
    },
    bodyText: {
      fontSize: "28px",
      lineHeight: "38px",
      fontWeight: "normal",
      color: palette.common.black.main,
      marginBottom: constants.generalUnit * 4,
      width: "100%",
      [breakpoints.up('lg')]: {
        maxWidth: "750px",
      },
      [breakpoints.up('xl')]: {
        maxWidth: "730px",
      },
    },
    linkWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      [breakpoints.up('lg')]: {
        marginTop: "5vh",
      },
      position: "relative",
      marginBottom: "3rem",
      "& > a": {
        textDecoration: "none",
      }
    },
    link: {
      fontWeight: "normal",
      textDecoration: "none",
      fontSize: "42px",
      transition: "all 0.3s ease-out",
      "&:hover": {
        color: palette.primary.main,
      },
      "&:active": {
        color: palette.primary.light,
      },
      [breakpoints.down('md')]: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "bolder",
      }
    },
    mockupContainer: {
      display: "flex",
      maxWidth: "100vw",
      margin: "4rem 0",
      [breakpoints.down('lg')]: {
        width: "100%",
        maxWidth: "100%",
      }

    },
  })
})

const CadenciaDetail: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div style={{ display: "flex" }}>
              <img src="/graphics/posters/aphorism.png" />
              <img src="/graphics/posters/design-week1.png" />
              <img src="/graphics/posters/design-week2.png" />
              <img src="/graphics/posters/event-poster3.png" />
              <img src="/graphics/posters/film-poster.png" />
              <img src="/graphics/posters/film-poster2.png" />
              <img src="/graphics/posters/film-poster3.png" />
              <img src="/graphics/posters/music-poster.png" />
              <img src="/graphics/posters/film-poster2.png" />
              <img src="/graphics/posters/film-poster3.png" />
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default CadenciaDetail