const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../database/models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nome "User"', () => {
    checkModelName(User)('user');
  });

  describe('possui as propriedades "name", "email", "password", "role" ', () => {
    ['name', 'email', 'password', 'role'].forEach(checkPropertyExists(user));
  });
});

