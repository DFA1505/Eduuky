import React, { useState } from "react";
import "./Contact.css";
import msgIcon from "../../assets/edusity_assets/msg-icon.png";
import mailIcon from "../../assets/edusity_assets/mail-icon.png";
import phoneIcon from "../../assets/edusity_assets/phone-icon.png";
import locationIcon from "../../assets/edusity_assets/location-icon.png";
import whiteArrow from "../../assets/edusity_assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2f200d98-2887-4ade-9c24-2b81fda7595f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msgIcon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          odio repellat, sed quidem, dignissimos, omnis tempora provident neque
          nesciunt voluptas perferendis voluptatibus quo porro animi. Nostrum
          sint distinctio officia pariatur!
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="" />
            Contact@example.com
          </li>
          <li>
            <img src={phoneIcon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={locationIcon} alt="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 12345, England
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          />
          <label htmlFor="message">Write Your Messages Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={whiteArrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
