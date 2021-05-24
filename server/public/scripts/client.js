console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    //click event to add jokes to POST to server
    $('#addJokeButton').on('click', addJokes);
    //updates dom to display newest jokes
    getJokes();
}

//add jokes to POST to server
function addJokes(){
    console.log('Add jokes button clicked')//test for button working

    let newJokes = {
        whosejoke: $('#whoseJokeIn').val(),
        question: $('#questionIn').val(),
        punchline: $('#punchlineIn').val(),
    }

    console.log('The new joke added was',newJokes)

    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJokes
    }).then(response => {
        console.log('The users joke was', response)
        getJokes();
    });
}

//Gets jokes from server array
function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(response => {
        console.log('The jokes array is', response);
        //clears the div so you don't have duplicates
        $('#outputDiv').empty();
        //loops through array and appends all jokes
        for (let joke of response){
            $('#outputDiv').append(`
            <h3> ${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine} </h3>
            `)
        }
    })
}