const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const JWT = require('jsonwebtoken');
const DB = require('./db.js');

const APP = EXPRESS();
const SECRET = 'token-secreto';

APP.use(BODY_PARSER.json());
APP.use(
  BODY_PARSER.urlencoded({
    extended: true,
  })
);

APP.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
});

APP.post('/get-categorias', async (req, res) => {
  const SQL = await DB.connect();
  const [CATEGORIAS] = await SQL.execute(
    'SELECT * FROM `tb_categorias`'
  );
  console.log(CATEGORIAS);
  res.jsonp(CATEGORIAS);
});

APP.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000!');
});
