import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory } from "@chainsafe/common-components";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      background: "#ddd",
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
            <div>
              <h1 className={classes.title}>Cadencia</h1>
              <br></br>
              <p className={classes.subtitleText}>A data project for Filecoin’s hackathon</p>
              <div className={classes.imgContainer}>
                <img src="/graphics/landing/hackfs.png" alt="hackfs logo from ethglobal" />
              </div>
            </div>
            <div>
              <p className={classes.subHeading}>Summary</p>
              <p className={classes.bodyText}>
                Protocol Labs hosted a hackathon in summer 2020 for their Filecoin network. I teamed up with a developer and over one month we built out a proof-of-concept analytics tool for blockchains.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Context</p>
              <p className={classes.bodyText}>
                My teammate and I brainstormed all kinds of ideas that would leverage decentralized storage before choosing our analytics project. Permission-less blockchains are public and produce a lot of information about their networks. We thought it would be cool if users could instantly query, visualize and share analyses of this data in a user friendly way.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Challenges</p>
              <p className={classes.bodyText}>
                There’s a plethora of open APIs and datasets but it’s hard to access them since they aren’t standardized or easy to navigate if you’re a nontechnical user. Even a single query would take a lot of time to process.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>The Design Process</p>
              <p className={classes.bodyText}>
                Given the tight timeline, I had to understand some of the needs of the space, who might need something like this and scope out comparable services. I did a competitive analysis of other blockchain analytics companies and their target audiences. We decided we wanted to focus on researchers in the DeFi space. Leveraging open data about DeFi projects from The Graph, we aggregated datasets. This way users could perform simple queries and then have the results visualized in different ways. These graphs would then be shareable for others to examine.

              </p>
              <p className={classes.bodyText}>
                I also designed a dashboard that would monitor and evaluate the Filecoin network’s performance, to help users make decisions about where they wanted their data stored.
              </p>
              <p className={classes.bodyText}>
                You can take a look at the project in our demo video below.
              </p>
            </div>

            <iframe title="Cadencia Video" width="100%" height="500" src="https://www.youtube.com/embed/7sX5T9b937o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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

export default CadenciaDetail