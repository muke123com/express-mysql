var Sequelize = require('sequelize');
var sequelize = new Sequelize('member', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
})
sequelize.authenticate()
.then(function(err) {
  console.log('���ӳɹ�.');
})
.catch(function (err) {
  console.log(err);
});
module.exports = sequelize;
