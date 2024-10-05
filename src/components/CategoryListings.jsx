import React from "react";
import "./styles/categories.css";

const categories = [
  { id: 1, name: "Apartments", imgUrl: "/images/apartments.jpg" },
  { id: 2, name: "Villas", imgUrl: "/images/villas.jpg" },
  { id: 3, name: "Commercial Spaces", imgUrl: "/images/commercial.jpg" },
  { id: 4, name: "Land", imgUrl: "/images/land.jpg" },
];

const CategoryListings = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
          <img src={category.imgUrl} alt={category.name} />
          <h3>{category.name}</h3>
          <p>
            Explore the best {category.name.toLowerCase()} available for you.
          </p>
          <button>View Listings</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryListings;
