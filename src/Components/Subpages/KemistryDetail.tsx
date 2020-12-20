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
    },
    mockupContainer: {
      display: "flex",
      maxWidth: "100vw",
      margin: "4rem 0"
    },
    mockup: {
      maxWidth: "100%",
    },
    captionContainer: {
      display: "flex",
      flexDirection: "column",
      "& > p": {
        margin: "0 3rem 2rem 1rem",
        maxWidth: "300px",
        [breakpoints.down('sm')]: {
          marginLeft: "1rem",
          fontSize: "16px",
          lineHeight: "24px",
          maxWidth: "40%",
        }
      },
      "& > div": {
        width: "20%",
        height: "6px",
        marginLeft: "1rem",
        background: palette.common.black.main,
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down('sm')]: {
          marginLeft: "1rem",
          marginBottom: constants.generalUnit * 2,
        }
      },
    },

  })
})

const KemistryDetail: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>

            <div>
              <h1 className={classes.title}>Kemistry</h1>
              <br></br>
              <p className={classes.subtitleText}>A collaborative audio workspace</p>
              <div className={classes.imgContainer}>
                <img src="/graphics/kemistry/kemistry-screens.png" alt="meta-alert prototype" />
              </div>
            </div>
            <div>
              <p className={classes.subtitleTextLight}>*This is concept work</p>
              <p className={classes.subHeading}>Summary</p>
              <p className={classes.bodyText}>
                The idea behind this concept is a collaborative interface (like google docs!) for musicians with features like version control and direct payments for selling samples and sounds. They could connect seamlessly with their web3 wallet. Also files could be stored inexpensively on decentralized storage networks like Filecoin.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Context</p>
              <p className={classes.bodyText}>
                A lot of activities have shifted online and musicians and other music lovers still want to jam and make music.
              </p>
              <p className={classes.bodyText}>
                I found a similar app called Jammr that allows musicians to play simultaneously over the web. Although Jammr focuses on live perfomance, it’s similar in the way that it connects artists realtime. The app gained a lot of popularity during the beginning of the pandemic since there was a lot of demand for virtual gatherings and an absence of music oriented platforms.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Challenges</p>
              <p className={classes.bodyText}>
                Audio workstations are often complex with many robust features. Recording and composing song elements in real-time with others could easily overwhelm users. I needed to do some research and narrow the app’s scope.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>The Design Process</p>
              <p className={classes.bodyText}>
                I thought it would be key to get a better sense of the target audience and define the scope of features. Luckily I was able to interview two friends, one a professional musician and another who played for fun. I conducted the user interviews and avoided leading questions. I focused more on asking about memories and examples of times they collaborated with others. I then pitched my paper MVP and got some suggestions for the UI. A key insight was to keep the features of the workstation general so that it would be more accessible to a greater spectrum of makers. They were also enthusiastic about the idea of collaborating with musicians from all over the world.
              </p>
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/kemistry/interview-notes.png" className={classes.mockup} alt="" />
            </div>
            <div>
              <p className={classes.bodyText}>
                I knew from the interviews to keep the interface simple. Musicians should be able to quickly connect to the workstation, invite other creators, and compile sounds together with minimal friction. I began mapping out possible user flows quickly on paper until I had a basic set of requirements that would guide my designs. From there I developed more high-fidelity mock ups and started to finalize the layout.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Final Concept</p>
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/kemistry/mock1.png" className={classes.mockup} alt="" />
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/kemistry/secondlast.png" className={classes.mockup} alt="" />
            </div>
            <div className={classes.mockupContainer}>
              <img src="/graphics/kemistry/lastmock.png" className={classes.mockup} alt="" />
            </div>
          </Grid>
          <div className={classes.linkWrapper}>
            <Link onClick={() => redirect('/criterion-redesign')}>
              <p className={classes.link}>Check out next project &gt;</p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default KemistryDetail