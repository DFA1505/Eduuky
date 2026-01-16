import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "../../assets/edusity_assets/next-icon.png";
import backIcon from "../../assets/edusity_assets/back-icon.png";
import user1 from "../../assets/edusity_assets/user-1.png";
import user2 from "../../assets/edusity_assets/user-2.png";
import user3 from "../../assets/edusity_assets/user-3.png";
import user4 from "../../assets/edusity_assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nextIcon} alt="" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Morenna Baccarin</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                voluptates accusamus sunt in neque maiores adipisci quo
                praesentium, odit minima non laboriosam atque maxime
                necessitatibus fugit omnis quia. Deserunt, id?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Miyuki Shirogane</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                voluptates accusamus sunt in neque maiores adipisci quo
                praesentium, odit minima non laboriosam atque maxime
                necessitatibus fugit omnis quia. Deserunt, id?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Jennie Buss</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                voluptates accusamus sunt in neque maiores adipisci quo
                praesentium, odit minima non laboriosam atque maxime
                necessitatibus fugit omnis quia. Deserunt, id?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Ilia Topuria</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                voluptates accusamus sunt in neque maiores adipisci quo
                praesentium, odit minima non laboriosam atque maxime
                necessitatibus fugit omnis quia. Deserunt, id?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
