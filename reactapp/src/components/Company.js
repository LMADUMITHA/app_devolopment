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
    <div>
      <div className="search-container">
        <div className="search-title">Embracing Happiness</div>
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
  display: 'flex',
  justifyContent: 'center', /* Center the grid container */
  padding: '0 16px'
}}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    width: '100%',
    maxWidth: '1200px'
  }}>
    {filteredCompanies.length > 0 ? (
      filteredCompanies.map(company => (
        <CompanyCard
          key={company.id}
          id={company.id}
          imgSrc={company.imgSrc}
          title={company.title}
          addReviewLink={company.addReviewLink}
          learnMoreLink={company.learnMoreLink}
        />
      ))
    ) : (
      <p>No companies found</p>
    )}
  </div>
</div>

    </div>
  );
};

export default Company;
