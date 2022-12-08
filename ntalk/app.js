const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override')

const app = express();

// configuração para utilizar ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// cookie parser - habilitar os cookies
app.use(cookieParser('ntalk'))

// express session - configuração da sessão e cookies
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// body parser - converter objetos
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

// method override - permite utilizar um mesmo path entre ps métodos HTTP
// app.use(methodOverride());
app.use(methodOverride('X-HTTP-Method-Override'));

// config. para utlizar arquivos da pasta public
app.use(express.static(__dirname + '/public'));

// config. para carregar os arquivos as respectivas pastas
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, () => {
  console.log('Ntalk está funcionando corretamente!');
})