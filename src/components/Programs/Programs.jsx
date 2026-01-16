import React from "react";
import "./Programs.css";
import p1 from "../../assets/program1.jpg";
import p2 from "../../assets/program2.jpg";
import p3 from "../../assets/program3.jpg";
import { FaGraduationCap } from "react-icons/fa6";
import { PiMedalFill, PiStudentFill } from "react-icons/pi";

const Programs = () => {
  return (
    <div className="programs container">
      <div className="program">
        <img src={p1} alt="" />
        <div className="caption">
          <FaGraduationCap className="caption-icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p2} alt="" />
        <div className="caption">
          <PiMedalFill className="caption-icon" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={p3} alt="" />
        <div className="caption">
          <PiStudentFill className="caption-icon" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
