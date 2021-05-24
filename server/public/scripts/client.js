console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    //click event to add jokes to POST to server
    $('#addJokeButton').on('click', addJokes);

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
        //getCalculation();
    });
}

//Gets jokes from server array
function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(response => {
        console.log('The jokes array is', response);

        $('#outputDiv').empty();

        for (let joke of response){
            $('#outputDiv').append(`
            <h3> ${joke.whoseJoke} ${joke.question} ${joke.punchLine} </h3>
            `)
        }
    })
}