const express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  uuid = require('uuid');

  const app = express();

//------MiddleWare---------------------------------------------

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride());

app.use(morgan('common'));

app.use(express.static('public'));

//--------READ or GET---------------------------------------------------

//gets all users
app.get('/users', (req, res) => {
	res.status(200).json(users);
});

//gets a user name and their info
app.get('/users/:userName', (req, res) => {
	const { userName } = req.params;
	const user = users.find( user => user.username === userName);

	if(user) {
		res.status(200).json(user);
	}else {
		res.status(400).send('no such name');
	}
});

//gets all movies
app.get('/movies', (req, res) => {
	res.status(200).json(movies);
});

//gets movie title
app.get('/movies/:title', (req, res) => {
	const { title } = req.params;
	// const title = req.params.title;
	const movie = movies.find( movie => movie.title === title );

	if(movie) {
		res.status(200).json(movie);
	}else {
		res.status(400).send('no such movie');
	}
});

//gets movie genre name
app.get('/movies/genre/:genreName', (req, res) => {
	const { genreName } = req.params;
	const genre = movies.find( movie => movie.genre.name === genreName ).genre; //get the genre name alone

	if(genre) {
		res.status(200).json(genre);
	}else {
		res.status(400).send('no such genre');
	}
})

//get movie director name

//gets director name
app.get('/movies/director/:directorName', (req, res) => {
	const { directorName } = req.params;
	const director = movies.find( movie => movie.director.name === directorName ).director; //get the director name alone

	if(director) {
		res.status(200).json(director);
	}else {
		res.status(400).send('no such genre');
	}
})

app.get('/', (req, res) => {
	let responseText = 'Welcome to my movie collection\n';
	res.send(responseText);
});

app.get('/documentation.html', (req, res) => {
	res.sendFile('public/documentation.html', {root: __dirname});
});


//--------CREATE or POST---------------------------------------------------

//adds a user to users array
app.post('/users', (req, res) => {
	const newUser = req.body;

	if(newUser.username) {
		newUser._id = uuid.v4();
		users.push(newUser);
		res.status(201).json(newUser);
	} else {
		res.status(400).send('users need names');
	}
})

//adds a movie to favorite list
app.post('/users/:userId/:movieTitle', (req, res) => {
	const { userId, movieTitle } = req.params;
	
	let user = users.find( user => user._id = userId );

	if(user) {
		user.favoriteMovies.push(movieTitle);
		res.status(201).send('' + movieTitle + ' has been added to user ' + userId + ' favorite movie list');
	} else {
		res.status(400).send('no such user');
	}
})

//--------PUT or UPDATE----------------------------------------------------

//changes user's info
app.put('/users/:userId', (req, res) => {
	const { userId } = req.params;
	const updatedUser = req.body;

	let user = users.find( user => user._id == userId ); //two equal signs means the id is a string

	if (user) {
		user.username = updatedUser.username;
		res.status(200).json(user);
	}else {
		res.status(400).send('no such user');
	}
})

//--------DELETE-----------------------------------------------------------

//deletes a movie from favorite list
app.delete('/users/:userId/:movieTitle', (req, res) => {
	//pulling the id and title from the body request parameter
	const { userId, movieTitle } = req.params;
	//checking users array to see if user exists
	let user = users.find( user => user._id = userId );

	if (user) {
		//filtering only the selected movie title out and keeping the rest
		user.favoriteMovies = user.favoriteMovies.filter( title => title !== movieTitle);
		res.status(200).send('' + movieTitle + ' has been successfully removed from user ' + userId + ' favorite movie list');
	}else {
		res.status(400).send('no such user');
	}
})

//deletes user from array
app.delete('/users/:userId', (req, res) => {
	//pulling the id and title from the body request parameter
	const { userId } = req.params;
	//checking users array to see if user exists
	let user = users.find( user => user._id == userId );

	if (user) {
		//filtering only the selected movie title out and keeping the rest
		users = users.filter( user => user._id != userId);// do not use strict equality!
		res.status(200).send('User ' + userId + ' has been succesfully deleted');
	}else {
		res.status(400).send('no such user');
	}
})

//--------Error Handler----------------------------------------------------

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

//--------END--------------------------------------------------------------

app.listen(8080, () => {
	console.log('Your app is listening on port 8080.');
});