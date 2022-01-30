import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './src/routes/index.js';
import mongoose from "mongoose";

const app = express();
const port = app.set('port', process.env.Port || 3000);
const __dirname = path.resolve();

const urlDB = 'mongodb://localhost:27017/prueba-banco-ripley';
mongoose.Promise = global.Promise;
mongoose.connect(urlDB)
    .then(mongoose => console.log('Conectando a la base de datos'))
    .catch(e => console.log(e));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src','public')));

app.use('/api', router);

app.listen(port.get('port'), () => {
    console.log('Server on port: ' + port.get('port'));
    console.log('Route Main: ' + path.join(__dirname,'src','public'));
});
