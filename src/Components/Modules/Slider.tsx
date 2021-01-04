import React from "react";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      height: constants.generalUnit * 10,
      color: "#262626",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: zIndex?.layer4,
      [breakpoints.down('sm')]: {
        padding: "none",
      }
    },
    chevron: {
      width: "35px",
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

  return (
    <div>
      {slides.map((slide, index) =>
      (
        <div key={index}>
          <img src={slide.img} />
          <div>
            <p>{slide.title}</p>
            <p>{slide.caption}</p>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default Slider