import { Link } from "react-router-dom";

export const ItemCard = (props) => {
  return (
    <div className="my-5 ">
      <div className="card d-flex flex-lg-row-reverse bg-secondary">
        <div className="col-lg-6 d-flex">
          <img
            className="card-img img-fluid pe-0 pe-lg-5 pe-xl-0 align-self-center"
            src={props.image}
            alt={props.title}
            style={{ borderRadius: 0 }}
          />
        </div>
        <div className="col-lg-6">
          <div className="card-body m-4">
            <h3 className="card-title fs-1 text-dark mt-5">
              <b>{props.projectName}</b>
            </h3>
            <p className="card-text text-dark badge mt-0 mb-4">{props.title}</p>
            <p className="card-text text-dark my-4">{props.description}</p>
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
