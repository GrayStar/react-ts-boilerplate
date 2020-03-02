const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const serialize = require('serialize-javascript');

const port = process.env.PORT || 8080;

function configureReactApp(indexFilePath) {
	const reactAppConfig = Object.entries(process.env)
		.filter(([envVar]) => envVar.startsWith('REACT_TS_'))
		.reduce((env, [envVar, value]) => {
			env[envVar] = value;
			return env;
		}, {});

	const serializedConfig = serialize(reactAppConfig);

	const indexFile = fs.readFileSync(indexFilePath, 'utf8');
	const $ = cheerio.load(indexFile);
	const configScript = $('script#react-app-env-config');

	if (configScript.length > 0) {
		configScript.text(serializedConfig);
	} else {
		$('head').append(
			`<script id="react-app-env-config" type="application/json">${serializedConfig}</script>`
		);
	}

	fs.writeFileSync(indexFilePath, $.html());
}

configureReactApp(path.resolve(__dirname, 'build', 'index.html'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

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
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(
		'> App Ready on http://localhost:%d in %s mode',
		port,
		process.env.NODE_ENV
	);
});
