import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <Link>
        <button className="btn">Via Email</button>
      </Link>
      <Link>
        <button className="btn">Via LinkedIn</button>
      </Link>
    </div>
  );
};
