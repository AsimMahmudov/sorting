"use client";

import React from "react";
import { useFilterStore } from "@/stores/searchStore"; // Import your zustand store
import { useData } from "../data/data"; // Assuming useData fetches your data

const Hero = () => {
  const { selectedType, selectedCategory } = useFilterStore(); // Destructure selectedType and selectedCategory
  const { data } = useData(); // Assuming data contains your products

  // Filter data based on selected type and category
  const filteredData = data.filter((el) => {
    const matchesType = selectedType ? el.type === selectedType : true;
    const matchesCategory = selectedCategory ? el.category === selectedCategory : true;
    return matchesType && matchesCategory;
  });

  return (
    <div className="box">
      <div className="container">
        <div className="cards">
          {filteredData.length === 0 ? (
            <p>No products found</p> // Display a message if no products match the filters
          ) : (
            filteredData.map((el, index) => (
              <div className="card" key={index}>
                <h1>{el.title}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
  