import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      background: "#ddd",

      margin: "0% 10% 0 10%",
      flexDirection: "column",

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
      fontSize: "24px",
      fontFamily: "IBM Plex Mono",
      fontWeight: "bold",
      marginBottom: constants.generalUnit,
    },
    imgContainer: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      margin: "3rem 0",
    },
    bodyText: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "normal",
      color: palette.common.black.main,
      marginBottom: constants.generalUnit * 4,
      width: "100%",
      [breakpoints.up('md')]: {
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
      fontWeight: "bolder",
      textDecoration: "none",
      fontSize: "24px",
      transition: "all 0.3s ease-out",
      color: palette.common.black.main,
      "&:hover": {
        color: palette.additional['geekblue'][6],
      },
      "&:active": {
        color: palette.additional['geekblue'][6],
      },
    },
    mockup: {
      width: "100%",
      marginBottom: "2rem",
      [breakpoints.down('sm')]: {
        width: "100%",
        height: "auto",
      },
    },
  })
})

const CriterionDetail: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{ background: "#ddd" }}>

      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div>
              <h1 className={classes.title}>Criterion Collections</h1>
              <br></br>
              <p className={classes.subtitleText}>Improving the streaming channel’s navigation design</p>
              <div className={classes.imgContainer}>
                <img src="/graphics/landing/criterion.png" alt="criterion mockup designed by tom amiri" />
              </div>
            </div>
            <div>
              <p className={classes.bodyText}>*This is concept work that is not affiliated with the official product</p>
              <p className={classes.subHeading}>Summary</p>
              <p className={classes.bodyText}>
                The Criterion Channel has some of the best content for streaming but navigating its UI is frustrating. So I saw an opportunity to optimize content discovery and highlight the channel’s amazing curation with a reimagined UI. Ideally, a change like this would be A/B tested against the existing interface while comparing the size of user’s watchlists.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Context</p>
              <p className={classes.bodyText}>
                Criterion has been preserving important films from around the world since 1984. When I found out they were releasing a streaming service, I quickly subscribed and got access to an amazing selection of films. Yet, there was a lot of friction when it came to discovering new content.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Challenges</p>
              <p className={classes.bodyText}>
                The existing browse page offers identical rows of collections which makes it hard to know where to start searching. Themed collections are indistinguishable from more general categories like “continue watching” and “my list”. It’s hard to get a quick sense of the depth of content––there’s the option to “view all” but this takes you to another page. Instead of signalling to me different kinds of content, the rows register as noise.
              </p>
            </div>
            <img src="/graphics/criterion/old-ui.png" className={classes.mockup} alt="Current criterion UI design as of Dec 2019" />
            <div>
              <p className={classes.subHeading}>The Design Process</p>
              <p className={classes.bodyText}>
                I studied the Channel and started to comb through its existing pages. I was surprised to see all kinds of collections in the home screen that I hadn’t paid much attention to before. A few minutes in, my watchlist grew exponentially. The Criterion Channel is different from a service like Netflix. The focus is quality over quantity and this is organized through its collections.
              </p>
              <p className={classes.bodyText}>
                My immediate aim in the redesign was to condense the layout of the collections. I wanted to balance compactness with discoverability. Another constraint I had to keep in mind was that the design had to make sense across devices so that users were getting a consistent experience.
              </p>
              <p className={classes.bodyText}>
                I experimented with grids, drop-downs, and different kinds of tile components. These were all unsatisfactory. Finally I realized cards would combine a lot of the goals. They would have eye-catching pictures, compact the layout, and work well in a responsive environment.
              </p>
            </div>
            <img src="/graphics/criterion/mock1.gif" className={classes.mockup} alt="" />
            <img src="/graphics/criterion/mock2.png" className={classes.mockup} alt="" />
            <img src="/graphics/criterion/mock3.png" className={classes.mockup} alt="" />

          </Grid>
          <div className={classes.linkWrapper}>
            <a href='/cadencia'>
              <p className={classes.link}>Check out next project &gt;</p>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default CriterionDetail