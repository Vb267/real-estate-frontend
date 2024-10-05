import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get("http://localhost:8000/properties/");
      setProperties(response.data);
    };
    fetchProperties();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {properties.map((property) => (
          <Col md={4} key={property.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={property.image}
                alt={property.title}
              />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyList;
