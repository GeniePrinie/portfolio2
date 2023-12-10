import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div id="contact" className="pt-5 text-center">
      <h2 className="contact text-uppsercase text-danger mb-4">Get in Touch</h2>
      <Link to="mailto:genieprinyanut@gmail.com?subject=Inquiry&body=Hello%20there!">
        <button className="btn ms-0">Via Email</button>
      </Link>
      <Link
        to="https://www.linkedin.com/in/genie-prinyanut-ab3441257/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn">Via LinkedIn</button>
      </Link>
    </div>
  );
};
