import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, Link, useHistory, } from "@chainsafe/common-components";
import pageButton from "./svg/pagebutton.svg";
import projects from "./projects";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
      margin: "0",
      background: "#ddd",
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
    projectWrapper: {
      height: "auto",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      padding: "2rem",
      margin: "2rem 0",
      [breakpoints.down('md')]: {
        width: "100%",
        maxWidth: "100vw",
        flexDirection: "column",
      },
    },
    projectContentWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "0 10%",
    },
    projectTextWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      "& > p": {
        fontSize: "20px",
        lineHeight: "30px",
        fontFamily: "IBM Plex Mono",
      },
    },
    projectTitle: {
      fontSize: "100px",
      fontWeight: "bold",
      color: palette.common.black.main,
      "& > span": {
        marginLeft: constants.generalUnit * 4,
        width: 20, height: 20,
      }

    },
    projectLink: {
      transition: "all 0.3s ease-out",
      "&:hover": {
        transform: "translateY(-4px)",
      },
      "&:active": {
        color: palette.primary.light,
      },
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
          <Grid container xs={12} className={classes.contentContainer}>
            {projects.map((p, index) => (
              <div className={classes.projectWrapper} key={index}>
                <Grid container className={classes.projectContentWrapper}>
                  <div className={classes.projectTextWrapper}>
                    <p>{p.desc}</p>
                    <h1 className={classes.projectTitle}>
                      {p.name}
                      <span>
                        <Link onClick={() => redirect(p.pageUrl)} >
                          <img src={pageButton} className={classes.projectLink} alt={`Click to access page about ${p.name}`} />
                        </Link>
                      </span>
                    </h1>
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