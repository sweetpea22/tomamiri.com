import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      background: palette.common.black.main,
      position: "relative",
      height: "100vh",
    },
    slideWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      opacity: 0,
      transitionDuration: "1s ease",
      "&:active": {
        opacity: 1,
      },
      "& > img": {
        maxWidth: "80%",
      }
    },
    textWrapper: {
      display: "flex",
      width: "100%",
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
    }
  })
})


const slides = [
  {
    img: "/graphics/metaalert/process1.png",
    title: "Design Process 🔍",
    caption: "I got a lot of insight from the feature discussions on the Metamask Github and was sure I wanted to keep my design aligned with the Snap plugin roadmap. This helped me differentiate between two types of alerts: system alerts and plugin alerts. The former were global to all the wallets in your Metamask, while the latter were local to a specific address."
  },
  {
    img: "/graphics/metaalert/process2.png",
    title: "Design Process 🧠",
    caption: "Next, I leveraged some well-documented Ethereum personas and created user journeys for three types of users: an artist, investor, and socializer. The user journey’s really emphasized to me the breadth of needs that needed to be accommodated in the interface. They also highlighted key opportunities for integrating alerts. I then mapped out task flows to exactly pinpoint where and when alerts should interact with the user."
  },
  {
    img: "/graphics/metaalert/process3.png",
    title: "Wireframes",
    caption: "Once I established the context of alerts and their structure I hopped into wire framing. From paper sketches I worked into high fidelity mock ups. Metamask is already very compact as a browser plugin so it was a challenge to find an optimal layout without cluttering the UI or overwhelming the user. "
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
        <div className={classes.slideWrapper} key={index}>
          {index === current && (
            <>
              <img src={slide.img} />
              <div className={classes.textWrapper}>
                <p>{slide.title}</p>
                <p>{slide.caption}</p>
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