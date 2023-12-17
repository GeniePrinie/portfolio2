import { NavLink } from "react-router-dom";

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
    <header
      id="top"
      className="d-flex justify-content-center py-4 bg-dark text-primary fs-3"
    >
      <NavLink
        className="text-decoration-none nav-link"
        onClick={scrollToAbout}
      >
        About
      </NavLink>
      <NavLink
        to="/"
        className="text-decoration-none mx-4 nav-link"
        onClick={scrollToProjects}
      >
        Projects
      </NavLink>
      <NavLink
        to="/"
        className="text-decoration-none nav-link"
        onClick={scrollToContact}
      >
        Contact
      </NavLink>
    </header>
  );
};
