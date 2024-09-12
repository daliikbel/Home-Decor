import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/slices/auth.slice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephoneNumber: "",
    userType: "",
  });

  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const error = useSelector((state) => state.AuthReducer.errors);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const user = useSelector((state) => state.AuthReducer.user);
  useEffect(() => {
    if (isAuth && user) {
      if (user.userType === "company") {
        navigate("/companyProfile");
      } else if (user.userType === "customer") {
        navigate("/customerProfile");
      }
    }
  }, [isAuth, user, navigate]);
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userInfo));
  };

  return (
    <div className="page page-center">
      <div className="container container-tight py-4">
        <div className="text-center mb-4">
          <a href="/" className="navbar-brand navbar-brand-autodark"></a>
        </div>
        <div className="card card-md">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Create new account</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                <div className="d-flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon alert-icon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    {error?.error?.email?.msg ||
                      error?.error?.password?.msg ||
                      error}
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Enter last name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group input-group-flat">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <span className="input-group-text">
                    <a
                      href="#"
                      className="link-secondary"
                      data-bs-toggle="tooltip"
                      aria-label="Show password"
                      data-bs-original-title="Show password"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Telephone Number</label>
                <input
                  type="text"
                  name="telephoneNumber"
                  className="form-control"
                  placeholder="Enter telephone number"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">User Type</label>
                <select
                  name="userType"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select user type</option>
                  <option value="customer">Customer</option>
                  <option value="company">Company</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </form>
            <div className="text-center text-muted mt-3">
              Already have an account? <Link to="/login">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
