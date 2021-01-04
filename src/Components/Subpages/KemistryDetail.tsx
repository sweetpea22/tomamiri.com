import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      background: "#ddd",
      paddingTop: "10vh",
      margin: "0% 10% 0 10%",
      flexDirection: "column",
      [breakpoints.up('lg')]: {
        margin: "0 10% 0 10%",
      },
      [breakpoints.up('xl')]: {
        justifyContent: "center",
      }
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "5rem",
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
      fontWeight: "bold",
      fontFamily: "IBM Plex Mono",
      marginBottom: constants.generalUnit * 2,
    },
    summaryWrapper: {
      display: "flex",
      alignItems: "center",
      "& > img": {
        maxWidth: "60%",
        [breakpoints.down('md')]: {
          maxWidth: "100%",
        }
      },
      marginTop: constants.generalUnit * 8,
      [breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    summaryTextWrapper: {
      marginLeft: constants.generalUnit * 6,
      maxWidth: "60%",
      [breakpoints.down("md")]: {
        marginLeft: 0,
        maxWidth: "100%",
        marginTop: constants.generalUnit * 3,
      }
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
      [breakpoints.up('lg')]: {
        maxWidth: "750px",
      },
      [breakpoints.up('xl')]: {
        maxWidth: "730px",
      }
    },
    linkWrapper: {
      [breakpoints.up('lg')]: {
        marginTop: "10vh",
        display: "flex",
        justifyContent: "flex-end",
      },
      position: "relative",
      marginBottom: "5rem",
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

const KemistryDetail: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#ddd" }}>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>

            <div>
              <h1 className={classes.title}>Kemistry</h1>
              <br></br>
              <p className={classes.subtitleText}>A collaborative audio workspace</p>
            </div>
            <div className={classes.summaryWrapper}>
              <img src="/graphics/kemistry/mock1.png" alt="Collaborative music creation with support of cryptocurrency by Thomas Amiri" />
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>Summary</p>
                <p className={classes.bodyText}>
                  The idea behind this concept is a collaborative interface (like google docs!) for musicians with features like version control and direct payments for selling samples and sounds. They could connect seamlessly with their web3 wallet. Also files could be stored inexpensively on decentralized storage networks like Filecoin.
              </p>
                <p className={classes.bodyText}>*This is concept work</p>
              </div>
            </div>
            <div className={classes.summaryWrapper}>
              <img src="/graphics/kemistry/screens2.png" alt="Collaborative music creation with support of cryptocurrency by Thomas Amiri" />
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>Context</p>
                <p className={classes.bodyText}>
                  A lot of activities have shifted online and musicians and other music lovers still want to jam and make music.
              </p>
                <p className={classes.bodyText}>I found a similar app called Jammr that allows musicians to play simultaneously over the web, although it focuses on live performance. The app gained a lot of popularity during the beginning of the pandemic since there was a lot of demand for virtual gatherings and an absence of music oriented platforms.</p>
                <p className={classes.subHeading}>Challenges</p>
                <p className={classes.bodyText}>
                  Audio workstations are often complex with many robust features. Recording and composing song elements in real-time with others could easily overwhelm users. I needed to do some research and narrow the app’s scope.</p>
              </div>
            </div>
            <div className={classes.summaryWrapper}>
              <img src="/graphics/kemistry/interview-notes.png" alt="Yellow and blue stickies on a table" />
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>The Design Process</p>
                <p className={classes.bodyText}>
                  I thought it would be key to get a better sense of the target audience and define the scope of features. Luckily I was able to interview two friends, one a professional musician and another who played for fun. I conducted the user interviews and avoided leading questions. I focused more on asking about memories and examples of times they collaborated with others.
                  </p>
                <p className={classes.bodyText}>I then pitched my paper MVP and got some suggestions for the UI. A key insight was to keep the features of the workstation general so that it would be more accessible to a greater spectrum of makers. They were also enthusiastic about the idea of collaborating with musicians from all over the world.</p>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className={classes.summaryTextWrapper}>
              <p className={classes.subHeading}>Final Concept</p>
              <br></br>
              <p className={classes.bodyText}>
                The main work space has multiple arrangement areas to isolate audio channels. The chat box could be draggable to maximize fluid communication between collaborators. In the profile page, easily toggle projects as private/public and get a view of friend’s activity. Upload samples and sounds to Soundstock and exchange via your go-to stable coin.
                  </p>
            </div>
            <img src="/graphics/kemistry/secondlast.png" className={classes.mockup} alt="" />
            <img src="/graphics/kemistry/lastmock.png" className={classes.mockup} alt="" />

          </Grid>
          <div className={classes.linkWrapper}>
            <a href='/criterion-redesign'>
              <p className={classes.link}>Check out next project &gt;</p>
            </a>
          </div>
        </div>
      </Section>
    </div >
  )
}

export default KemistryDetail