import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import Slider from "../Modules/Slider";

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
    summaryWrapper: {
      display: "flex",
      alignItems: "center",
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
    subHeading: {
      fontSize: "24px",
      fontFamily: "IBM Plex Mono",
      fontWeight: "bolder",
      marginBottom: constants.generalUnit * 2,
    },
    imgContainer: {
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
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

      maxWidth: "300px",
      maxHeight: "470px",
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
      },
    },

  })
})

const MetaDetail: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#ddd" }}>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div>
              <p className={classes.title}>Meta-alert</p>
              <br></br>
              <p className={classes.subtitleText}>Notifications for the Metamask wallet</p>
            </div>
            <div className={classes.summaryWrapper}>
              <div className={classes.imgContainer}>
                <img src="/graphics/metaalert/meta.png" className={classes.firstMockupImg} alt="Metamask notifications design that includes snap notifications and activity notifications by Thomas Amiri" />
              </div>
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>Summary</p>
                <p className={classes.bodyText}>
                  Wallets are key web3 portals for users and their functionality will only increase as they integrate more applications. For many of these apps the wallet is the only point of contact, meaning alerts of all kinds will have to exist. I set out to imagine some of these in the Metamask browser wallet.
              </p>
                <p className={classes.bodyText}>*This is concept work that is not affiliated with the official product</p>
              </div>
            </div>
            <div className={classes.summaryWrapper}>
              <div className={classes.imgContainer}>
                <img src="/graphics/metaalert/foxImg.png" className={classes.firstMockupImg} alt="Metamask Fox Notifications Design" />
              </div>
              <div className={classes.summaryTextWrapper}>
                <p className={classes.subHeading}>Context</p>
                <p className={classes.bodyText}>
                  🎉 Metamask recently hit its 1 millionth user milestone, cementing itself as one of blockchain’s most popular gateways. As a frequent user I’ve wished for certain notifications more than once. After doing some research I discovered more demand for alerts from every kind of user in the crypto space. I also got some sense of the Metamask roadmap and its big upcoming plugin system called Snaps.
              </p>
                <p className={classes.subHeading}>Challenges</p>
                <p className={classes.bodyText}>
                  The wallet is regularly processing transactions and interacting with all kinds of dapps but this activity is rarely communicated except in network logs. User’s are left wondering about the status of transactions and other web3 events.
              </p>
              </div>
            </div>

            <Slider />
            {/* <div>
              <p className={classes.subHeading}>The Design Process</p>
              <p className={classes.bodyText}>
                I got a lot of insight from the feature discussions on the Metamask Github and was sure I wanted to keep my design aligned with the Snap plugin roadmap. This helped me differentiate between two types of alerts: system alerts and plugin alerts. The former were global to all the wallets in your Metamask, while the latter were local to a specific address.
              </p>
              <p className={classes.bodyText}>
                Next, I leveraged some well-documented Ethereum personas and created user journeys for three types of users: an artist, investor, and socializer. The user journey’s really emphasized to me the breadth of needs that needed to be accommodated in the interface. They also highlighted key opportunities for integrating alerts. I then mapped out task flows to exactly pinpoint where and when alerts should interact with the user.
              </p>
            </div>

            <p className={classes.subHeading}>Wireframes</p>
            <p className={classes.bodyText}>
              Once I established the context of alerts and their structure I hopped into wire framing. From paper sketches I worked into high fidelity mock ups. Metamask is already very compact as a browser plugin so it was a challenge to find an optimal layout without cluttering the UI or overwhelming the user.
              </p> */}
            <div>
              <p className={classes.subHeading}>Final Concept</p>
              <p className={classes.bodyText}>
                I asked a friend who was also a Metamask user to test my prototype. From this interview I learned that how I categorized the tabs was confusing and that some of the new elements were unintuitive. So I revisited my wireframes and focused on keep the existing UI more intact while creating a better sense of separation between functions.
              </p>
            </div>
          </Grid>
        </div>
      </Section>
    </div>
  )
}

export default MetaDetail