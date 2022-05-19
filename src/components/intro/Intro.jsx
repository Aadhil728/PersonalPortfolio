import React from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typical from "react-typical";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/image1.png" alt="into img" className="image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohamed Aadhil</h1>
          <h3>
            Frontend{" "}
            <span>
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "UI / UX Designer",
                  2000,
                ]}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
