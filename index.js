console.log(`Hello World`)
// Select the HTML element with the message id using querySelector. Save it to a variable called message
const message = document.querySelector('#message')

// Use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.
document.querySelector('form').addEventListener('submit', addMovie) 

// Create a function called addMovie that takes an event as a param
function addMovie(event) {
    event.preventDefault();

    // Use querySelector to get the input. Save it under a variable called inputField
    const inputField = document.querySelector('input');

    // Create a new variable called movie, store a new li element in it using document.createElement
    const movie = document.createElement('li');

    // Create a new span element and save it to a variable called movieTitle
    const movieTitle = document.createElement('span');

    // Set the textContent of movieTitle to be the value of inputField
    movieTitle.textContent = inputField.value;

    // Use addEventListener to listen for a click event on the span and run the crossOffMovie function.
    movieTitle.addEventListener('click', crossOffMovie)

    // Append the movieTitle span to our movie element. Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.
    movie.appendChild(movieTitle)

    // Use createElement to create a new button element and save it to a variable called deleteBtn.
    const deleteBtn = document.createElement('button')

    // Set the textContent of deleteBtn to be the letter X.
    deleteBtn.textContent = 'X'

    // Use addEventListener to listen for a click event on the button and run the deleteMovie function.
    deleteBtn.addEventListener('click', deleteMovie)

    // Use the appendChild method to add deleteBtn onto the movie element.
    movie.appendChild(deleteBtn)

    // Use querySelector to find the ul element that already exists in our HTML and 
    const list = document.querySelector('ul')

    // Use appendChild to attach the movie element we created to the list.
    list.appendChild(movie)
   
   

    // Clear input field
    inputField.value = ''
}



// Create a new function called deleteMovie. When we click the button, we want to remove the entire list item.
function deleteMovie(event) {
    // Remove the parent li 
    event.target.parentNode.remove()

    // Add a line that assigns the textContent of a message to say 'Movie Deleted'
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;

    // Call revealMessage
    revealMessage()

}


// Create a new function called crossOffMovie that takes an event as a parameter.
function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    // Create the structure for an if/else block. 
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    // Call revealMessage
    revealMessage()
}

// Create a function called revealMessage
function revealMessage() {
    // Remove the hide class from msg - this will ensure that the msg isn't hidde when fn in first called
    message.classList.remove('hide')

    // call setTimeout, passing in a cb function and a time in ms
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
