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
      background: palette.common.white.main,
      height: "auto",
      width: "85%",
      display: "flex",
      alignItems: "center",
      padding: "2rem",
      margin: "2rem 0",
    },
    projectContentWrapper: {
      display: "grid",
      gridTemplateColumns: "60% 40%",
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
        fontSize: "20px",
        lineHeight: "28px",
        maxWidth: "200px",
      },
      "& > img": {
        maxHeight: "30px",

      }
    },
    projectLink: {
      transition: "all 0.3s ease-out",
      "&:hover": {
        transform: "translateY(-4px)",
      },
      "&:active": {
        color: ""
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
                <img src={fox} className={classes.projectImg} alt="Meta-alert graphic by Thomas Amiri" />
                <div className={classes.projectTextWrapper}>
                  <h1>Meta-alert</h1>
                  <p>Notifications for your favourite web3 gateway</p>
                  <Link onClick={() => redirect('/meta-alert')}>
                    <img src={pageButton} alt="Click to access page about Meta-alert" />
                  </Link>
                </div>
              </Grid>
            </div>
            {projects.map((p, index) => (
              <div className={classes.projectWrapper} key={index}>
                <Grid container className={classes.projectContentWrapper}>
                  <img src={p.imgUrl} className={classes.projectImg} alt={`${p.name} graphic by Thomas Amiri`} />
                  <div className={classes.projectTextWrapper}>
                    <h1>{p.name}</h1>
                    <p>{p.desc}</p>
                    <Link onClick={() => redirect('/meta-alert')} className={classes.projectLink}>
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