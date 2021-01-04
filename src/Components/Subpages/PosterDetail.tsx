import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette }: ITheme) => {

  return createStyles({
    wrapper: {
      display: "flex",
      paddingTop: "10vh",
      background: "#ddd",
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
      },
      [breakpoints.up('lg')]: {
        justifyContent: "center",
        alignItems: "center",
      },

    },
    posterWrapper: {
      display: "flex",
      flexWrap: "wrap",
      [breakpoints.down('md')]: {
        flexDirection: "column",
      },
      "& > img": {
        padding: "1rem",
        [breakpoints.down('md')]: {
          width: "100%",
        }
      }
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
  })
})

const PosterDetail: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#ddd" }}>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/blob.png" alt="poster" />
              <img src="/graphics/posters/film-poster.png" alt="poster" />
            </div>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/film-poster2.png" alt="poster" />
              <img src="/graphics/posters/blaise.png" alt="poster" />
            </div>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/aphorism.png" alt="poster" />
              <img src="/graphics/posters/design-week2.png" alt="poster" />
            </div>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/eventposter.png" alt="poster" />
            </div>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/music-poster3.png" alt="poster" />
              <img src="/graphics/posters/design-week1.png" alt="poster" />
            </div>
            <div>
              <img src="/graphics/posters/event-poster.png" alt="poster" />
              <img src="/graphics/posters/music-poster2.png" alt="poster" />
            </div>
            <div className={classes.posterWrapper}>
              <img src="/graphics/posters/event-poster2.png" alt="poster" />
            </div>
          </Grid>
          <div className={classes.linkWrapper}>
            <a href='/posters'>
              <p className={classes.link}>Check out next project &gt;</p>
            </a>
          </div>
        </div>
      </Section>
    </div >
  )
}

export default PosterDetail