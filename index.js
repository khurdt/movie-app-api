const express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  uuid = require('uuid'),
  mongoose = require('mongoose'),
  Models = require('./models.js');

  const Movies = Models.Movie;
  const Users = Models.User;
  const app = express();

  mongoose.connect('mongodb://localhost:27017/movieDB', { 
  	useNewUrlParser: true, useUnifiedTopology: true 
  });

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
	Users.find()
		.then((users) => {
			res.status(201).json(users);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send('Error ' + err);
		})
});

//gets a user name and their info
app.get('/users/:username', (req, res) => {
	Users.findOne({ username: req.params.username })
	.then((user) => {
		res.json(user);
	})
	.catch((err) => {
		console.error(err);
		res.status(500).send('Error: ' + err);
	});
});

//gets all movies
app.get('/movies', (req, res) => {
	Movies.find().then((users) => {
		res.status(200).json(users);
	})
	.catch((err) => {
		console.error(err);
		res.status(500).send('Error ' + err);
	})
});

//gets movie title
app.get('/movies/:title', (req, res) => {
	Movies.find({title: req.params.title}).then((movies) => {
		res.json(movies);
	})
	.catch((err) => {
			console.error(err);
			res.status(500).send('Error ' + err);
		})
});

//gets movie genre name
app.get('/genre/:name', (req, res) => {
	Genres.find({ name: req.params.name})
	.then((genre) => {
		res.json(genre.description);
	})
	.catch((err) => {
		console.error(err);
		res.status(500).send('Error ' + err);
	})
})

//get movie director name

//gets director name
app.get('/director/:name', (req, res) => {
	Directors.findOne({ name: req.params.name})
	.then((director) => {
		res.json(director);
	})
	.catch((err) => {
		console.error(err);
		res.status(500).send('Error ' + err);
	})
})

app.get('/', (req, res) => {
	let responseText = 'Welcome to my movie collection\n';
	res.send(responseText);
});

app.get('/documentation.html', (req, res) => {
	res.sendFile('public/documentation.html', {root: __dirname});
});

//--------CREATE or POST---------------------------------------------------

//adds a user to users collection
app.post('/users', (req, res) => {
	Users.findOne({ username: req.body.username })
		.then((user) => {
			if (user) {
				return res.status(400).send(req.body.username + ' already exists');
			}else {
				Users.create({
					username: req.body.username,
					password: req.body.password,
					email: req.body.email,
					birthday: req.body.birthday
				})
				.then((user) => {
					res.status(201).json(user) 
				})
				.catch((error) => {
					console.error(error);
					res.status(500).send('Error: ' + error);
				})
			}
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send('Error: ' + error);
		})
})

//adds a movie to favorite list
app.post('/users/:username/movies/:MovieID', (req, res) => {
	Users.findOneAndUpdate({ username: req.params.username }, 
		{ $push: { favoriteMovies: req.params.MovieID }
	},
	{ new: true }, //This line makes sure that the updated document is returned
	(err, updatedUser) => {
		if(err) {
			console.error(err);
			res.status(500).send('Error: ' + err);
		} else {
			res.json(updatedUser);
		}
	});
});

//--------PUT or UPDATE----------------------------------------------------

//changes user's info
app.put('/users/:username', (req, res) => {
	Users.findOneAndUpdate({ username: req.params.username }, 
		{$set: {
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			birthday: req.body.birthday
			}
		},
		{ new: true },// This line makes sure that the updated document is returned
		(err, updatedUser) => {
			if(err) {
				console.error(err);
				res.status(500).send('Error: ' + err);
			} else {
				res.json(updatedUser);
			}
		});
});

//--------DELETE-----------------------------------------------------------

//deletes a movie from favorite list
app.delete('/users/:username/movies/:MovieID', (req, res) => {
	Users.findOneAndUpdate({ username: req.params.username }, 
		{ $pull: { favoriteMovies: req.params.MovieID }
	},
	{ new: true }, //This line makes sure that the updated document is returned
	(err, updatedUser) => {
		if(err) {
			console.error(err);
			res.status(500).send('Error: ' + err);
		} else {
			res.json(updatedUser);
		}
	});
});

//deletes user from users collection
app.delete('/users/:username', (req, res) => {
	Users.findOneAndRemove({ username: req.params.username })
	.then((user) => {
		if(!user) {
			res.status(400).send(req.params.username + ' was not found');
		}else {
			res.status(200).send(req.params.username + ' was deleted');
		}
	}).catch((err) => {
		console.error(err);
		res.status(500).send('Error: ' + err);
	});
});

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