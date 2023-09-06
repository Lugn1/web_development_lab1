const movies = [
  // {
  //   id: "theShawshankRedemption",
  //   title: "The Shawshank Redemption",
  //   year: 1994,
  //   genres: ["Drama"],
  //   plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  //   imageSrc:
  //     "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  // },
  {
    id: "rambo1",
    title: "Rambo: First Blood",
    year: 1982,
    genres: ["Action", " Adventure", " Thriller"],
    plot: "A veteran Green Beret is forced by a cruel Sheriff and his deputies to flee into the mountains and wage an escalating one-man war against his pursuers.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
  },
  {
    id: "rambo2",
    title: "Rambo: First Blood Part II",
    year: 1985,
    genres: ["Action", " Adventure", " Thriller"],
    plot: "John Rambo is released from prison by the government for a top-secret covert mission to the last place on Earth he'd want to return - the jungles of Vietnam.",
    imageSrc: "https://media.ginza.se/Images/item_img_1200/5477.jpg",
  },
  {
    id: "rambo3",
    title: "Rambo III",
    year: 1988,
    genres: ["Action", " Adventure", " Thriller"],
    plot: "Rambo mounts a one-man mission to rescue his friend Colonel Trautman from the clutches of the formidable invading Soviet forces in Afghanistan.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BOTIwNWJhZDItZmNmOC00M2NkLWIwNDktMTYwZWFlZDVkMmVkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "shutterIsland",
    title: "Shutter Island",
    year: 2010,
    genres: ["Mystery", " Thriller"],
    plot: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
  },
  {
    id: "theDeparted",
    title: "The Departed",
    year: 2006,
    genres: ["Crime", " Drama", " Thriller"],
    plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
  },
  {
    id: "theWolfOfWallStreet",
    title: "The Wolf of Wall Street",
    year: 2013,
    genres: ["Biography", " Crime", " Drama"],
    plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
  },
  {
    id: "greenBook",
    title: "Green Book",
    year: 2018,
    genres: ["Biography", " Comedy", " Drama"],
    plot: "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_.jpg",
  },
  {
    id: "forrestGump",
    title: "Forrest Gump",
    year: 1994,
    genres: ["Drama", " Romance"],
    plot: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: "americanGangster",
    title: "American Gangster",
    year: 2007,
    genres: ["Biography", " Crime", " Drama"],
    plot: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMjFmZGI2YTEtYmJhMS00YTE5LWJjNjAtNDI5OGY5ZDhmNTRlXkEyXkFqcGdeQXVyODAwMTU1MTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "theGodfather",
    title: "The Godfather",
    year: 1972,
    genres: ["Crime", " Drama"],
    plot: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: "theGodfatherPartII",
    title: "The Godfather: Part II",
    year: 1974,
    genres: ["Crime", " Drama"],
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    genres: ["Comedy", " Drama", " Thriller"],
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  },
  {
    id: "rememberTheTitans",
    title: "Remember the Titans",
    year: 2000,
    genres: ["Biography", " Drama", " Sport"],
    plot: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: "lawless",
    title: "Lawless",
    year: 2012,
    genres: ["Crime", " Drama"],
    plot: "Set in Depression-era Franklin County, Virginia, a trio of bootlegging brothers are threatened by a new special deputy and other authorities angling for a cut of their profits.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMjAxNjUyNjUwN15BMl5BanBnXkFtZTcwMDgwOTIyOA@@._V1_.jpg",
  },
  {
    id: "fargo",
    title: "Fargo",
    year: 1996,
    genres: ["Crime", " Drama", " Thriller"],
    plot: "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: "oneFlewOverTheCuckoosNest",
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    genres: ["Drama"],
    plot: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg",
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    year: 1990,
    genres: ["Biography", " Crime", " Drama"],
    plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: "lifeIsBeautiful",
    title: "Life Is Beautiful",
    year: 1997,
    genres: ["Comedy", " Drama", " Romance"],
    plot: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: "theKingsSpeech",
    title: "The King's Speech",
    year: 2010,
    genres: ["Biography", " Drama"],
    plot: "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_.jpg",
  },
  {
    id: "joker",
    title: "Joker",
    year: 2019,
    genres: ["Crime", " Drama", " Thriller"],
    plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "aBeautifulMind",
    title: "A Beautiful Mind",
    year: 2001,
    genres: ["Biography", " Drama"],
    plot: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    id: "lifeOfPi",
    title: "Life of Pi",
    year: 2012,
    genres: ["Adventure", " Drama", " Fantasy"],
    plot: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger. ",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    genres: ["Adventure", " Drama", " Sci-Fi"],
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: "bronson",
    title: "Bronson",
    year: 2008,
    genres: ["Action", " Biography", " Crime"],
    plot: "A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.",
    imageSrc:
      "https://m.media-amazon.com/images/M/MV5BZGYwYzdkYmYtYTIzOC00OWU3LWFkOTAtYTFjZTY0MDE4M2VkXkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_FMjpg_UX1000_.jpg",
  },
];

export { movies };
