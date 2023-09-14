import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div>
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">Wheather</a>
          <div class="d-flex" role="search">
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                
                <Link className="btn bg-white text-success mx-1 bg-info" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <div
                  className="btn bg-white text-success mx-1 bg-info"
                  to="/"
                  onClick={handleOnClick}
                >
                  LogOut
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
