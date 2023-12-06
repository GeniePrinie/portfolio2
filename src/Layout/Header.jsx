import { Link } from "react-router-dom";

/**
 * Component representing the header of the application.
 * @component
 * @param {object} props - The properties passed to the component.
 * @param {boolean} props.isHomepage - Flag indicating if the header is for the homepage.
 * @returns {JSX.Element} - The rendered Header component.
 */
export const Header = () => {
  return (
    <header className="text-center py-4 bg-dark mb-5">
      <Link className="text-decoration-none mx-5">
        <span className="text-light">About</span>
      </Link>
      <Link to="/" className="text-decoration-none mx-5">
        <span className="text-light">Projects</span>
      </Link>
      <Link to="/" className="text-decoration-none mx-5">
        <span className="text-light">Contact</span>
      </Link>
    </header>
  );
};
