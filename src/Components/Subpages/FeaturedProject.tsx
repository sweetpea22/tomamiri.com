import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid, useHistory, Link } from "@chainsafe/common-components";
import pageButton from "./svg/pagebutton.svg";



const useMyStyles = () => {
  const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

    return createStyles({
      wrapper: {
        maxWidth: "2560px",
        display: "flex",
        background: "#ddd",
        minHeight: "70vh",
        margin: "0 4%",
        paddingTop: "15vh",
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
          padding: "10% 0 0 0",
          width: "100%",
        },
        [breakpoints.up('lg')]: {
          padding: "0% 5% 0 5%",
        },
        [breakpoints.up('xl')]: {
          padding: "0% 10% 0 10%",
        },
      },
      titleWrapper: {
        maxWidth: "60%",
        [breakpoints.down('lg')]: {
          maxWidth: "100%",
          textAlign: "left",
        }
      },
      imgWrapper: {
        marginTop: "4rem",
      },
      bodyText: {
        fontSize: "20px",
        fontWeight: 400,
        fontFamily: "IBM Plex Mono",
        lineHeight: "30px",
        width: "80%",
        color: palette.common.black.main,
        textTransform: "uppercase",
      },
      jumboText: {
        fontSize: "120px",
        lineHeight: "125px",
        fontWeight: 600,
        fontFamily: "Inter",
        "& > span": {
          marginLeft: constants.generalUnit * 5,
        },
        color: palette.common.black.main,
        [breakpoints.down('md')]: {
          fontSize: "36px",
          lineHeight: "45px",
          width: "100%",
        }
      },
      transitionGradient: {
        marginTop: "10vh",
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
          <Grid container xs={12} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
              <p className={classes.bodyText}>
                Notifications for Metamask (Concept)
              </p>
              <h1 className={classes.jumboText}>Meta-alert
                <span>
                  <Link onClick={() => redirect("/meta-alert")}>
                    <img className={classes.projectLink} src={pageButton} alt="Click here to access more detail about meta-alert" />
                  </Link>
                </span>
              </h1>

            </div>
            <div className={classes.imgWrapper}>
              <img src="/graphics/landing/splash.png" alt="3d metal splash" />
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default FeaturedProject