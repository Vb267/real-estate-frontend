import React from "react";
import "./FeaturedListings.css";

const featuredListings = [
  { id: 1, name: "Luxury Villa", price: "$1,200,000", image: "villa.jpg" },
  {
    id: 2,
    name: "Modern Apartment",
    price: "$850,000",
    image: "apartment.jpg",
  },
  { id: 3, name: "Spacious Office", price: "$600,000", image: "office.jpg" },
];

const FeaturedListings = () => {
  return (
    <div className="featured-listings">
      <h2>Featured Listings</h2>
      <div className="listings-container">
        {featuredListings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img
              src={listing.image}
              alt={listing.name}
              className="listing-image"
            />
            <h3>{listing.name}</h3>
            <p>{listing.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
import React from "react";
import "./FeaturedListings.css";

const featuredListings = [
  {
    id: 1,
    name: "Luxury Villa",
    price: "$1,200,000",
    location: "Malibu, California",
    bedrooms: 4,
    bathrooms: 5,
    area: "3500 sqft",
    image: "villa.jpg",
  },
  {
    id: 2,
    name: "Modern Apartment",
    price: "$850,000",
    location: "New York City, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: "1500 sqft",
    image: "apartment.jpg",
  },
  {
    id: 3,
    name: "Spacious Office",
    price: "$600,000",
    location: "Downtown Los Angeles, CA",
    bedrooms: null,
    bathrooms: 2,
    area: "2000 sqft",
    image: "office.jpg",
  },
  {
    id: 4,
    name: "Beachfront Condo",
    price: "$950,000",
    location: "Miami, Florida",
    bedrooms: 3,
    bathrooms: 3,
    area: "1800 sqft",
    image: "condo.jpg",
  },
  {
    id: 5,
    name: "Countryside Cottage",
    price: "$450,000",
    location: "Asheville, North Carolina",
    bedrooms: 3,
    bathrooms: 2,
    area: "1600 sqft",
    image: "cottage.jpg",
  },
  {
    id: 6,
    name: "Penthouse Suite",
    price: "$2,500,000",
    location: "Chicago, Illinois",
    bedrooms: 5,
    bathrooms: 4,
    area: "4000 sqft",
    image: "penthouse.jpg",
  },
];

const FeaturedListings = () => {
  return (
    <div className="featured-listings">
      <h2>Featured Listings</h2>
      <div className="listings-container">
        {featuredListings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.name} className="listing-image" />
            <h3>{listing.name}</h3>
            <p>Location: {listing.location}</p>
            <p>Price: {listing.price}</p>
            {listing.bedrooms && <p>Bedrooms: {listing.bedrooms}</p>}
            {listing.bathrooms && <p>Bathrooms: {listing.bathrooms}</p>}
            <p>Area: {listing.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
