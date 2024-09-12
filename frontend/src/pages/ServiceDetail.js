import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams(); 

  return (
    <div className="container py-5">
      <h1>Service Details</h1>
      <p>No details available for service ID: {id}</p>
    </div>
  );
};

export default ServiceDetail;