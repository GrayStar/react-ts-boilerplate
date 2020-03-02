const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production';
const reactAppDirectoryName = isProd ? 'build' : 'public';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, reactAppDirectoryName)));

app.get('/health-check', (_req, res) => {
	res.send('OK');
});

app.get('/configuration', (_req, res) => {
	res.json({
		version: 'TBD',
		nodeIdentifier: 'TBD',
	});
});

app.get('*', (_req, res) => {
	res.sendFile(path.join(__dirname, reactAppDirectoryName, 'index.html'));
});

app.listen(port, () => {
	console.log(
		'> App Ready on http://localhost:%d in %s mode',
		port,
		process.env.NODE_ENV
	);
});
