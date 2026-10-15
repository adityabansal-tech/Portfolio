import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import heroDeveloper from "../../assets/lottie/heroDeveloper";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import heroIllustration from "../../assets/images/heroIllustration.svg";
import heroCharacter from "../../assets/images/heroCharacter.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    download="Aditya_Bansal_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.hero === "lottie" ? (
              <div className="greeting-lottie-div">
                <DisplayLottie animationData={heroDeveloper} />
              </div>
            ) : illustration.hero === "character" ? (
              <img
                alt="Animated developer working on a laptop, surrounded by API, analytics and code cards"
                src={heroCharacter}
              ></img>
            ) : (
              <img
                alt="Backend developer workspace illustration"
                src={heroIllustration}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
