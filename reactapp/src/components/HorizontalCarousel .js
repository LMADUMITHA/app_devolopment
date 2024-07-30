import React from 'react';

const companiesData = [
  {
    id: 'card1',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'Angular Typescript'
  },
  {
    id: 'card2',
    imgSrc: 'https://cdn-images-1.medium.com/max/1600/1*xQW9Spiz8U0tNEuX_m2blw.jpeg',
    title: 'Angular Tutorial'
  },
  {
    id: 'card3',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'Typescript Tutorial'
  },
  {
    id: 'card4',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'React Basics'
  },
  {
    id: 'card5',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'Node.js Guide'
  },
  {
    id: 'card6',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'Express.js Tutorial'
  },
  {
    id: 'card7',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'MongoDB Guide'
  },
  {
    id: 'card8',
    imgSrc: 'https://cdn-images-1.medium.com/max/720/1*aWXAr1bHFtP81is4XwYgrw.png',
    title: 'JavaScript Basics'
  }
];

const HorizontalCarousel = () => {
  return (
    <div style={carouselContainerStyle}>
      <div style={carouselTrackStyle}>
        {companiesData.map(company => (
          <div key={company.id} style={cardStyle}>
            <img src={company.imgSrc} alt={company.title} style={imgStyle} />
            <h4>{company.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const carouselContainerStyle = {
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  padding: '20px 0',
  boxSizing: 'border-box'
};

const carouselTrackStyle = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  minWidth: '100%'
};

const cardStyle = {
  display: 'inline-block',
  width: '150px',
  marginRight: '16px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center'
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px'
};

export default HorizontalCarousel;
