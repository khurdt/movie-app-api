//Data list and commands

show dbs
db
use [database name]
db.getCollectionNames()
db.createCollection("")
db.movies.insertOne(document)

db.[collectionName].deleteOne([condition])

db.movies.update(
  { _id: ObjectId("5c3bd189515a081b363cb7e4") },
  { $push: { actors: ObjectId("54435as4aafoop4554s5a") } }
)
db.users.update(
  { username: 'Kim Pablo' },
  { $push: { favoriteMovies: ObjectId('61f46d99937f03ec71b3c2d5') } }
)

$unset = remove a field:
$set = update or add a field: 

db.movies.findOne( { 'title': "Silence of the Lambs" } ).pretty()
let movies1 = ""
db.movies.insertOne(movie1)


db.movies.find({ '_id': ObjectId('') }).pretty()

db.users.remove({ '_id': ObjectId('61f467e73af2b003337c5ce1')})


let users = [
	{
		"username": "Bob",
		"password": "bob555",
		"email": "bob555@gmail.com",
		"birthday": "1992-02-14T00:00:00.000Z",
		"favoriteMovies": [],
		"_id": "61ffa7ecc1de3ace23a024dd",
		"__v": 0
	}
	{
		'_id': ObjectId("61f467c13af2b003337c5ce0"),
		username: 'Kim Pablo',
		password: '5858',
		email: 'kim5858@gmail.com',
		birthday: new Date('01/01/1983'),
		favoriteMovies: [
			ObjectId("61f46b326ef4d979e4b9eb0a"),
      ObjectId("61f46d99937f03ec71b3c2d5") 
      ]
	},
	{
		'_id': ObjectId('61f467e73af2b003337c5ce1'),
		username: 'Carlos Gonzales',
		password: '2323',
		email: 'carlos2323@gmail.com',
		birthday: new Date('01/01/1997'),
		favoriteMovies: [ ]
	},
	{
		'_id': ObjectId('61f4680d3af2b003337c5ce2'),
		username: 'Matthew Perez',
		password: '6969',
		email: 'matthew6969@gmail.com',
		birthday: new Date('01/01/2003'),
		favoriteMovies: [ 
			ObjectId("61f46c71937f03ec71b3c2d3"),
      ObjectId("61f46d6c937f03ec71b3c2d4") 
    ]
	},
	{
		'_id': ObjectId('61f468fa3af2b003337c5ce3'),
		username: 'Valdez Welsh',
		password: '2525',
		email: 'valdez2525@gmail.com',
		birthday: new Date('01/01/1974'),
		favoriteMovies: [ ]
	},
	{
		'_id': ObjectId('61f469153af2b003337c5ce4'),
		username: 'Heather Cash',
		password: '9090',
		email: 'heather9090@gmail.com',
		birthday: new Date('01/01/2010let '),
		favoriteMovies: [
			ObjectId("61f46df5937f03ec71b3c2d7"),
      ObjectId("61f46faa937f03ec71b3c2dc"),
      ObjectId("61f46d6c937f03ec71b3c2d4") 
    ]
	},
]
//---------------------------------------------------------------------
db.users.update(
  { username: 'Matthew Perez' },
  { $push: { favoriteMovies: ObjectId('61f46f16937f03ec71b3c2da') } }
)

db.movies.update(
  {'_id': ObjectId("61f46c71937f03ec71b3c2d3")},
  { $unset: { 'director.bio': } }
)

db.users.update(
   { 'username': 'Valdez Welsh' },
   { $push: { 'favoriteMovies': { $each: [ ObjectId("61f46d99937f03ec71b3c2d5"), ObjectId("61f46dc5937f03ec71b3c2d6"), ObjectId("61f46f16937f03ec71b3c2da") ] } } }
)

db.movies.updateMany({'director.name': 'Sir David Attenborough'}, { $set: {'director.description': 'Sir David Frederick Attenborough is an English broadcaster, natural historian and author. He is best known for writing and presenting nature documentaries.'}}
//----------------------------------------------------------------------
let movies = [
	{
		'_id': ObjectId("61f46b326ef4d979e4b9eb0a"),
		title:'The Passion of the Christ',
		description:'The passion of Jesus Christ is displayed from the gospels as the dying Savior for evil, corrupt man. Even as Jesus is being crucified does he take on the wrath of God',
		director: {
			name: 'Mel Gibson',
			bio: 'Mel Columcille Gerard Gibson is an American actor, film director, producer, and screenwriter. He is best known for his action hero roles.',
			birth: 'January 3, 1956'
		},
		genre: {
			name: 'drama',
			description: 'drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BNDY1N2IyYWMtZTY4OS00OGM1LTkxNmUtOTQzYmM5MmI2YmVmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
		featured: false 
	},
	{
		'_id': ObjectId("61f46c71937f03ec71b3c2d3"),
		title:'Planet Earth II',
		description: 'Planet Earth II is a 2016 British nature documentary series produced by the BBC as a sequel to Planet Earth, which was broadcast in 2006. The series is presented and narrated by Sir David Attenborough with the main theme music composed by Hans Zimmer.',
		director: {
			name: 'Sir David Attenborough',
			description: 'Sir David Frederick Attenborough is an English broadcaster, natural historian and author. He is best known for writing and presenting, in conjunction with the BBC Natural History Unit, the nine natural history documentary series forming the Life collection, a comprehensive survey of animal and plant life on Earth.',
			birth: 'May 8, 1926'
		},
		genre: {
			name: 'Documentary',
			description: 'documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education, or maintaining a historical record.',
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46d6c937f03ec71b3c2d4"),
		title:'Blue Planet II',
		description: 'Blue Planet II is a 2017 British nature documentary series on marine life produced by the BBC Natural History Unit. Like its predecessor, The Blue Planet (2001), it is narrated and presented by naturalist Sir David Attenborough, while the main music score was composed by Hans Zimmer.',
		director: {
			name: 'Sir David Attenborough',
			description:  'Sir David Frederick Attenborough is an English broadcaster, natural historian and author. He is best known for writing and presenting, in conjunction with the BBC Natural History Unit, the nine natural history documentary series forming the Life collection, a comprehensive survey of animal and plant life on Earth.',
			birth: 'May 8, 1926'	
		},
		genre: {
			name: 'Documentary',
			description: 'documentary is a non-fictional motion-picture intended to "document reality, primarily for the purposes of instruction, education, or maintaining a historical record.',
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46d99937f03ec71b3c2d5"),
		title: 'Lord of the Rings: The Fellowship of the Ring',
		description: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkiens 1937 childrens book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.',
		director: {
			name: 'Peter Jackson',
			description: 'Sir Peter Robert Jackson is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
			birth: 'October 31, 1961'
		},
		genre: {
			name: 'Adventure',
			description: 'An adventure film is form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war.',
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46dc5937f03ec71b3c2d6"),
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
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46df5937f03ec71b3c2d7"),
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
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46e21937f03ec71b3c2d8"),
		title:'A Night at the Opera',
		description: 'A Night at the Opera is a 1935 American comedy film starring the Marx Brothers, and featuring Kitty Carlisle, Allan Jones, Margaret Dumont, Sig Ruman, and Walter Woolf King. It was the first of five films the Marx Brothers made under contract for Metro-Goldwyn-Mayer after their departure from Paramount Pictures, and the first after Zeppo left the act. The film was written by George S. Kaufman and Morrie Ryskind from a story by James Kevin McGuinness, with additional uncredited dialogue by Al Boasberg. The film was directed by Sam Wood.',
		director: {
			name: 'Sam Wood',
			description: 'Samuel Grosvenor Wood was an American film director and producer, who is best known for having directed such Hollywood hits as A Night at the Opera, A Day at the Races, Goodbye, Mr. Chips, and The Pride of the Yankees, and for his uncredited work directing parts of Gone with the Wind. He was also involved in a few acting and writing projects.',
			birth: '1883',
			death:'1949'
		},
		genre: {
			name: 'Comedy',
			description: 'A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending. One of the oldest genres in film—and derived from the classical comedy in theatre—some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films took another swing, as laughter could result from burlesque situations but also dialogue.',
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BYTJmNmQxNGItNDNlMC00MDU3LWFhNzMtZDQ2NDY0ZTVkNjE3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_FMjpg_UX1000_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46e4b937f03ec71b3c2d9"),
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
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BN2Y0NWRkNWItZWEwNi00MDNlLWJmZDYtNTkwYzI5Nzg4MjVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46f16937f03ec71b3c2da"),
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
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46f64937f03ec71b3c2db"),
		title:'Its a Wonderful Life',
		description: 'Its a Wonderful Life is a 1946 American Christmas fantasy drama film produced and directed by Frank Capra, based on the short story and booklet The Greatest Gift, which Philip Van Doren Stern self-published in 1943 and is in turn loosely based on the 1843 Charles Dickens novella A Christmas Carol. The film stars James Stewart as George Bailey, a man who has given up his personal dreams, in order to help others in his community, and whose thoughts of suicide on Christmas Eve brings about the intervention of his guardian angel, Clarence Odbody (Henry Travers). Clarence shows George how he has touched the lives of others and how different life would be for his wife Mary and his community of Bedford Falls if he had not been born.',
		director: {
			name: 'Frank Capra',
			description: 'Frank Russell Capra was an Italian-born American film director, producer and writer who became the creative force behind some of the major award-winning films of the 1930s and 1940s. Born in Italy and raised in Los Angeles from the age of five, his rags-to-riches story has led film historians such as Ian Freer to consider him the "American Dream personified".',
			birth: '1897', 
			death: '1991',
		},
		genre: {
			name: 'Family',
			description: 'family film, is a film genre that contains children or relates to them in the context of home and family. Childrens films are made specifically for children and not necessarily for the general audience, while family films are made for a wider appeal with a general audience in mind. Childrens films come in several major genres like realism, fantasy, adventure, war, musicals, comedy, and literary adaptations.',
		},
		imagePath: 'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg',
		featured: false  
	},
	{
		'_id': ObjectId("61f46faa937f03ec71b3c2dc")
    title: 'Silence of the Lambs',
    Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    genre: {
            name: 'Thriller',
            description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.'
    },
    director: {
            name: 'Jonathan Demme',
            bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
            birth: '1944',
            death: '2017'
    },
    imagePath: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    featured: false
	}
]