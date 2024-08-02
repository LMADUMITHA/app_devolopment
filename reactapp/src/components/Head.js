

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/Head.css';

// const Head = ({ company, id }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/booking/${id}`);
//   };

//   return (
//     <div className="card" onClick={handleCardClick}>
//       <div
//         className="head-image"
//         style={{ backgroundImage: `url(${company.image})` }}
//       ></div>
//       <div className="head-content">
//         <h4 className="card-title">{company.name}</h4>
//         <p className="card-text">{company.description}</p>
//         <div className="card-rating">
//           {Array.from({ length: company.rating }, (_, i) => (
//             <span key={i} className="star">&#9733;</span>
//           ))}
//         </div>
//         <p className="card-price">{company.price}</p>
//       </div>
//     </div>
//   );
// };

// export default Head;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Head.css';
import { FaStar } from 'react-icons/fa';

const Head = ({ company, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div
        className="head-image"
        style={{ backgroundImage: `url(${company.image})` }}
      ></div>
      <div className="head-content">
        <h4 className="card-title">{company.name}</h4>
        <p className="card-text">{company.description}</p>
        <div className="card-details">
          <span className="card-price">{company.price}</span>
          <div className="card-rating">
            {[...Array(5)].map((star, index) => (
              <FaStar
                key={index}
                color={index < company.rating ? '#ffc107' : '#e4e5e9'}
                size={20}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
