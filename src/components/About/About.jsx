import React from "react";
import "./About.css";
import aboutImg from "../../assets/edusity_assets/about.png";
import playIcon from "../../assets/edusity_assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
        <img
          src={playIcon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, at
          ipsam. Ipsa est assumenda qui magni sit nemo magnam. Deserunt repellat
          a ad asperiores aliquid perferendis soluta hic sed eos!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quia
          sapiente quisquam similique laborum nisi placeat libero numquam sit
          fugit cupiditate eaque cum accusantium officiis eligendi laboriosam
          temporibus, aliquid deserunt?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          excepturi doloremque aliquam labore consequatur non ipsa voluptatem
          sint maxime ullam mollitia tempora obcaecati magnam eveniet eaque
          aspernatur eos incidunt est!
        </p>
      </div>
    </div>
  );
};

export default About;
