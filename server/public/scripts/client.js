console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    //click event to add jokes to POST to server
    $('#addJokeButton').on('click', addJokes);
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