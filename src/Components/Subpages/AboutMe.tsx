import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory } from "@chainsafe/common-components";
import Contact from "./Contact";

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
      [breakpoints.up('xl')]: {
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      },
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      maxHeight: "100vh",
      paddingBottom: "5rem",
      [breakpoints.up('md')]: {
        minHeight: "85vh",
      },
      "& > img": {
        width: "auto",
        height: 411,
      },
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      [breakpoints.up('lg')]: {
        marginRight: "3rem",
      },
    },
    title: {
      marginTop: "2rem",
    },
    imgContainer: {
      maxWidth: "80%",
    },
    bodyText: {
      fontSize: "28px",
      lineHeight: "38px",
      maxWidth: "630px",
      fontWeight: "lighter",
      marginBottom: constants.generalUnit * 4,
    },
    link: {
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "30px",
      transition: "all 0.3s ease-out",
      "&:hover": {
        color: palette.primary.main,
      },
      "&:active": {
        color: palette.primary.light,
      },
    },
  })
})

const AboutMe: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container className={classes.contentContainer}>
            <div className={classes.textWrapper}>
              <h1 className={classes.title}>About Me</h1>
              <p className={classes.bodyText}>
                When I discovered web3 I was excited to see an industry that valued autonomy, privacy, and community empowerment. I also appreciate how this space embraces experimentation and ideas that challenge the status quo.
              </p>
              <p className={classes.bodyText}>
                That’s why I want to work on dapps that upend legacy apps because I know in the long run web3 experiences will best web2.
              </p>
              <p className={classes.bodyText}>
                What sets me apart is my sensitivity to both business and user needs, understanding the roadmap while staying open-minded to feedback for better product market fit.
              </p>
              <Link onClick={() => redirect('/meta-alert')}>
                <p className={classes.link}>Check out my work</p>
              </Link>
            </div>
            <img src="/graphics/about/portrait.jpg" alt="Thomas Amiri Product designer" />
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default AboutMe