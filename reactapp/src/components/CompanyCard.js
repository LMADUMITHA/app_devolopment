import React from 'react';


// const CompanyCard = ({ imgSrc, title, description, addReviewLink, learnMoreLink }) => {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//       <div className="course_card">
//         <div className="course_card_img">
//           <img src={imgSrc} alt="course" />
//         </div>
//         <div className="course_card_content">
//           <h3 className="title">{title}</h3>
//           <p className="description">{description}</p>
//         </div>
//         <div className="course_card_footer">
//           <a className="nav-item" href={addReviewLink}>Add Review</a>
//           <a className="nav-item" href={learnMoreLink}>Learn More</a>
//         </div>
//       </div>
//     </div>
//   );
// };









// import { Link } from 'react-router-dom';
// import '../assets/styles/CompanyCard.css';
// const CompanyCard = ({ id, imgSrc, title, addReviewLink, learnMoreLink }) => {
//   return (
//     <div style={{ 
//       backgroundColor: 'white', 
//       border: '1px solid #ccc', 
//       borderRadius: '8px', 
//       padding: '16px', 
//       margin: '8px', 
//       width: '300px', 
//       height: '300px', 
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
//       display: 'flex', 
//       flexDirection: 'column', 
//       alignItems: 'center',
//       justifyContent: 'space-between'
//     }}>
//       <img src={imgSrc} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }} />
//       <h3 style={{ textAlign: 'center' }}>{title}</h3>
//       <div style={{ marginTop: 'auto' }}>
//         <a href={addReviewLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px', textDecoration: 'none', color: '#007BFF' }}>Add Review</a>
//         <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px', textDecoration: 'none', color: '#007BFF' }}>Learn More</a>
//         <Link to={`/description/${id}`} style={{ textDecoration: 'none' }}>
//           <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
//             View Company
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;



// CompanyCard.js
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
//         {/* <Link to={`/description/${id}`} className="company-card-button-link">
//           <button className="company-card-button">View Company</button>
//         </Link> */}
//         <Link to={`/list/${id}`} className="company-card-button-link">
//           <button className="company-card-button">View Company</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;

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
