import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Components/InternshipStyle.css";
import ProfileCard from "./ProfileCard";

function SoloPage() {
  return (
    <div>
      <Navbar />
      <section id="details" className="d-flex align-items-center">
        <div className="container-fluid">
          <NavLink className="btn btn-primary mt-2" to="../">
            Go To Home
          </NavLink>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-4 mt-5">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title mt-2 mb-2">About Naveen</h5>
                      <i class="fa fa-brands fa-linkedin ml-2 mr-2"></i>
                      <i class="fa fa-brands fa-twitter ml-2 mr-2"></i>
                      <i class="fa fa-brands fa-facebook ml-2 mr-2"></i>
                      <i class="fa fa-brands fa-whatsapp ml-2 mr-2"></i>
                      <p class="card-text mt-2">Computer Engineer</p>
                      <br />
                      <div class="d-flex justify-content-between text-center mt-5 mb-2">
                        <div>
                          <p class="mb-2 h5">0</p>
                          <p class="text-muted mb-0">Posts</p>
                        </div>
                        <div class="px-3">
                          <p class="mb-2 h5">10</p>
                          <p class="text-muted mb-0">Followers</p>
                        </div>
                        <div>
                          <p class="mb-2 h5">7</p>
                          <p class="text-muted mb-0">Following</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <img
                    className="img-fluid mt-5 rounded-top-bottom"
                    alt="computer"
                    src="https://www.parkersoftware.com/wp-content/uploads/2020/10/pankaj-patel-_SgRNwAVNKw-unsplash-scaled.jpg"
                  />
                </div>
              </div>
              <div className="mt-5 d-flex align-items-center">
                <button type="button" class="btn btn-primary btn-sm ml-2 mr-2">
                  0 Courses
                </button>
                <button type="button" class="btn btn-danger btn-sm ml-2 mr-2">
                  5 Live Projects
                </button>
                <button type="button" class="btn btn-primary btn-sm ml-2 mr-2">
                  1 Internships
                </button>
                <button type="button" class="btn btn-danger btn-sm ml-2 mr-2">
                  0 Hackathons
                </button>
              </div>
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoloPage;
