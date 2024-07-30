// import React, { useState } from 'react';
// import '../assets/styles/Company.css'; // Adjust the path as necessary

// const companiesData = [
//   {
//     id: 'card1',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Typescript',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card2',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card3',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Typescript Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card4',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'React Basics',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card5',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Node.js Guide',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card6',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Express.js Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   }
// ];

// const CompanyCard = ({ imgSrc, title, addReviewLink, learnMoreLink }) => {
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
//         <button onClick={() => alert('Viewing company details...')} style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>View Company</button>
//       </div>
//     </div>
//   );
// };

// const Company = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const filteredCompanies = companiesData.filter(company =>
//     company.title.toLowerCase().includes(searchQuery)
//   ).slice(0, 6); // Limit to 6 cards

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}>
      
//       <div className="search-container">
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search by title..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button className="search-button">Search</button>
//         </div>
//       </div>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(3, 1fr)', 
//         gap: '16px', 
//         width: '100%', 
//         maxWidth: '1200px', 
//         padding: '0 16px'
//       }}>
//         {filteredCompanies.map(company => (
//           <CompanyCard
//             key={company.id}
//             imgSrc={company.imgSrc}
//             title={company.title}
//             addReviewLink={company.addReviewLink}
//             learnMoreLink={company.learnMoreLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Company;


// import React, { useState } from 'react';
// import '../assets/styles/Company.css'; // Adjust the path as necessary

// const companiesData = [
//   {
//     id: 'card1',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Typescript',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card2',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card3',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Typescript Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card4',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'React Basics',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card5',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Node.js Guide',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card6',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Express.js Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   }
// ];

// const CompanyCard = ({ imgSrc, title, addReviewLink, learnMoreLink }) => {
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
//         <button onClick={() => alert('Viewing company details...')} style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>View Company</button>
//       </div>
//     </div>
//   );
// };

// const Company = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const filteredCompanies = companiesData.filter(company =>
//     company.title.toLowerCase().includes(searchQuery)
//   ).slice(0, 6); // Limit to 6 cards

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1px' }}>
     
//       <div className="search-container">
//         <div className="search-box-wrapper">
//           <div className="search-box">
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Wedding Venues in Coimbatore"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button className="search-button">Find</button>
//           </div>
//           <div className="search-image">
//             <p>Find the best venues for your special day</p>
//           </div>
//         </div>
//       </div>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(3, 1fr)', 
//         gap: '16px', 
//         width: '100%', 
//         maxWidth: '1200px', 
//         padding: '0 16px'
//       }}>
//         {filteredCompanies.map(company => (
//           <CompanyCard
//             key={company.id}
//             imgSrc={company.imgSrc}
//             title={company.title}
//             addReviewLink={company.addReviewLink}
//             learnMoreLink={company.learnMoreLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Company;


// import React, { useState } from 'react';
// import '../assets/styles/Company.css'; // Adjust the path as necessary
// import { Link } from 'react-router-dom';
// const companiesData = [
//   {
//     id: 'card1',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Typescript',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card2',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card3',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Typescript Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card4',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'React Basics',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card5',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Node.js Guide',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card6',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Express.js Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   }
// ];

// const CompanyCard = ({ imgSrc, title, addReviewLink, learnMoreLink }) => {
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
//         <button onClick={() => alert('Viewing company details...')} style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}><Link to="/description">View Company</Link></button>
//       </div>
//     </div>
//   );
// };

// // const Company = () => {
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleSearchChange = (event) => {
// //     setSearchQuery(event.target.value.toLowerCase());
// //   };

// //   const filteredCompanies = companiesData.filter(company =>
// //     company.title.toLowerCase().includes(searchQuery)
// //   ).slice(0, 6); // Limit to 6 cards

// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}>
      
// //       <div className="search-container">
// //         <div className="search-box">
// //           <input
// //             type="text"
// //             className="search-input"
// //             placeholder="Search by title..."
// //             value={searchQuery}
// //             onChange={handleSearchChange}
// //           />
// //           <button className="search-button">Search</button>
// //         </div>
// //       </div>
// //       <div style={{ 
// //         display: 'grid', 
// //         gridTemplateColumns: 'repeat(3, 1fr)', 
// //         gap: '16px', 
// //         width: '100%', 
// //         maxWidth: '1200px', 
// //         padding: '0 16px'
// //       }}>
// //         {filteredCompanies.map(company => (
// //           <CompanyCard
// //             key={company.id}
// //             imgSrc={company.imgSrc}
// //             title={company.title}
// //             addReviewLink={company.addReviewLink}
// //             learnMoreLink={company.learnMoreLink}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Company;


// const Company = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const filteredCompanies = companiesData.filter(company =>
//     company.title.toLowerCase().includes(searchQuery)
//   ).slice(0, 6); // Limit to 6 cards

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}>
      
//       <div className="search-container">
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search by title..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button className="search-button">Search</button>
//         </div>
//       </div>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(3, 1fr)', 
//         gap: '16px', 
//         width: '100%', 
//         maxWidth: '1200px', 
//         padding: '0 16px'
//       }}>
//         {filteredCompanies.map(company => (
//           <CompanyCard
//             key={company.id}
//             id={company.id} // Ensure the id is passed here
//             imgSrc={company.imgSrc}
//             title={company.title}
//             addReviewLink={company.addReviewLink}
//             learnMoreLink={company.learnMoreLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Company;


// import React, { useState } from 'react';
// import CompanyCard from './CompanyCard'; // Make sure to import CompanyCard
// import '../assets/styles/Company.css'; // Adjust the path as necessary

// const companiesData = [
//   {
//     id: 'card1',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Typescript',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card2',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Angular Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card3',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Typescript Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card4',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'React Basics',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card5',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Node.js Guide',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   },
//   {
//     id: 'card6',
//     imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
//     title: 'Express.js Tutorial',
//     addReviewLink: 'https://www.smartcodehub.com/blog',
//     learnMoreLink: 'https://www.smartcodehub.com/blog'
//   }
// ];

// const Company = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const filteredCompanies = companiesData.filter(company =>
//     company.title.toLowerCase().includes(searchQuery)
//   ).slice(0, 6); // Limit to 6 cards

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}>
      
//       <div className="search-container">
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search by title..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button className="search-button">Search</button>
//         </div>
//       </div>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(3, 1fr)', 
//         gap: '16px', 
//         width: '100%', 
//         maxWidth: '1200px', 
//         padding: '0 16px'
//       }}>
//         {filteredCompanies.map(company => (
//           <CompanyCard
//             key={company.id}
//             id={company.id} // Ensure the id is passed here
//             imgSrc={company.imgSrc}
//             title={company.title}
//             addReviewLink={company.addReviewLink}
//             learnMoreLink={company.learnMoreLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Company;



// Company.js

import React, { useState } from 'react';
import CompanyCard from './CompanyCard'; // Make sure to import CompanyCard
import '../assets/styles/Company.css'; // Adjust the path as necessary

import img1 from '../assets/styles/cardim1.png';
import img2 from '../assets/styles/cardim2.png';
import img3 from '../assets/styles/cardim3.png';
import img4 from '../assets/styles/cardim3.png';
import img5 from '../assets/styles/cardim1.png';
import img6 from '../assets/styles/cardim2.png';



const companiesData = [
  {
    id: 'card1',
    imgSrc: img1,
    title: 'MARRIAGE',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  },
  {
    id: 'card2',
    imgSrc: img2,
    title: 'BIRTHDAY PARTY',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  },
  {
    id: 'card3',
    imgSrc: img3,
    title: 'BABY SHOWER',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  },
  {
    id: 'card4',
    imgSrc: img4,
    title: 'SURPRISE PLANS',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  },
  {
    id: 'card5',
    imgSrc: img5,
    title: 'HOME PARTY',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  },
  {
    id: 'card6',
    imgSrc: img6,
    title: 'SANGEET',
    addReviewLink: 'https://www.smartcodehub.com/blog',
    learnMoreLink: 'https://www.smartcodehub.com/blog'
  }
];

const Company = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredCompanies = companiesData.filter(company =>
    company.title.toLowerCase().includes(searchQuery)
  ).slice(0, 6); // Limit to 6 cards

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '16px', 
        width: '100%', 
        maxWidth: '1200px', 
        padding: '0 16px'
      }}>
        {filteredCompanies.map(company => (
          <CompanyCard
            key={company.id}
            id={company.id}
            imgSrc={company.imgSrc}
            title={company.title}
            addReviewLink={company.addReviewLink}
            learnMoreLink={company.learnMoreLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Company;

