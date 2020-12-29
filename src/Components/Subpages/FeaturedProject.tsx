import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, useHistory, Link } from "@chainsafe/common-components";
import pageButton from "./svg/smallPageButton.svg";



const useMyStyles = () => {
  const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

    return createStyles({
      wrapper: {
        display: "flex",
        background: "#ddd",
        margin: "0",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [breakpoints.up('xl')]: {
          margin: 0,
          position: "relative",
          left: "50%",
          transform: "translate(-50%)",
          minHeight: "50vh",
        },
      },
      contentContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [breakpoints.down('md')]: {
          width: "100%",
        },
        [breakpoints.up('lg')]: {
          padding: 0,
        },
        [breakpoints.up('xl')]: {
          padding: 0,
        },
      },
      titleWrapper: {
        maxWidth: "50%",
        marginLeft: "5%",
        [breakpoints.down('lg')]: {
          marginTop: "5vh",
          maxWidth: "100%",
        }
      },
      imgWrapper: {
        maxWidth: "40%",
        "& > img": {
          position: "relative",
          right: 0,
          width: "100%",
        },
        [breakpoints.down('md')]: {
          display: "none",
        }
      },
      bodyText: {
        fontSize: "20px",
        fontWeight: 400,
        fontFamily: "IBM Plex Mono",
        lineHeight: "30px",
        color: palette.common.black.main,
        textTransform: "uppercase",
        [breakpoints.down('md')]: {
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      jumboText: {
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
        color: palette.common.black.main,
        [breakpoints.down('lg')]: {
          fontSize: "60px",
          lineHeight: "72px",
        },
        "&:hover": {
          color: "#F5861C",
        },
        "&:focus": {
          color: "#F5861C",
        },
      },
      projectLink: {
        transition: "all 0.3s ease-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
        "&:active": {
          color: palette.common.black.main,
        },
        "& > img": {
          maxHeight: "30px",
          width: "30px",
          height: "30px",
          color: palette.common.black.main,
        },
      },
      transitionGradient: {
        position: "relative",
        maxWidth: "100vw",
        minHeight: "20vh",
        zIndex: zIndex?.layer3,
        [breakpoints.up('xl')]: {
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "auto",
        }
      }
    })
  })
  return useStyles();
}

const FeaturedProject: React.FC = () => {
  const classes = useMyStyles();
  const { redirect } = useHistory();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <img className={classes.transitionGradient} src="/graphics/landing/gradient1.png" alt="blue to purple gradient" />
          <Grid container xs={12} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
              <p className={classes.bodyText}>
                Notifications for Metamask (Concept)
              </p>
              <a href="/meta-alert" style={{ textDecoration: "none" }}>
                <h1 className={classes.jumboText}>
                  Meta-alert
                <span>
                    <Link onClick={() => redirect("/meta-alert")}>
                      <img className={classes.projectLink} src={pageButton} alt="Click here to access more detail about meta-alert" />
                    </Link>
                  </span>
                </h1>
              </a>


            </div>
            <div className={classes.imgWrapper}>
              <img src="/graphics/landing/highres-splash.png" alt="3d metal splash" />
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default FeaturedProject