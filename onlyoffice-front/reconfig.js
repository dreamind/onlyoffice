var fs = require('fs');
var baseDir = process.env.BASE_DIR || '.';
var targetEnv = process.env.NODE_ENV || 'default';
var targetFile = baseDir + '/config/' + targetEnv + '.json';
var config = require(baseDir + '/config/default-template.json');

config.server.port = parseInt(process.env.FRONTEND_PORT) || 3004;
config.server.siteUrl = process.env.DOCSERVER_URL || 'http://localhost:9004/';

fs.writeFile(targetFile, JSON.stringify(config), function (err) {
  if (err) return console.log(err);
});