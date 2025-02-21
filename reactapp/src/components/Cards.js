


import React from 'react';
import '../assets/styles/Cards.css';

const Cards = () => {
  const courses = [
    { title: "This month booking", info: "45" },
    { title: "Total users", info: "28" },
    { title: "Annual package", info: "<5L" },
    { title: "Edit description", info: "Edit description" },
    { title: "Total no.of events", info: "35" },
    { title: "Star ratings", info: ">4" }
  ];

  return (
    <div className="cards-container">
      {courses.map((course, index) => (
        <div className="card" key={index}>
          <div className="card-title">{course.title}</div>
          <button className="card-info-button">{course.info}</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
