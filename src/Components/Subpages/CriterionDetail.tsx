import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

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
    subtitleTextLight: {
      fontSize: "28px",
      lineHeight: "38px",
      fontWeight: "lighter",
      maxWidth: "630px",
      marginBottom: constants.generalUnit * 2,
    },
    imgContainer: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
      margin: "3rem 0",
    },
    foxImg: {
      position: "relative",
      left: "50%",
      transform: "translate(-50%)",
      width: "20rem",
      [breakpoints.down('lg')]: {
        left: "auto",
        transform: "translate(0)",
      },
    },
    firstMockupImg: {
      [breakpoints.up('lg')]: {
        display: "block",
      },
      display: "none",
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
    mockup: {
      maxWidth: "30%",
    },
  })
})

const CriterionDetail: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div>
              <h1 className={classes.title}>Criterion Collections</h1>
              <br></br>
              <p className={classes.subtitleText}>Improving the streaming channel’s navigation design</p>
              <div className={classes.imgContainer}>
                <img className={classes.firstMockupImg} src="/graphics/landing/criterion.png" alt="criterion mockup designed by tom amiri" />
              </div>
            </div>
            <div>
              <p className={classes.subtitleTextLight}>*This is concept work that is not affiliated with the official product</p>
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
            <div className={classes.mockupContainer}>
              <img src="/graphics/criterion/old-ui.png" className={classes.mockup} alt="" />
            </div>
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
            <div className={classes.mockupContainer}>
              <img src="/graphics/criterion/mock1.gif" className={classes.mockup} alt="" />
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/criterion/mock2.png" className={classes.mockup} alt="" />
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/criterion/mock3.png" className={classes.mockup} alt="" />
            </div>

          </Grid>
          <div className={classes.linkWrapper}>
            <Link onClick={() => redirect('/kemistry')}>
              <p className={classes.link}>Check out next project &gt;</p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default CriterionDetail