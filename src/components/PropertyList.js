import React, { useEffect, useState } from "react";
import { fetchProperties } from "../api/propertyAPI";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };
    getProperties();
  }, []);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <img
              src={property.image_url}
              alt={property.title}
              style={{ width: "300px", height: "200px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
