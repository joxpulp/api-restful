import express from 'express';
import path from 'path';
import Productos from './routes/products';

const port = 8080;
const app = express();

// Indica que el servidor esta levantado y corriendo en puerto especificado
const server = app.listen(port, () => {
	console.log(`Server running in port:  ${port}`);
});

// Indicar un error que de el servidor.
server.on('error', (err) => {
	console.error(`There was an error: ${err}`);
});

app.set('json spaces', 2);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use(express.json()); // Indica que el body viene como JSON
app.use(express.urlencoded({ extended: true })); // Indica que el body puede tener un informacion como no string

// Router de la API Productos
app.use('/api', Productos);
