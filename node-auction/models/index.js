const Sequelize = require('sequelize');

const User = require('./user');
const Good = require('./good');
const Auction = require('./auction');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  process.env.DB_DEV_DATABASE, 
  process.env.DB_DEV_USERNAME,
  process.env.DB_DEV_PASSWORD,
  config,
);

db.sequelize = sequelize;
db.User = User;
db.Good = Good;
db.Auction = Auction;

User.init(sequelize);
Good.init(sequelize);
Auction.init(sequelize);

User.associate(db);
Good.associate(db);
Auction.associate(db);

module.exports = db;