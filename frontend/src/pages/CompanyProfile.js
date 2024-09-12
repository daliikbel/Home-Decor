import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../redux/slices/auth.slice';
import FormAddPost from '../components/FormAddPost';

const CompanyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthReducer.user);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        console.log("Utilisateur récupéré de localStorage:", JSON.parse(storedUser));
      } else {
        dispatch(getMe());
      }
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user && isAuth) {
      if (user.userType === 'company') {
        navigate('/CompanyProfile');
      } else if (user.userType === 'customer') {
        navigate('/customer-profile'); 
      }
    }
  }, [user, isAuth, navigate]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: 'url(/images/profile.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="row w-100">
        <div className="col-md-6 p-5 text-center">
          <h1 className="text-white fw-bold">Company Profile</h1>
          <div className="text-white">
            <p><strong>Company Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telephone Number:</strong> {user.telephoneNumber}</p>
          </div>
          <button className="btn mb-4" style={{ backgroundColor: '#EF4227', color: '#fff' }}>
            Update Information
          </button>
        </div>

        <div className="col-md-6 p-5">
          <FormAddPost />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;