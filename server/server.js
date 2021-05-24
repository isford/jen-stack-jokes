const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));


//Jokes array created for displaying on DOM after page refresh
let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];
//POST input from client to server
app.post('/jokes', (req, res) => {
    console.log('Received from user input', req.body);

    let whoseJoke = req.body.whosejoke;
    let question = req.body.question;
    let punchLine = req.body.punchline;

  //create a new object to add to array
    let newJoke = {
      whoseJoke: whoseJoke,
      jokeQuestion: question,
      punchLine: punchLine
    }

    console.log('The users joke to POST', newJoke)

    jokes.push(newJoke);
    //send status code to let client know data was received
    res.sendStatus(200);
  })
//GET to send jokes array to client for display on DOM
app.get('/jokes', (req, res) => {
    console.log('Got to /jokes');

    res.send(jokes)
})


// serve back static files
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
