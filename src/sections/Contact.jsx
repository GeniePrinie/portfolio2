import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div id="contact" className="pt-5">
      <h2>Contact</h2>
      <Link>
        <button className="btn ms-0">Via Email</button>
      </Link>
      <Link>
        <button className="btn">Via LinkedIn</button>
      </Link>
    </div>
  );
};
