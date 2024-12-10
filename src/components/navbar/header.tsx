"use client";

import { useFilterStore } from "@/stores/searchStore";
import React from "react";

const Header = () => {
  const {
    selectedType, // Destructure selectedType
    selectedCategory, // Destructure selectedCategory
    setSelectedType,
    setSelectedCategory,
    resetFilters,
  } = useFilterStore();

  // Toggle the selected type
  const handleTypeClick = (type: string) => {
    setSelectedType(selectedType === type ? "" : type);
  };

  // Toggle the selected category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };

  // Function to apply styles based on selection
  const getButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? "#007bff" : "#e0e0e0", // Blue if selected, gray if not
    color: isSelected ? "white" : "black", // White text for selected
    border: "none",
    padding: "10px 20px",
    margin: "5px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.3s ease",
  });

  return (
    <div className="header">
      <div className="container">

        <h1>КНИГИ СОРТИРОВКА</h1>
        <div className="sort">
          {/* Type Buttons */}
          <div className="btn">
            <button
              style={getButtonStyle(selectedType === "stories")}
              onClick={() => handleTypeClick("stories")}
            >
              stories
            </button>
            <button
              style={getButtonStyle(selectedType === "classic")}
              onClick={() => handleTypeClick("classic")}
            >
              classic
            </button>
            <button
              style={getButtonStyle(selectedType === "fantasy")}
              onClick={() => handleTypeClick("fantasy")}
            >
              fantasy
            </button>
          </div>

          {/* Category Buttons */}
          <div className="btn">
            <button
              style={getButtonStyle(selectedCategory === "domestic")}
              onClick={() => handleCategoryClick("domestic")}
            >
              Отечественные
            </button>
            <button
              style={getButtonStyle(selectedCategory === "foreign")}
              onClick={() => handleCategoryClick("foreign")}
            >
              Зарубежные
            </button>
          </div>
        </div>

        <div className="filter-description">
          <button onClick={resetFilters} style={getButtonStyle(false)}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
