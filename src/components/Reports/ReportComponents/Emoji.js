import React, { useState, useEffect } from "react";
import "./Emoji.css";
import smile from "../../../images/smile.png";
import neutral from "../../../images/neutral.png";
import sad from "../../../images/sad.png";

const Emoji = (props) => {
  // For resizing the emoji based on the width
  const [windowSize, setWindowSize] = useState(2000);

  // Keep checking for change in window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  let i, src; // height and img src for background colour height and the emoji
  if (props.name >= 75) {
    i = "green";
    src = smile;
  } else if (props.name < 50) {
    i = "red";
    src = sad;
  } else {
    i = "gold";
    src = neutral;
  }
  return (
    <div className="emoji">
      <div className="main">
        <div
          className="Line"
          style={{
            position: "relative",
            width: `${windowSize > 766 ? 200 + "%" : 150 + "px"}`,
            background: `${i}`,
            height: "3px",
            left: "50%",
            bottom: `-${
              windowSize > 766 ? 200 - props.name * 2 + 3 : 100 - props.name + 3
            }px`,
            zIndex: "0"
          }}
        >
          {/* Line  */}
        </div>
        <div className="emoji_sub-container">
          {/* Shell for emoji image and background colour  */}
          <div
            className="emoji_background"
            style={{
              backgroundColor: `${i}`,
              height: `${windowSize > 766 ? props.name * 2 : props.name}px`,
              top: `${
                windowSize > 766 ? 200 - props.name * 2 : 100 - props.name
              }px`
            }}
          ></div>
          <div
            className="emoji_emoji"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              top: `-${windowSize > 766 ? props.name * 2 : props.name}px`
            }}
          ></div>
        </div>
      </div>
      <h1
        style={{
          marginLeft: "40%",
          color: `${i}`,
          fontSize: "42px",
          position: "relative",
          bottom: `${props.name * 2 - 150}px`
        }}
      >
        {props.name}%
      </h1>
    </div>
  );
};

export default Emoji;
