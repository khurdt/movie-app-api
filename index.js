const express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  uuid = require('uuid');

  const app = express();

let users = [
	{
		id: 1,
		name: 'Kim',
		favoriteMovies: ['Castaway'],
	},
	{
		id: 2,
		name: 'Carlos',
		favoriteMovies: [],
	},
	{
		id: 3,
		name: 'Bob',
		favoriteMovies: [],
	},
]

let movies = [
	{
		title:'The Passion of the Christ',
		description:'The passion of Jesus Christ is displayed from the gospels as the dying Savior for evil, corrupt man. Even as Jesus is being crucified does he take on the wrath of God',
		director: {
			name: 'Mel Gibson',
			bio: 'Mel Columcille Gerard Gibson is an American actor, film director, producer, and screenwriter. He is best known for his action hero roles, particularly his breakout role as Max Rockatansky in the first three films of the post-apocalyptic action series Mad Max and as Martin Riggs in the buddy cop film series Lethal Weapon. Born in Peekskill, New York, Gibson moved with his parents to Sydney, Australia, when he was 12 years old. He studied acting at the National Institute of Dramatic Art, where he starred opposite Judy Davis in a production of Romeo and Juliet. During the 1980s, he founded Icon Entertainment, a production company, which independent film director Atom Egoyan has called "an alternative to the studio system".[5] Director Peter Weir cast him as one of the leads in the World War I drama Gallipoli (1981), which earned Gibson a Best Actor Award from the Australian Film Institute,[6] as well as a reputation as a serious, versatile actor.',
			birth: 'January 3, 1956'
		},
		genre: {
			name: 'drama',
			description: 'drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
		} 
	},
	{
		title:'Planet Earth II',
		description: 'Planet Earth II is a 2016 British nature documentary series produced by the BBC as a sequel to Planet Earth, which was broadcast in 2006. The series is presented and narrated by Sir David Attenborough with the main theme music composed by Hans Zimmer.',
		director: {
			name: 'Sir David Attenborough',
			description: 'Sir David Frederick Attenborough is an English broadcaster, natural historian and author. He is best known for writing and presenting, in conjunction with the BBC Natural History Unit, the nine natural history documentary series forming the Life collection, a comprehensive survey of animal and plant life on Earth.',
			birth: 'May 8, 1926'		
		},
		genre: {
			name: 'Documentary',
			description: 'documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education, or maintaining a historical record".',
		} 
	},
	{
		title:'Blue Planet II',
		description: 'Blue Planet II is a 2017 British nature documentary series on marine life produced by the BBC Natural History Unit. Like its predecessor, The Blue Planet (2001), it is narrated and presented by naturalist Sir David Attenborough, while the main music score was composed by Hans Zimmer.',
		director: {
			name: 'Sir David Attenborough',
			description:  'Sir David Frederick Attenborough is an English broadcaster, natural historian and author. He is best known for writing and presenting, in conjunction with the BBC Natural History Unit, the nine natural history documentary series forming the Life collection, a comprehensive survey of animal and plant life on Earth.',
			birth: 'May 8, 1926'	
		},
		genre: {
			name: 'Documentary',
			description: 'documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education, or maintaining a historical record".',
		} 
	},
	{
		title: 'Lord of the Rings',
		description: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkiens 1937 childrens book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.',
		director: {
			name: 'Peter Jackson',
			description: 'Sir Peter Robert Jackson is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
			birth: 'October 31, 1961'
		},
		genre: {
			name: 'Adventure',
			description: 'An adventure film is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war.',
		} 
	},
	{
		title:'Castaway',
		description: 'Cast Away is a 2000 American survival drama film directed and produced by Robert Zemeckis and starring Tom Hanks, Helen Hunt, and Nick Searcy. Hanks plays a FedEx troubleshooter stranded on an uninhabited island after his plane crashes in the South Pacific, and the plot focuses on his desperate attempts to survive and return home. Initial filming took place from January to March 1999 before resuming in April 2000 and concluding that May. Cast Away was released on December 22, 2000 by 20th Century Fox in North America and DreamWorks Pictures in its international markets. It grossed $429 million worldwide.',
		director: {
			name: 'Robert Zemeckis',
			description: 'Robert Lee Zemeckis is an American film director, producer, and screenwriter. He first came to public attention as the director of the action-adventure romantic comedy Romancing the Stone (1984), the science-fiction comedy Back to the Future film trilogy (1985–90), and the live-action/animated comedy Who Framed Roger Rabbit (1988). He subsequently directed the satirical black comedy Death Becomes Her (1992) and then diversified into more dramatic fare, including Forrest Gump (1994),[4] for which he won the Academy Award for Best Director and the film won Best Picture. He has directed films across a wide variety of genres, for both adults and families.',
			birth: 'May 14, 1951',
		},
		genre: {
			name: 'Adventure',
			description: 'An adventure film is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war.',
		} 
	},
	{
		title:'Interstellar',
		description: 'Interstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.',
		director: {
			name: 'Christopher Nolan',
			description: 'Christopher Edward Nolan is a British-American film director, producer, and screenwriter. His films have grossed more than US$5 billion worldwide, and have garnered 11 Academy Awards from 36 nominations.',
			birth: 'July 30, 1970',
		},
		genre: {
			name: 'Adventure',
			description: 'An adventure film is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war.',
		} 
	},
	{
		title:'Gladiator',
		description: 'Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures. DreamWorks Pictures distributed the film in North America while Universal Pictures released it internationally through United International Pictures. It stars Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed (in his final role), Djimon Hounsou, Derek Jacobi, John Shrapnel, Richard Harris, and Tommy Flanagan. Crowe portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.',
		director: {
			name: 'Ridley Scott',
			description: 'Sir Ridley Scott is an English film director and producer. He has directed, among others, the science fiction films Alien (1979), Blade Runner (1982) and The Martian (2015), the road crime film Thelma & Louise (1991), the historical drama film Gladiator (2000), and the war film Black Hawk Down (2001).',
			birth: 'November 30, 1937'
		},
		genre: {
			name: 'Adventure',
			description: 'An adventure film is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war.',
		} 
	},
	{
		title:'A Night at the Opera',
		description: 'A Night at the Opera is a 1935 American comedy film starring the Marx Brothers, and featuring Kitty Carlisle, Allan Jones, Margaret Dumont, Sig Ruman, and Walter Woolf King. It was the first of five films the Marx Brothers made under contract for Metro-Goldwyn-Mayer after their departure from Paramount Pictures, and the first after Zeppo left the act. The film was written by George S. Kaufman and Morrie Ryskind from a story by James Kevin McGuinness, with additional uncredited dialogue by Al Boasberg. The film was directed by Sam Wood.',
		director: {
			name: 'Sam Wood',
			description: 'Samuel Grosvenor Wood was an American film director and producer, who is best known for having directed such Hollywood hits as A Night at the Opera, A Day at the Races, Goodbye, Mr. Chips, and The Pride of the Yankees, and for his uncredited work directing parts of Gone with the Wind. He was also involved in a few acting and writing projects.',
			birth: 'July 10, 1883 - September 22, 1949'
		},
		genre: {
			name: 'Comedy',
			description: 'A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending. One of the oldest genres in film—and derived from the classical comedy in theatre—some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films took another swing, as laughter could result from burlesque situations but also dialogue.',
		} 
	},
	{
		title:'Muppet Christmas Carol',
		description: 'The Muppet Christmas Carol is a 1992 American Christmas film directed by Brian Henson (in his feature directorial debut) from a screenplay by Jerry Juhl. Adapted from the 1843 novella A Christmas Carol by Charles Dickens, it stars Michael Caine as Ebenezer Scrooge, alongside Muppet performers Dave Goelz, Steve Whitmire, Jerry Nelson, and Frank Oz. Although artistic license is taken to suit the aesthetic of the Muppets, The Muppet Christmas Carol otherwise follows Dickens original story closely.[4] It is the fourth theatrical film in The Muppets franchise, and the first to be produced following the deaths of the Muppets creator Jim Henson and the performer Richard Hunt; the film is dedicated to both.',
		director: {
			name: 'Brian Henson',
			description: 'Brian Henson is an American puppeteer, director, producer, technician, and the chairman of The Jim Henson Company. He is the son of puppeteers Jim and Jane Henson.',
			birth: 'November 3, 1963',
		},
		genre: {
			name: 'Family',
			description: 'family film, is a film genre that contains children or relates to them in the context of home and family. Childrens films are made specifically for children and not necessarily for the general audience, while family films are made for a wider appeal with a general audience in mind. Childrens films come in several major genres like realism, fantasy, adventure, war, musicals, comedy, and literary adaptations.',
		} 
	},
	{
		title:'Its a Wonderful Life',
		description: 'Its a Wonderful Life is a 1946 American Christmas fantasy drama film produced and directed by Frank Capra, based on the short story and booklet The Greatest Gift, which Philip Van Doren Stern self-published in 1943 and is in turn loosely based on the 1843 Charles Dickens novella A Christmas Carol. The film stars James Stewart as George Bailey, a man who has given up his personal dreams, in order to help others in his community, and whose thoughts of suicide on Christmas Eve brings about the intervention of his guardian angel, Clarence Odbody (Henry Travers). Clarence shows George how he has touched the lives of others and how different life would be for his wife Mary and his community of Bedford Falls if he had not been born.',
		director: {
			name: 'Frank Capra',
			description: 'Frank Russell Capra was an Italian-born American film director, producer and writer who became the creative force behind some of the major award-winning films of the 1930s and 1940s. Born in Italy and raised in Los Angeles from the age of five, his rags-to-riches story has led film historians such as Ian Freer to consider him the "American Dream personified".',
			birth: 'May 18, 1897 - September 3, 1991',
		},
		genre: {
			name: 'Family',
			description: 'family film, is a film genre that contains children or relates to them in the context of home and family. Childrens films are made specifically for children and not necessarily for the general audience, while family films are made for a wider appeal with a general audience in mind. Childrens films come in several major genres like realism, fantasy, adventure, war, musicals, comedy, and literary adaptations.',
		} 
	}
]

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
	const user = users.find( user => user.name === userName);

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

	if(newUser.name) {
		newUser.id = uuid.v4();
		users.push(newUser);
		res.status(201).json(newUser);
	} else {
		res.status(400).send('users need names');
	}
})

//adds a movie to favorite list
app.post('/users/:userId/:movieTitle', (req, res) => {
	const { userId, movieTitle } = req.params;
	
	let user = users.find( user => user.id = userId );

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

	let user = users.find( user => user.id == userId ); //two equal signs means the id is a string

	if (user) {
		user.name = updatedUser.name;
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
	let user = users.find( user => user.id = userId );

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
	let user = users.find( user => user.id == userId );

	if (user) {
		//filtering only the selected movie title out and keeping the rest
		users = users.filter( user => user.id != userId);// do not use strict equality!
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