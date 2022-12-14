const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const error = require('./middleware/error');
const load = require('express-load');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override')


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
app.use(methodOverride('_method'))

// config. para utlizar arquivos da pasta public
app.use(express.static(__dirname + '/public'));




// config. para carregar os arquivos as respectivas pastas
load('models')
.then('controllers')
.then('routes')
.into(app);

// config routes to error pages.
app.use(error.notFound);
app.use(error.serverError);

io.sockets.on('connection', function (client) {
  client.on('send-server', function (data) {
  var msg = "<b>"+data.name+":</b> "+data.msg+"<br>";
  client.emit('send-client', msg);
  client.broadcast.emit('send-client', msg);
  });
});

server.listen(3000, () => {
  console.log('Ntalk está funcionando corretamente!');
})