
// import React, { useState } from 'react';
// import Head from './Head';
// import FilterBar from './FilterBar'; // Import the FilterBar component
// import '../assets/styles/List.css';
// import image from '../assets/styles/cardim1.png';
// import image2 from '../assets/styles/hall.jpg';
// import image3 from '../assets/styles/cardim2.png';
// import image4 from '../assets/styles/cardim3.png';
// const companies = [
//   {
//     id: '1',
//     name: 'Wedplanners',
//     image: image,
//     description: 'Wedplanners offers comprehensive wedding planning services, ensuring every detail is perfect for your big day. From venue selection to floral arrangements, we handle it all with elegance and precision.',
//     rating: 5,
//     reviews: 120,
//     price: '1.5L'
//   },
//   {
//     id: '2',
//     name: 'Marriedly',
//     image: image2,
//     description: 'Marriedly specializes in creating bespoke weddings tailored to your unique vision. Our team of expert planners will work with you to craft an unforgettable experience filled with personal touches and extraordinary details.',
//     rating: 4,
//     reviews: 80,
//     price: '2L'
//   },
//   {
//     id: '3',
//     name: 'Just Fun',
//     image: image3,
//     description: 'Just Fun focuses on organizing lively and entertaining events. Whether it\'s a birthday party, anniversary, or corporate event, we bring the fun with creative themes, engaging activities, and vibrant decor.',
//     rating: 3,
//     reviews: 50,
//     price: '3L'
//   },
//   {
//     id: '4',
//     name: 'Weddays',
//     image: image4,
//     description: 'Weddays is dedicated to making your wedding day truly special. With our personalized planning services, we ensure that your wedding reflects your style and personality, creating memories that last a lifetime.',
//     rating: 4,
//     reviews: 200,
//     price: '2.5L'
//   }
// ];


// const List = () => {
//   const [filters, setFilters] = useState({
//     starRating: 'Any',
//     reviewCount: 'Any',
//     priceRange: 'Any'
//   });

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   const filteredCompanies = companies.filter(company => {
//     return (
//       (filters.starRating === 'Any' || company.rating.toString() === filters.starRating) &&
//       (filters.reviewCount === 'Any' || company.reviews >= parseInt(filters.reviewCount)) &&
//       (filters.priceRange === 'Any' || company.price === filters.priceRange)
//     );
//   });

//   return (
//     <div className="list-page">
//       <div className="original-navbar">
//         {/* Your original navbar here */}
//       </div>
//       <div className="filter-bar-container">
//         <FilterBar onFilterChange={handleFilterChange} />
//       </div>
//       <div className="list-container">
//         {filteredCompanies.map((company, index) => (
//           <div
//             className="container py-3"
//             key={company.id}
//             style={{ animationDelay: `${index * 0.5}s` }}
//           >
//             <div className="card">
//               <Head company={company} id={company.id} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;




import React, { useState } from 'react';
import Head from './Head';
import FilterBar from './FilterBar'; // Import the FilterBar component
import '../assets/styles/List.css';
import image from '../assets/styles/cardim1.png';
import image2 from '../assets/styles/hall.jpg';
import image3 from '../assets/styles/cardim2.png';
import image4 from '../assets/styles/cardim3.png';

const companies = [
  {
    id: '1',
    name: 'Wedplanners',
    image: image,
    description: 'Wedplanners offers comprehensive wedding planning services, ensuring every detail is perfect for your big day. From venue selection to floral arrangements, we handle it all with elegance and precision.',
    rating: 5,
    reviews: 120,
    price: '1.5L'
  },
  {
    id: '2',
    name: 'Marriedly',
    image: image2,
    description: 'Marriedly specializes in creating bespoke weddings tailored to your unique vision. Our team of expert planners will work with you to craft an unforgettable experience filled with personal touches and extraordinary details.',
    rating: 4,
    reviews: 80,
    price: '2L'
  },
  {
    id: '3',
    name: 'Just Fun',
    image: image3,
    description: 'Just Fun focuses on organizing lively and entertaining events. Whether it\'s a birthday party, anniversary, or corporate event, we bring the fun with creative themes, engaging activities, and vibrant decor.',
    rating: 3,
    reviews: 50,
    price: '3L'
  },
  {
    id: '4',
    name: 'Weddays',
    image: image4,
    description: 'Weddays is dedicated to making your wedding day truly special. With our personalized planning services, we ensure that your wedding reflects your style and personality, creating memories that last a lifetime.',
    rating: 4,
    reviews: 200,
    price: '2.5L'
  }
];

const List = () => {
  const [filters, setFilters] = useState({
    starRating: 'Any',
    reviewCount: 'Any',
    priceRange: 'Any'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredCompanies = companies.filter(company => {
    return (
      (filters.starRating === 'Any' || company.rating.toString() === filters.starRating) &&
      (filters.reviewCount === 'Any' || company.reviews >= parseInt(filters.reviewCount)) &&
      (filters.priceRange === 'Any' || company.price === filters.priceRange)
    );
  });

  return (
    <div className="list-page">
      <div className="original-navbar">
        {/* Your original navbar here */}
      </div>
      <div className="filter-bar-container">
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
      <div className="list-container">
        {filteredCompanies.map((company, index) => (
          <div
            className="container py-3"
            key={company.id}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className="card">
              <Head company={company} id={company.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
