const express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
  	methodOverride = require('method-override');

let movies = [
	{
		title:'The Passion of the Christ',
		director:'Mel Gibson'
	},
	{
		title:'Planet Earth II',
		director: 'Sir David Attenborough'
	},
	{
		title:'Blue Planet II',
		director: 'Sir David Attenborough'
	},
	{
		title:'Lord of the Rings',
		director:'Peter Jackson'
	},
	{
		title:'Castaway',
		director: 'Robert Zemeckis'
	},
	{
		title:'Interstellar',
		director:'Christopher Nolan'
	},
	{
		title:'Gladiator',
		director:'Ridley Scott'
	},
	{
		title:'A Night at the Opera',
		director:'Sam Wood'
	},
	{
		title:'Muppet Christmas Carol',
		director:'Brian Henson'
	},
	{
		title:'Its a Wonderful Life',
		director:'Frank Capra'
	}
]

//------MiddleWare---------------------------------------------

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

app.use(morgan('common'));

app.use(express.static('public'));

//--------GET---------------------------------------------------

app.get('/', (req, res) => {
	let responseText = 'Welcome to my movie collection\n';
	res.send(responseText);
});

app.get('/documentation.html', (req, res) => {
	res.sendFile('public/documentation.html', {root: __dirname});
});

app.get('/movies', (req, res) => {
	res.json(movies);
});

//--------POST---------------------------------------------------


//--------PUT----------------------------------------------------


//--------DELETE-------------------------------------------------

app.listen(8080, () => {
	console.log('Your app is listening on port 8080.');
});