import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory } from "@chainsafe/common-components";
import fox from "./svg/fox.svg";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      paddingTop: "10vh",
      margin: "0% 10% 0 10%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [breakpoints.up('lg')]: {
        margin: "0 20% 0 10%",
      },
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingBottom: "5rem",
      [breakpoints.up('md')]: {
        minHeight: "85vh",
      }

    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "60%",
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
      fontSize: "30px",
      lineHeight: "40px",
      fontWeight: "lighter",
      maxWidth: "630px",
      marginBottom: constants.generalUnit * 2,
    },
    imgContainer: {
      display: "flex",
      justifyItems: "center",
      width: "100%",
      alignItems: "center",
      position: "relative",
      left: "50%",
      transform: "translate(-50%)",
      margin: "5rem 0",
    },
    img: {
      position: "relative",
      left: "25%",
      transform: "translate(-25%)",
      width: "30%",
    },
    bodyText: {
      // fontSize: "36px",
      // lineHeight: "48px",
      // maxWidth: "900px",
      fontSize: "20px",
      lineHeight: "30px",
      maxWidth: "600px",
      fontWeight: "normal",
      color: palette.common.black.main,
      marginBottom: constants.generalUnit * 4,
    },
    linkWrapper: {
      [breakpoints.up('lg')]: {
        marginTop: "10vh",
        left: "60%",
      },
      position: "relative",
      marginBottom: "5rem",
    },
    link: {
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "24px",
      transition: "all 0.3s ease-out",
      "&:hover": {
        color: palette.primary.main,
      },
      "&:active": {
        color: palette.primary.light,
      },
    },
    mock: {
      width: "100%",
    }
  })
})

const MetaDetail: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div>
              <h1 className={classes.title}>Meta-alert</h1>
              <p className={classes.subtitleText}>Notifications for the Metamask wallet</p>
            </div>
            <div className={classes.imgContainer}>
              <img src={fox} className={classes.img} alt="meta-alert logo, notifications for metamask by thomas amiri" />
            </div>
            <div>
              <p className={classes.subtitleTextLight}>*This is concept work that is not affiliated with the official product</p>
              <p className={classes.subHeading}>Summary</p>
              <p className={classes.bodyText}>
                Wallets are key web3 portals for users and their functionality will only increase as they integrate more applications. For many of these apps the wallet is the only point of contact, meaning alerts of all kinds will have to exist. I set out to imagine some of these in the Metamask browser wallet.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Context</p>
              <p className={classes.bodyText}>
                Metamask recently hit its 1 millionth user milestone, cementing itself as one of blockchain’s most popular gateways. As a frequent user I’ve wished for certain notifications more than once. After doing some research I discovered more demand for alerts from every kind of user in the crypto space. I also got some sense of the Metamask roadmap and its big upcoming plugin system called Snaps.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>Challenges</p>
              <p className={classes.bodyText}>
                The wallet is regularly processing transactions and interacting with all kinds of dapps but this activity is rarely communicated except in network logs. User’s are left wondering about the status of transactions and other web3 events.
              </p>
            </div>
            <div>
              <p className={classes.subHeading}>The Design Process</p>
              <p className={classes.bodyText}>
                I got a lot of insight from the feature discussions on the Metamask Github and was sure I wanted to keep my design aligned with the Snap plugin roadmap. This helped me differentiate between two types of alerts: system alerts and plugin alerts. The former were global to all the wallets in your Metamask, while the latter were local to a specific address.
              </p>
              <p className={classes.bodyText}>
                Next, I leveraged some well-documented Ethereum personas and created user journeys for three types of users: an artist, investor, and socializer. The user journey’s really emphasized to me the breadth of needs that needed to be accommodated in the interface. They also highlighted key opportunities for integrating alerts. I then mapped out task flows to exactly pinpoint where and when alerts should interact with the user.
              </p>
            </div>
            <div>
              <img src="/graphics/meta-alert/personas.png" className={classes.mock} alt="" />
            </div>
            <div>
              <img src="/graphics/meta-alert/task-flows.png" className={classes.mock} alt="" />
            </div>
            <div>
              <p className={classes.bodyText}>
                Once I established the context of alerts and their structure I hopped into wire framing. From paper sketches I worked into high fidelity mock ups. Metamask is already very compact as a browser plugin so it was a challenge to find an optimal layout without cluttering the UI or overwhelming the user.
              </p>
            </div>
            <div>
              <img src="/graphics/meta-alert/wireframes.png" className={classes.mock} alt="" />
            </div>
            <p className={classes.bodyText}>
              I asked a friend who was also a Metamask user to test my prototype. From this interview I learned that how I categorized the tabs was confusing and that some of the new elements were unintuitive. So I revisited my wireframes and focused on keep the existing UI more intact while creating a better sense of separation between functions.
              </p>

            <div>
              <img src="/graphics/meta-alert/mock1.png" className={classes.mock} alt="" />
            </div>
            <div>
              <img src="/graphics/meta-alert/mock2.png" className={classes.mock} alt="" />
            </div>
          </Grid>
          <div className={classes.linkWrapper}>
            <Link onClick={() => redirect('/meta-alert')}>
              <p className={classes.link}>Check out next project &gt;</p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}

export default MetaDetail