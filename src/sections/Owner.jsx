import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function scrollToAbout() {
  const aboutSection = document.getElementById("about");

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

export const Owner = () => {
  return (
    <div className="bg-dark">
      <div className="owner d-flex align-items-center justify-content-center mb-5">
        <div>
          <h1 className="text-center mt-0 text-success">Prinyapon Prinyanut</h1>
          <p className="text-center  mt-4 fs-3 text-primary text-uppercase">
            Front-end Developer
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center bg-dark pb-5">
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          onClick={scrollToAbout}
          className="text-success arrow-down text-center fs-1 mb-5 cursor"
        />
      </div>
    </div>
  );
};
