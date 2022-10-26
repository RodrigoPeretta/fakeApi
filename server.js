import moment from 'moment';
import app from "./config/express.js";

const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get('/', function (req, res) {
  res.send(`${moment().format('DD-MM-YYYY, HH:mm')} | Api Funcionando!!!`)
})

