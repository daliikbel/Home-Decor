import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/auth.slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const error = useSelector((state) => state.AuthReducer.errors);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const user = useSelector((state) => state.AuthReducer.user);
  const userType = user ? user.userType : null;
  useEffect(() => {
    console.log("isAuth:", isAuth);
    console.log("userType:", userType);

    if (isAuth) {
      if (userType === "company") {
        navigate("/CompanyProfile");
      } else if (userType === "customer") {
        navigate("/CustomerProfile");
      }
    }
  }, [isAuth, userType, navigate]);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credential));
  };

  return (
    <div className="d-flex flex-column">
      <div className="page page-center">
        <div className="container container-tight py-4">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={110}
                height={32}
                viewBox="0 0 232 68"
                className="navbar-brand-image"
              ></svg>
            </a>
          </div>
          <div className="card card-md">
            <div className="card-body">
              <h2 className="h2 text-center mb-4">Login to your account</h2>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 8v4"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                    </div>
                    <div>{error}</div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="your@email.com"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Password</label>
                  <div className="input-group input-group-flat">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Your password"
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
                <button
                  className="btn btn-primary w-100"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </form>
            </div>
          </div>
          <div className="text-center text-secondary mt-3">
            Don't have an account yet?{" "}
            <a href="/register" tabIndex={-1}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
