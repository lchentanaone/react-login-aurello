import React from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import contacusImg from "../images/contactus.png";
const Contact = () => {
  return (
    <body id="contact">
      <div className="content1">
        <div>
          <span className="font-content1">Contact us</span>
          <img className="content1Image" src={contacusImg} />
        </div>
      </div>
      <div className="content2">
        <div className="button">
          <div className="icon" style={{ color: "black" }}>
            <div className="box">
              <div className="iconSize">
                <AiFillFacebook size={30} />
              </div>
              <p>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="icon" style={{ color: "black" }}>
            <div className="box">
              <div className="iconSize">
                <AiOutlineTwitter size={30} />
              </div>
              <p>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="icon" style={{ color: "black" }}>
            <div className="box">
              <div className="iconSize">
                <AiOutlineMail size={30} />
              </div>
              <p>
                <a
                  href="https://mail.google.com/mail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gmail
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="icon" style={{ color: "black" }}>
            <div className="box">
              <div className="iconSize">
                <AiFillGithub />
              </div>
              <p>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;
