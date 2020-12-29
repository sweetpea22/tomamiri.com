import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, constants }: ITheme) => {

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
        minHeight: "85vh",
      },
      [breakpoints.up('lg')]: {
        justifyContent: "center",
        alignItems: "center",
        margin: "0 10%",

      },
      "& > div": {
        [breakpoints.down('lg')]: {
          width: "100%",
        }
      },
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
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <img src="/graphics/posters/aphorism.png" />
              <img src="/graphics/posters/design-week1.png" />
              <img src="/graphics/posters/design-week2.png" />
              <img src="/graphics/posters/event-poster2.png" />
              <img src="/graphics/posters/eventposter.png" />
              <img src="/graphics/posters/event-poster.png" />
              <img src="/graphics/posters/film-poster.png" />
              <img src="/graphics/posters/film-poster2.png" />
              <img src="/graphics/posters/music-poster2.png" />
              <img src="/graphics/posters/filmposter.png" />
              <img src="/graphics/posters/music-poster3.png" />
            </div>
          </Grid>
        </div>
      </Section>
    </div>
  )
}

export default PosterDetail