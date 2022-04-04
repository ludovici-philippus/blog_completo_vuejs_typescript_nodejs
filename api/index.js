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
  res.jsonp(CATEGORIAS);
});

APP.post('/get-posts', async (req, res) => {
  const SQL = await DB.connect();
  const [POSTS] = await SQL.execute(
    'SELECT * FROM `tb_posts`'
  );
  console.log(POSTS);
  res.jsonp(POSTS);
});

APP.post('/get-posts-categoria', async (req, res) => {
  const SLUG_CATEGORIA = req.body.categoria;

  const SQL = await DB.connect();
  const [POSTS] = await SQL.execute(
    'SELECT * FROM `tb_posts` WHERE slug_categoria=?',
    [SLUG_CATEGORIA]
  );

  res.jsonp(POSTS);
})

APP.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000!');
});
