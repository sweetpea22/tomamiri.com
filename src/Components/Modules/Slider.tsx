import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";
import clsx from "clsx";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      background: "#121212",
      position: "relative",
      minHeight: "70vh",
      display: "flex",
      justifyContent: "center",
    },
    slideWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      opacity: 0,
      transitionDuration: "1s ease",
      "& > img": {
        maxWidth: "80%",
      }
    },
    currentSlide: {
      opacity: 1,
      transitionDuration: "1s",
    },
    textWrapper: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      marginTop: constants.generalUnit * 4,

    },
    title: {
      color: palette.common.white.main,
      fontFamily: "IBM Plex Mono",
      fontSize: "20px",

    },
    bodyText: {
      color: palette.common.white.main,
      marginTop: constants.generalUnit * 2,
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
      maxWidth: 600,
      [breakpoints.down('md')]: {
        maxWidth: "80%",
      }
    },
    icon: {
      position: "absolute",
      top: "50%",
      color: "#fff",
      cursor: "pointer",
      userSelect: "none",
      fontSize: constants.generalUnit * 4,
      zIndex: zIndex?.layer3,
      "&:first-of-type": {
        left: constants.generalUnit * 4,
      },
      "&:nth-of-type(2)": {
        right: constants.generalUnit * 4,
      },
      [breakpoints.down('md')]: {
        top: "90%",
      }
    }
  })
})


const slides = [
  {
    img: "/graphics/metaalert/process1.png",
    title: "Design Process 🔍",
    caption: "I got a lot of insight from the feature discussions on the Metamask Github and was sure I wanted to keep my design aligned with the Snap plugin roadmap. This helped me differentiate between two types of alerts: system alerts and plugin alerts. The former were global to all the wallets in your Metamask, while the latter were local to a specific address.",
    altText: "Github Issue https://github.com/MetaMask/metamask-snaps-beta/issues/106 "
  },
  {
    img: "/graphics/metaalert/process2.png",
    title: "Design Process 🧠",
    caption: "Next, I leveraged some well-documented Ethereum personas and created user journeys for three types of users: an artist, investor, and socializer. The user journeys really emphasized to me the breadth of needs that needed to be accommodated in the interface. They also highlighted key opportunities for integrating alerts. Then, I mapped out task flows to exactly pinpoint where and when alerts should interact with the user.",
    altText: "Flowcharts and UX personas for metamask notifications"
  },
  {
    img: "/graphics/metaalert/process3.png",
    title: "Wireframes",
    caption: "Once I established the structure and context of alerts, I hopped into wireframing. From paper sketches, I worked into high fidelity mock ups. Metamask is already very compact as a browser plugin so it was a challenge to find an optimal layout without cluttering the UI or overwhelming the user.",
    altText: "UI Design for metamask notifications"
  },

]


const Slider: React.FC = () => {

  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  console.log(current);

  return (
    <div className={classes.container}>
      <BiLeftArrowCircle onClick={prevSlide} className={classes.icon} />
      <BiRightArrowCircle onClick={nextSlide} className={classes.icon} />
      {slides.map((slide, index) =>
      (
        <div className={clsx(classes.slideWrapper, { [classes.currentSlide]: index === current })} key={index}>
          { index === current && (
            <>
              <img src={slide.img} alt={slide.altText} />
              <div className={classes.textWrapper}>
                <p className={classes.title}>{slide.title}</p>
                <p className={classes.bodyText}>{slide.caption}</p>
              </div>
            </>
          )}
        </div>
      )
      )}
    </div>
  );
};

export default Slider