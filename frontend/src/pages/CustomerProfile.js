import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/slices/auth.slice";

const orders = [
  { id: 1, service: "Painting", status: "Accepted" },
  { id: 2, service: "Ceramics", status: "Pending" },
  { id: 3, service: "Plumbing", status: "Rejected" },
];

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthReducer.user);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const error = useSelector((state) => state.AuthReducer.errors);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      dispatch(getMe());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user && isAuth) {
      if (user.userType === "company") {
        navigate("/CompanyProfile");
      } else if (user.userType === "customer") {
        navigate("/CustomerProfile");
      }
    }
  }, [user, isAuth, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-end"
      style={{
        backgroundImage: "url('/images/profile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-between mx-3 mb-4">
        <div className="col-md-5">
          <div className="p-4 text-white rounded shadow">
            <h2 className="fw-bold">Your Orders</h2>
            {orders.length > 0 ? (
              <ul className="list-unstyled">
                {orders.map((order) => (
                  <li key={order.id} className="mb-3">
                    <p className="fw-bold">
                      <strong>Service:</strong> {order.service}
                    </p>
                    <p className="fw-bold">
                      <strong>Status:</strong> {order.status}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders available.</p>
            )}
          </div>
        </div>

        <div className="col-md-5">
          <div className="p-4 text-white rounded shadow">
            <h1 className="fw-bold">Customer Profile</h1>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : isAuth ? (
              <>
                <p className="fw-bold">
                  <strong>First Name:</strong> {user.firstName}
                </p>
                <p className="fw-bold">
                  <strong>Last Name:</strong> {user.lastName}
                </p>
                <p className="fw-bold">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="fw-bold">
                  <strong>Telephone Number:</strong> {user.telephoneNumber}
                </p>
              </>
            ) : (
              <p>No user data available or not authenticated.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
