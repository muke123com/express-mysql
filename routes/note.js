'user strict'
const express = require('express');
const Sequelize = require('sequelize');

const sequelize = require('./../mysql');
const Note = require('./../model/Note');
const router = express.Router();
// sequelize.sync().then(function(){
//   console.log('Note success');
// })
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getNotelist', function(req, res, next) {
  Note.findAll({order : 'createdAt desc'}).then(function(data) {
    res.send(data);
  })
});

router.post('/readNote', function(req, res, next) {
  let id = req.body.id;
  sequelize.query('update m_note set readcount_actual = readcount_actual +1 where id =' + id);
})

router.post('/getNoteDetail', function(req, res, next) {
  let id = req.body.id;
  Note.findAll({
    where: {
      id: id
    }
  }).then(function(data) {
    res.send(data);
  })
});
router.post('/saveNote', function(req, res, next) {
  let data = req.body;
  var nowDate = new Date(new Date().getTime() + 28800000);
  data.createdAt = nowDate;
  data.updatedAt = nowDate;
  Note.create(data).then(function() {
    res.send({'msg': 'add success'});
  })
});
router.post('/updateNote', function(req, res, next) {
  let id = req.body.id;
  let data = req.body;
  var nowDate = new Date(new Date().getTime() + 28800000);
  data.updatedAt = nowDate;
  Note.update(data, {
    where: {
      id: id
    }
  }).then(function() {
    res.send({'msg': 'edit success'});
  })
});

module.exports = router;
