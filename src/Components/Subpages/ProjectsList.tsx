import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import smallPageButton from "./svg/smallPageButton.svg";
import projects from "./projects";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

  return createStyles({
    wrapper: {
      maxWidth: "2560px",
      display: "flex",
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
      padding: "2.3rem 0",
      "&:first-of-type": {
        background: `url("/graphics/landing/project1.png")`,
      },
      "&:nth-of-type(2)": {
        background: `url("/graphics/landing/project2.png")`,

      },
      "&:nth-of-type(3)": {
        background: `url("/graphics/landing/project3.png")`,

      },
      "&:nth-of-type(4)": {
        background: `url("/graphics/landing/project4.png")`,
      },

    },
    projectContentWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      margin: "3% 10% 0 10%",
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
        color: palette.common.white.main,

      },
    },
    projectTitle: {
      fontSize: "100px",
      lineHeight: "115px",
      fontWeight: 600,
      fontFamily: "Inter",
      cursor: "pointer",
      marginTop: constants.generalUnit,
      transition: "all 0.5s ease-out",
      "& > span": {
        marginLeft: constants.generalUnit * 5,
        [breakpoints.down('lg')]: {
          display: "none",
        },
      },
      [breakpoints.down('lg')]: {
        fontSize: "60px",
        lineHeight: "72px",
      },
      [breakpoints.down('sm')]: {
        fontSize: "45px",
        lineHeight: "55px",
      },
      color: palette.common.white.main,
      "&:hover": {
        color: palette.common.black.main,
      },
      "&:focus": {
        color: palette.common.black.main,
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
    }
  })
})

const ProjectsList: React.FC = () => {
  const classes = useStyles();
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
                    <a href={`${p.pageUrl}`}>
                      <h1 className={classes.projectTitle}>
                        {p.name}
                        <span>
                          <a href={`/${p.pageUrl}`} >
                            <img src={smallPageButton} className={classes.projectLink} alt={`Click to access page about ${p.name} by Tom Amiri`} />
                          </a>
                        </span>
                      </h1>
                    </a>
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