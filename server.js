var express = require('express')
      , cors = require('cors')
      , app = express()
      , bodyParser = require('body-parser')
      , multiparty = require('connect-multiparty');
      
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors({
        origin: "*"
  }))
  var port = process.env.PORT || 8080;
  var router = express.Router();
  
  app.use('/api', router);
        /*insira as rotas aqui */
  router.route('/upload')
        .post(multiparty(), require('./controllers/uploadController'));

  app.use('/enviadas', express.static(__dirname  + '/uploads'));

  app.listen(port);    
  console.log('conectado a porta ' + port);
