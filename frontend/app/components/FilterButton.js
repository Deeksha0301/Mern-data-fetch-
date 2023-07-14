"use client";
import React from "react";
import axios from "axios";

const FilterButton = ({ filterType, setFilteredUsers }) => {
  const handleFilter = () => {
    axios
      .get(`https://assignment-4fpq.onrender.com/users/${filterType}`)
      .then((response) => {
        setFilteredUsers(response.data);
        setAverageIncome(response.data.map((city) => city.averageIncome));
      })
      .catch((error) => console.log(error));
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    background: "#073980",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <button onClick={handleFilter} style={buttonStyle}>
      {filterType}
    </button>
  );
};

export default FilterButton;
