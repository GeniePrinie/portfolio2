import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function scrollToTop() {
  const HeaderSection = document.getElementById("top");

  if (HeaderSection) {
    HeaderSection.scrollIntoView({ behavior: "smooth" });
  }
}

export const BackToTop = () => {
  return (
    <div className="pt-5 pb-0 mt-5 mb-0 text-center bg-dark">
      <FontAwesomeIcon
        icon={faCircleChevronUp}
        onClick={scrollToTop}
        className="text-success arrow-down text-center fs-1 mb-5 cursor"
      />
    </div>
  );
};
