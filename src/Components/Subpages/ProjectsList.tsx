import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory, } from "@chainsafe/common-components";
import fox from "./svg/fox.svg";
import pageButton from "./svg/page-button.svg";
import projects from "./projects";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      margin: "0",
      paddingTop: "10vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [breakpoints.up('xl')]: {
        margin: 0,
        position: "relative",
        left: "50%",
        transform: "translate(-50%)",
      },
    },
    contentContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    bodyText: {
      fontSize: "28px",
      lineHeight: "38px",
      maxWidth: "630px",
      fontWeight: "lighter",
      [breakpoints.up('lg')]: {
        marginLeft: "5rem",
      },
    },
    projectWrapper: {
      background: palette.secondary.main,
      height: "auto",
      width: "85%",
      display: "flex",
      alignItems: "center",
      padding: "2rem",
      margin: "2rem 0",
      [breakpoints.down('md')]: {
        width: "100%",
        maxWidth: "100vw",
        flexDirection: "column",
      }
    },
    projectContentWrapper: {
      display: "grid",
      gridTemplateColumns: "60% 40%",
      [breakpoints.down('md')]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }
    },
    projectImg: {
      maxWidth: "250px",
      width: "250px",
      justifySelf: "center",
    },
    projectTextWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      "& > h1": {
        fontWeight: "bold",
        color: palette.common.black.main,
      },
      "& > p": {
        fontWeight: "lighter",
        marginBottom: "2rem",
        fontSize: "24px",
        lineHeight: "32px",
        maxWidth: "320px",
      },
    },
    projectLink: {
      transition: "all 0.3s ease-out",
      "&:hover": {
        transform: "translateY(-4px)",
      },
      "&:active": {
        color: palette.primary.light,
      },
      "& > img": {
        maxHeight: "30px",
        width: "30px",
        height: "30px",
      }
    }
  })
})

const ProjectsList: React.FC = () => {
  const classes = useStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={8} className={classes.contentContainer}>
            <div className={classes.projectWrapper} >
              <Grid container className={classes.projectContentWrapper}>
                <div className={classes.projectTextWrapper}>
                  <h1>Meta-alert</h1>
                  <p>Notifications for your favourite web3 gateway</p>
                  <Link onClick={() => redirect('/meta-alert')} className={classes.projectLink}>
                    <img src={pageButton} alt="Click to access page about Meta-alert" />
                  </Link>
                </div>
              </Grid>
            </div>
            {projects.map((p, index) => (
              <div className={classes.projectWrapper} key={index}>
                <Grid container className={classes.projectContentWrapper}>
                  <div className={classes.projectTextWrapper}>
                    <p>{p.desc}</p>
                    <h1>{p.name}</h1>
                    <Link onClick={() => redirect(p.pageUrl)} className={classes.projectLink}>
                      <img src={pageButton} alt={`Click to access page about ${p.name}`} />
                    </Link>
                  </div>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default ProjectsList