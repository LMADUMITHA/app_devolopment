// const users = [];

// export const addUser = (user) => {
//   users.push(user);
// };

// export const findUser = (username, password) => {
//   return users.find(user => user.username === username && user.password === password);
// };


// src/data/users.js

// src/data/users.js
// const clients = [
//   { username: 'client1', password: 'password1' },
//   { username: 'client2', password: 'password2' },
//   // Additional clients can be added here
// ];

// const owners = [
//   { username: 'owner1', password: 'password1', company: 'THEJU WEDDING PLANNERS' },
//   { username: 'owner2', password: 'password2', company: 'REENA EVENTS' },
//   // Additional owners can be added here
// ];

// export const findUser = (username, password) => {
//   const owner = owners.find(o => o.username === username && o.password === password);
//   if (owner) {
//       return { ...owner, isOwner: true };
//   }

//   const client = clients.find(c => c.username === username && c.password === password);
//   if (client) {
//       return { ...client, isOwner: false };
//   }

//   return null;
// };

// export const addUser = (username, password) => {
//   clients.push({ username, password });
// };

// // Export owners array
// export { owners };


// users.js
// users.js
// const owners = [
//   { username: 'owner1', password: 'password1', company: 'THEJU WEDDING PLANNERS' },
//   { username: 'owner2', password: 'password2', company: 'REENA EVENTS' },
//   // Add more owners as needed
// ];

// const clients = [
//   { username: 'client1', password: 'password1' },
//   { username: 'client2', password: 'password2' },
//   // Add more clients as needed
// ];

// export const findUser = (username, password) => {
//   const owner = owners.find(o => o.username === username && o.password === password);
//   if (owner) {
//     return { ...owner, isOwner: true };
//   }

//   const client = clients.find(c => c.username === username && c.password === password);
//   if (client) {
//     return { ...client, isOwner: false };
//   }

//   return null;
// };

// // Add the function for adding new users
// export const addUser = (username, password) => {
//   clients.push({ username, password });
// };


// data/users.js
const clients = [
  { username: 'client1', password: 'password1' },
  { username: 'client2', password: 'password2' },
  // Additional clients can be added here
];

const owners = [
  { username: 'owner1', password: 'password1', company: 'THEJU WEDDING PLANNERS' },
  { username: 'owner2', password: 'password2', company: 'REENA EVENTS' },
  // Additional owners can be added here
];

export const findUser = (username, password) => {
  const owner = owners.find(o => o.username === username && o.password === password);
  if (owner) {
      return { ...owner, isOwner: true };
  }

  const client = clients.find(c => c.username === username && c.password === password);
  if (client) {
      return { ...client, isOwner: false };
  }

  return null;
};

// Implement the addUser function
export const addUser = (username, password) => {
  clients.push({ username, password });
};
