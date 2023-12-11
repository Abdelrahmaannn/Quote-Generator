var quotes = [
  {
    quote: "Embrace the challenges, for within them lies the opportunity to discover the strength and resilience that lead to profound growth",

    name: "Abdelrahman",
    userName: "A229",
    image:
      '<img class=" col-12 rounded-circle" src="images/abdelrahman.jpg" alt="">',

      date: '2:15 PM · Sep 22, 2022 . <span>Twitter for iPhone </span>'
  },

  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",

    name: "Einstein",
    userName: "einstein1",

    image:
      '<img class=" col-12 rounded-circle" src="images/einshtien.jpg" alt="">',

      date: '3:15 PM · Nov 11, 1920 . <span>Twitter for iPhone </span>'
  },

  {
    quote: "A room without books is like a body without a soul.",

    name: "Marcus",
    userName: "marcus11",

    image:
      '<img class=" col-12 rounded-circle" src="images/Marcus-Tullius-Cicero.jpg" alt="">',

      date: '3:15 AM · Sep 11, 1800 . <span>Twitter for iPhone </span>'
  },

  {
    quote: "You only live once, but if you do it right, once is enough.",

    name: "Mae",
    userName: "mae3010",

    image:
      '<img class=" col-12 rounded-circle" src="images/mae-west.jpg" alt="">',

      date: '6:40 AM · Jun 11, 1970 . <span>Twitter for iPhone </span>'
  },

  {
    quote: "Be the change that you wish to see in the world.",
    name: "Gandhi",
    userName: "gandhi224",

    image:
      '<img class=" col-12 rounded-circle" src="images/ghandi.jpg" alt="">',

      date: '12:40 AM · Aug 11, 1860 . <span>Twitter for iPhone </span>'
  },

  {
    quote: "If you tell the truth, you don't have to remember anything.",

    name: "Twain",

    userName: "twain271",

    image:
      '<img class=" col-12 rounded-circle" src="images/Mark_Twain.jpg" alt="">',

      
      date: '12:40 PM · Jul 9, 1880 . <span>Twitter for iPhone </span>'
  },

  {
    quote: 'She say, "Do you love me?" I tell her, "Only partly I only love my bed and my mama, Iam sorry"',

    name: "Drake",

    userName: "drake_top",

    image:
      '<img class=" col-12 rounded-circle" src="images/drake.jpg" alt="">',

      date: '12:40 PM · Jul 9, 2020 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "There are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it.",

    name: "Bertrand",

    userName: "bertrand30102019",

    image:
      '<img class=" col-12 rounded-circle" src="images/17854.jpg" alt="">',

      date: '12:40 PM · Jan 27, 2004 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",

    name: "Martin",

    userName: "lutherking224",

    image:
      '<img class=" col-12 rounded-circle" src="images/23924.jpg" alt="">',

      date: '5:40 PM · Jan 27, 1960 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "The concept of progress acts as a protective mechanism to shield us from the terrors of the future",

    name: "Frank",

    userName: "frankherbert",

    image:
      '<img class=" col-12 rounded-circle" src="images/58.jpg" alt="">',

      date: '2:40 PM · Jan 27, 1988 . <span>Twitter for iPhone </span>'
  },

  {
    quote: "I live for the nights that I can't remember with the people that I won't forget",

    name: "Drake",

    userName: "drake_1",

    image:
      '<img class=" col-12 rounded-circle" src="images/download.jpg" alt="">',

      date: '12:40 PM · Sep 22, 2002 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "Look in my eyes, tell me your tale Do you see the road, the map to my soul ?",

    name: "Travis",

    userName: "scott27",

    image:
      '<img class=" col-12 rounded-circle" src="images/download (1).jpg" alt="">',

      date: '11:40 AM · Jan 27, 2017 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "Still no pressure , Thank God, I breathe",

    name: "Travis",

    userName: "travis16",

    image:
      '<img class=" col-12 rounded-circle" src="images/Travis-Scott-Utopia-Features.jpg" alt="">',

      date: '12:40 AM · Aug 27, 2023 . <span>Twitter for iPhone </span>'
  },


  {
    quote: "I made you think that I would always stay I said some things that I should never say Yeah, I broke your heart like someone did to mine And now you won't love me for a second time",

    name: "Weekend",

    userName: "friday1",

    image:
      '<img class=" col-12 rounded-circle" src="images/the-weeknd-eb983ab7d996467181d87471ae48fd3d.jpg" alt="">',

      date: '12:40 PM · Jan 27, 2017 . <span>Twitter for iPhone </span>'
  },


];

function generator() {
  var randomQuote = quotes[Math.trunc(Math.random() * quotes.length)];

  var quotesItSelf = randomQuote.quote;
  var authourName = randomQuote.name;
  var userName = randomQuote.userName;
  var userImage = randomQuote.image;
  var tweetDate = randomQuote.date;

  document.getElementById("Tweet").innerHTML = quotesItSelf;

  document.getElementById("author").innerHTML = authourName;

  document.getElementById("userName").innerHTML = userName;

  document.getElementById("userImage").innerHTML = userImage;

  document.getElementById("date").innerHTML = tweetDate;

  
}

