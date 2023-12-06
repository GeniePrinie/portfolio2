import { Link } from "react-router-dom";

export const ItemCard = (props) => {
  return (
    <div className="my-5">
      <div className="card d-flex flex-lg-row-reverse">
        <div className="col-lg-6">
          <img
            className="card-img img-fluid"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <h3 className="card-title fs-1 text-primary mt-5">
              <b>{props.projectName}</b>
            </h3>
            <p className="card-text text-light badge mt-0 mb-4">
              {props.title}
            </p>
            <p className="card-text text-dark">{props.description}</p>
            <div>
              <Link to={props.repository}>
                <button className="btn ">View Repository</button>
              </Link>

              <Link to={props.website}>
                <button className="btn">View Website</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
