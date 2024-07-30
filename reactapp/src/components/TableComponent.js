// import React from 'react';

// const tableStyles = {
//   width: '100%',
//   marginTop: '20px',
// };

// const tableElementStyles = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   borderRadius: '16px 16px 0px 0px',
//   overflow: 'hidden',
// };

// const theadStyles = {
//   backgroundColor: '#920649',
//   color: '#fff',
// };

// const cellStyles = {
//   padding: '15px',
//   whiteSpace: 'nowrap',
//   textAlign: 'left',
//   fontSize: '18px',
//   textTransform: 'capitalize',
// };

// const rowOddStyles = {
//   background: '#b4b4b442',
//   color: '#000',
//   fontWeight: 500,
// };

// const rowBorderStyles = {
//   border: '1px solid #ddd',
// };

// const TableComponent = () => {
//   const data = [
//     { id: 1, name: 'Nilu yadav', phone: '913547589', address: 'surat', status: 'active' },
//     { id: 2, name: 'Ashwini Gaykwad', phone: '8800376459', address: 'chennai', status: 'active' },
//     { id: 3, name: 'Ankita makwana', phone: '900025467', address: 'bharuch', status: 'active' },
//     { id: 4, name: 'priyanka singh', phone: '8866737389', address: 'vapi', status: 'active' },
//     { id: 5, name: 'Dipika patel', phone: '8866737389', address: 'vadodra', status: 'active' },
//   ];

//   return (
//     <div style={{ padding: '0px 16px' }}>
//       <div style={tableStyles}>
//         <table style={tableElementStyles}>
//           <thead style={theadStyles}>
//             <tr>
//               <th>sr no.</th>
//               <th>Name</th>
//               <th>phone no.</th>
//               <th>address</th>
//               <th>status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={item.id} style={index % 2 === 0 ? {} : rowOddStyles}>
//                 <td style={rowBorderStyles}>{item.id}</td>
//                 <td style={rowBorderStyles}>{item.name}</td>
//                 <td style={rowBorderStyles}>{item.phone}</td>
//                 <td style={rowBorderStyles}>{item.address}</td>
//                 <td style={{ ...rowBorderStyles, ...cellStyles }}>{item.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;


import React from 'react';

const tableStyles = {
  width: '100%',
  marginTop: '20px',
};

const tableElementStyles = {
  borderCollapse: 'collapse',
  width: '100%',
  borderRadius: '16px 16px 0px 0px',
  overflow: 'hidden',
};

const theadStyles = {
  backgroundColor: '#c7770f',
  color: '#fff',
};

const cellStyles = {
  padding: '15px',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  fontSize: '18px',
  textTransform: 'capitalize',
  color:'#fff'
};

const rowOddStyles = {
  background: '#b4b4b442',
  color: '#fff',
  fontWeight: 500,
};

const rowBorderStyles = {
  border: '1px solid #ddd',
  color:'#fff'
};

const TableComponent = () => {
  const data = [
    { id: 1, name: 'Nilu yadav', phone: '913547589', address: 'surat', status: 'active' },
    { id: 2, name: 'Ashwini Gaykwad', phone: '8800376459', address: 'chennai', status: 'active' },
    { id: 3, name: 'Ankita makwana', phone: '900025467', address: 'bharuch', status: 'active' },
    { id: 4, name: 'priyanka singh', phone: '8866737389', address: 'vapi', status: 'active' },
    { id: 5, name: 'Dipika patel', phone: '8866737389', address: 'vadodra', status: 'active' },
  ];

  return (
    <div style={{ padding: '0px 16px' }}>
      <div style={tableStyles}>
        <table style={tableElementStyles}>
          <thead style={theadStyles}>
            <tr>
              <th>sr no.</th>
              <th>Name</th>
              <th>phone no.</th>
              <th>address</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} style={index % 2 === 0 ? {} : rowOddStyles}>
                <td style={rowBorderStyles}>{item.id}</td>
                <td style={rowBorderStyles}>{item.name}</td>
                <td style={rowBorderStyles}>{item.phone}</td>
                <td style={rowBorderStyles}>{item.address}</td>
                <td style={{ ...rowBorderStyles, ...cellStyles }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
