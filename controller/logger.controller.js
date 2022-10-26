import config from 'config';
import fs from 'fs';

const loggerController = {};

loggerController.readLog = (req, res) => {
  fs.readFile(config.get('logger'), "utf8", function(err, data){
    if(err) fs.writeFile(config.get('logger'),'', { mode: 0o755 }, () => {});

    var resultArray = data;

    res.status(200).send(resultArray);
  });
}

loggerController.clearLog = (req, res) => {
  fs.truncate(config.get('logger'), 0, function(){
    res.status(200).send('Log limpo com sucesso.');
  })
}

export default loggerController;
