import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="mt-5 container">
      <div className="row">
        <div className="col-md-12 text-center">
          <NavLink className="btn btn-primary" to="../internship">
            Internship Page
          </NavLink>
        </div>
        <div className="col-md-12 text-center mt-5">
          <NavLink className="btn btn-primary" to="../solo">
            Solo Page
          </NavLink>
        </div>
        <p>
          Submitted By: <strong>Abhinav Awasthi</strong>
        </p>
        <p>
          <br />
          <a target="_blank" href="tel:9935859460">
            Call
          </a>
          <br />
          <a target="_blank" href="mailto:awasthiabhinav744@gmail.com">
            Email
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
