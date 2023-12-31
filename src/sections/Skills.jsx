import {
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Skills = () => {
  return (
    <div className="text-center pt-5 skills">
      <h2 className="pb-3 fs-1">Skills</h2>
      <div className="d-flex justify-content-center flex-wrap text-dark mb-5">
        <FontAwesomeIcon icon={faReact} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faHtml5} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faJs} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faFigma} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faBootstrap} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faSass} className="skill-icon m-3" />
        <FontAwesomeIcon icon={faGithub} className="skill-icon m-3" />
      </div>
    </div>
  );
};
