var Sequelize = require('sequelize');
var sequelize = new Sequelize('mkk', 'root', '123456', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
})
sequelize.authenticate()
.then(function(err) {
  console.log('connect success');
})
.catch(function (err) {
  console.log(err);
});
module.exports = sequelize;
