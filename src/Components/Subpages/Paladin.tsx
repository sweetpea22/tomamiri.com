import React from 'react'
import Section from "../Modules/Section";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Grid } from "@chainsafe/common-components";
import pageButton from "./svg/smallPageButton.svg";



const useMyStyles = () => {
  const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {

    return createStyles({
      wrapper: {
        display: "flex",
        background: "linear-gradient(0.25turn, #EE0B34, #E7A226)",
        margin: "0",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [breakpoints.up('lg')]: {
            paddingTop: "3rem",
        },
        [breakpoints.up('xl')]: {
          position: "relative",
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
        color: palette.common.white.main,
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
        color: palette.common.white.main,
        [breakpoints.down('lg')]: {
          fontSize: "60px",
          lineHeight: "72px",
        },
        "&:hover": {
          color: "#000",
        },
        "&:focus": {
          color: "#000",
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
          width: "100%",
          bottom: "auto",
        }
      }, 
      titleContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",   
      },
      ethGlobalImg: {
        maxWidth: "150px",
        paddingRight: constants.generalUnit * 2,
      }
    })
  })
  return useStyles();
}

const Paladin: React.FC = () => {
  const classes = useMyStyles();
  return (
    <>
      <Section>
        <div className={classes.wrapper}>
          <Grid container xs={12} className={classes.contentContainer}>
            <div className={classes.titleWrapper}>
                <div className={classes.titleContainer}>
                    <img className={classes.ethGlobalImg} src="/graphics/landing/ethglobal.png" alt="EthGlobal logo"/>
                    <p className={classes.bodyText}>
                    GOVERNANCE AWARD WINNER
                    </p>
                </div>
              <a href="/paladin">
                <h1 className={classes.jumboText}>
                    Paladin
                <span>
                    <a href="/paladin">
                      <img className={classes.projectLink} src={pageButton} alt="Click here to access more detail about meta-alert" />
                    </a>
                  </span>
                </h1>
              </a>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  )
}

export default Paladin