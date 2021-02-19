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
      alignItems: "flex-start",
      "& > img": {
        maxWidth: "60%",
        [breakpoints.down('md')]: {
          maxWidth: "100%",
        },
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
      [breakpoints.up('md')]: {
        marginTop: "5vh",
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
      maxWidth: "100%",
      marginBottom: "2rem",
      [breakpoints.down('sm')]: {
        width: "100%",
        height: "auto",
      },
      [breakpoints.up('lg')]: {
        maxWidth: "60%",
      },
    },
    smallerMockup: {
      [breakpoints.up('lg')]: {
        maxWidth: "60%",
        marginRight: "2rem",
      }
    },
    mockupNoMargin: {
      maxWidth: "100%",
      marginBottom: "1rem",
      [breakpoints.down('sm')]: {
        width: "100%",
        height: "auto",
      },
      [breakpoints.up('lg')]: {
        maxWidth: "60%",
      },
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [breakpoints.down('lg')]: {
        flexDirection: "column",
      }
    },
    flexContainerImages: {
      [breakpoints.up('lg')]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "70%",
      },
      [breakpoints.down('lg')]: {
        flexDirection: "column",
      }
    },
    youtube: {
      [breakpoints.up('lg')]: {
        marginTop: "3rem",
      }
    }
  })
})

const PaladinDetail: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#ddd" }}>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>

            <div>
              <h1 className={classes.title}>Paladin</h1>
              <br></br>
              <p className={classes.subtitleText}>A governance lending protocol</p>
            </div>
            <div className={classes.summaryWrapper}>
              <img src="/graphics/paladin/p1.png" className={classes.mockup} alt="" />
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>Summary</p>
                <p className={classes.bodyText}>
                  I had the pleasure of participating in Aave’s MarketMake hackathon for 3 weeks with a fully remote team. There’s a lot of room for improvement in DeFi governance because current participation levels are really low. Paladin was conceived as a market for investors uninterested in DAO governance to deposit their governance tokens and get additional yield. Those tokens could then be borrowed by activists who wanted more voting power on a platform, for a fee. The fantastic part about Paladin is that there’s no credit risk and therefore no collateral requirements for the borrower because the protocol delegates the voting power, i.e they never leave Paladin unless a depositor takes them out. This ensures greater capital efficiency while boosting participation.  
              </p>
              <p className={classes.subHeading}>My Role</p>
                <p className={classes.bodyText}>
                There was a project lead, financial architect and two devs on the team. I was responsible for all the project’s design. This included brand guidelines, a logo, and the final UI. </p>
              </div>
            </div>
            <div className={classes.summaryWrapper}>
            <img src="/graphics/paladin/p2.png" className={classes.mockup} alt="" />
            <div className={classes.summaryTextWrapper}>
              <p className={classes.subHeading}>The Design Process</p>
              <br></br>
              <p className={classes.bodyText}>
              For the branding I knew I wanted to work with a warmer palette because the core value proposition is about voting and participation. Also a lot of brands in DeFi opt for the cooler colours of traditional finance so I liked how an orange would stand out. 
              From my discussions with the team I was able to narrow down key qualities we wanted in the logo––a modern feel that’s abstracted but not too abstracted. I designed a few choices and then got back to the team where we decided on the lined P. 
                  </p>
            </div>
            </div>
            <div className={classes.flexContainerImages}>
              <img src="/graphics/paladin/p3.png" className={classes.mockupNoMargin} alt="" />
              <img src="/graphics/paladin/p4.png" className={classes.mockupNoMargin} alt="" />
            </div>

            <div className={classes.summaryWrapper}>
              <p className={classes.bodyText}>
              Before mocking the UI I wanted to have a good grounding of the user flows. So I researched depositor’s and borrower’s goals. They have diverging needs from the platform: managing yield and borrowing the right amount of voting power with optionality for the loan. When I started my mocks I decided to stick to established design patterns around depositing and borrowing which can get complicated in DeFi. But Paladin’s use case was straightforward enough to keep the functions tight in a minimal interface. 
              </p>
              </div>
            <iframe className={classes.youtube} title="Paladin" width="100%" height="700" src="https://www.youtube.com/embed/rFNLtpGxiZo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid>
          <div className={classes.linkWrapper}>
            <a href='/meta-alert'>
              <p className={classes.link}>Check out next project &gt;</p>
            </a>
          </div>
        </div>
      </Section>
    </div >
  )
}

export default PaladinDetail