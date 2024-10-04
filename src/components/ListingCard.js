import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="card">
      <img
        src={listing.imageUrl}
        className="card-img-top"
        alt={listing.title}
      />
      <div className="card-body">
        <h5 className="card-title">{listing.title}</h5>
        <p className="card-text">{listing.description}</p>
        <p className="card-text">${listing.price}</p>
        <p className="card-text">{listing.location}</p>
      </div>
    </div>
  );
};

export default ListingCard;
