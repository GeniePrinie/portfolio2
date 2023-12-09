import { Link } from "react-router-dom";

function scrollToAbout() {
  const aboutSection = document.getElementById("about");

  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToProjects() {
  const projectsSection = document.getElementById("projects");

  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToContact() {
  const contactSection = document.getElementById("contact");

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Component representing the header of the application.
 * @component
 * @param {object} props - The properties passed to the component.
 * @param {boolean} props.isHomepage - Flag indicating if the header is for the homepage.
 * @returns {JSX.Element} - The rendered Header component.
 */
export const Header = () => {
  return (
    <header id="top" className="text-center py-4 bg-dark text-light fs-3">
      <Link className="text-decoration-none mx-5" onClick={scrollToAbout}>
        <span>About</span>
      </Link>
      <Link
        to="/"
        className="text-decoration-none mx-5"
        onClick={scrollToProjects}
      >
        <span>Projects</span>
      </Link>
      <Link
        to="/"
        className="text-decoration-none mx-5"
        onClick={scrollToContact}
      >
        <span>Contact</span>
      </Link>
    </header>
  );
};
