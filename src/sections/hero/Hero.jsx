import "./hero.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from '../../assets/moon.svg';
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedLight from "../../assets/linkedin-light.svg";
import linkedDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon ;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const twitterIcon = theme === "light" ? twitterLight  : twitterDark;
  const linkedIcon = theme === "light" ? linkedLight  : linkedDark;


  return (
    <section id="hero-container">
      <div className="colorModeContainer">
        <img
          className="hero"
          src={heroImg}
          alt="Profile photo of chirag singh"
        />
        <img
          src={themeIcon}
          alt=""
          className="colorMode"
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          Chirag <br /> Singh
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a
            href="https://x.com/Chirag_x_beyond?t=H35X5FbEa1pfVKfvudbKpA&s=09"
            target="_blank"
          >
            <img src={twitterIcon} alt="X icon" />
          </a>
          <a href="https://github.com/chirag-singh-07" target="_blank">
            <img src={githubIcon} alt="X icon" />
          </a>
          <a
            href="https://linkedin.com/in/chirag-singh-086b142a4"
            target="_blank"
          >
            <img src={linkedIcon} alt="X icon" />
          </a>
        </span>
        <p className="desc" >
          with a passion for developing modern web apps for commercial
          businesses
        </p>
        <a href={CV} download={CV}>
          <button className="resume-btn">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
