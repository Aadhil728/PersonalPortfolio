import React, { useState } from "react";
import "./works.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "images/smartphone.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing else",
      img: "images/img1.jpg",
    },
    {
      id: "2",
      icon: "<MobileScreenShareIcon />",
      title: "Branding",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing else",
      img: "../../images/img5.jpg",
    },
    {
      id: "3",
      icon: "<MobileScreenShareIcon />",
      title: "Mobile Design",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing else",
      img: "../../images/Mobile.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowBackIosIcon className="arrow right" onClick={() => handleClick()} />
    </div>
  );
};

export default Works;
