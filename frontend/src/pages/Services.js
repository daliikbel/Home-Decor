import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const sampleServices = [
  {
    _id: '1',
    title: 'Plumbing Services',
    description: 'Installation of plumbing systems',
    category: 'plumbing_and_electricity',
    image: '/images/services/Plumbing Services.jpg',
  },
  {
    _id: '2',
    title: 'Electricity Services',
    description: 'Installation and maintenance of electrical systems',
    category: 'plumbing_and_electricity',
    image: '/images/services/Electricity Services.jpg',
  },
  {
    _id: '3',
    title: 'Painting and Finishing',
    description: 'Interior and exterior painting services',
    category: 'painting_and_finishing',
    image: '/images/services/Painting and Finishing.jpeg',
  },
  {
    _id: '4',
    title: 'Doors and Windows',
    description: 'Installation and repair of doors and windows',
    category: 'doors_and_windows',
    image: '/images/services/Doors and Windows.jpg',
  },
  {
    _id: '5',
    title: 'Sanitary and Ceramics',
    description: 'Sanitary installation and ceramic work',
    category: 'sanitary_and_ceramics',
    image: '/images/services/Sanitary and Ceramics.jpeg',
  },
  {
    _id: '6',
    title: 'Furniture',
    description: 'Custom furniture design and installation',
    category: 'furniture',
    image: '/images/services/Furniture.jpg',
  },
  {
    _id: '7',
    title: 'Decor',
    description: 'Home decoration services',
    category: 'decor',
    image: '/images/services/Decor.webp',
  },
  {
    _id: '8',
    title: 'Gardening',
    description: 'Garden design and maintenance',
    category: 'gardening',
    image: '/images/services/Gardening.jpg',
  },
];

const categories = [
  'all',
  'painting_and_finishing',
  'doors_and_windows',
  'sanitary_and_ceramics',
  'plumbing_and_electricity',
  'furniture',
  'decor',
  'gardening'
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setServices(sampleServices);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory, services]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: 'url(/images/services/services.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container py-5">
        <h1 className="text-white">Construction Services</h1>
        <div className="mb-3">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              className="me-2"
              onClick={() => handleCategoryClick(category)}
              style={{
                backgroundColor: category === 'all' ? '#f24025' : '#fdf0e0',
                borderColor: category === 'all' ? '#f24025' : '#fdf0e0',
                color: category === 'all' ? '#fff' : '#333',
                fontWeight: 'bold',
                textTransform: 'capitalize'
              }}
            >
              {category === 'all' ? 'All Categories' : category.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
            </Button>
          ))}
        </div>
        <div className="row">
          {filteredServices.map(service => (
            <div className="col-md-4 mb-3" key={service._id}>
              <Card style={{ width: '18rem' }} className="text-white bg-dark">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Link
                    to={`/services/${service._id}`}
                    className="btn"
                    style={{
                      backgroundColor: '#F04225',
                      color: '#fff',
                      textDecoration: 'none', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '0.25rem' 
                    }}
                  >
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;