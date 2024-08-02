

// import { Link } from 'react-router-dom';
// import '../assets/styles/CompanyCard.css';

// const CompanyCard = ({ id, imgSrc, title, addReviewLink, learnMoreLink }) => {
//   return (
//     <div className="company-card">
//       <img src={imgSrc} alt={title} className="company-card-image" />
//       <h3 className="company-card-title">{title}</h3>
//       <div className="company-card-links">
//         <a href={addReviewLink} target="_blank" rel="noopener noreferrer" className="company-card-link">Add Review</a>
//         <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" className="company-card-link">Learn More</a>
//         <Link to="/list" className="company-card-button-link">
//           <button className="company-card-button">View Company</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;


import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/CompanyCard.css';

const CompanyCard = ({ id, imgSrc, title, addReviewLink, learnMoreLink }) => {
  return (
    <div className="company-card">
      <img src={imgSrc} alt={title} className="company-card-image" />
      <h3 className="company-card-title">{title}</h3>
      <div className="company-card-links">
        <a href={addReviewLink} target="_blank" rel="noopener noreferrer" className="company-card-link">Add Review</a>
        <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" className="company-card-link">Learn More</a>
        <Link to="/list" className="company-card-button-link">
          <button className="company-card-button">View Company</button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;

