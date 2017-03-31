var Sequelize = require('sequelize');
var sequelize = require('./../mysql');

var Note = sequelize.define('m_note', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    },
    image_path: {
      type: Sequelize.STRING
    },
    readcount_init: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    readcount_actual: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  },
  {
    freezeTableName: 'false'
  }
);
Note.sync().then(function(){
  console.log("note success");
});
module.exports = Note;
