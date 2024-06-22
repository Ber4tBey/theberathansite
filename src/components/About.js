import "../styles/About.css";
import Berat from "../assets/thberathan.jpg";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutInner">
        <div className="aboutPhoto">
          <img src={Berat} alt="theberathan" height={700} />
        </div>

        <div className="aboutTextArea"></div>
      </div>
    </div>
  );
}

export default About;
