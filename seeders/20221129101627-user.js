'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[{
      role: 'admin',
      name :'Isha',
      phoneNo : '45212468752',
      email: 'isha@gmail.com',
      password : 'Xornor@123',
      deviceType: 1,
      createdAt : new Date(),
      updatedAt : new Date()
   }],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',null , {});
  }
};
