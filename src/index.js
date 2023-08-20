const init = () => {
  document.querySelector('section form').addEventListener('submit', function(event){
    event.preventDefault();
    const userInput = event.target['userInputSearchByID'].value;

    fetch(`http://localhost:3000/movies/${userInput}`)
    .then(response => response.json())
    .then((jsonedResponse) => {
        const {title, summary} = jsonedResponse;
        const [searchedMovieTitle,searchedMovieSummary] = ['searchedMovieTitle','searchedMovieSummary']

        const movieTitleDOM = SingleElementAndIDAndTextContentSetter('p',searchedMovieTitle,title);
        const movieSummaryDOM = SingleElementAndIDAndTextContentSetter('p',searchedMovieSummary,summary);

        document.querySelector('section#movieDetails h4').appendChild(movieTitleDOM);
        document.querySelector('section#movieDetails p#movieSummary').appendChild(movieSummaryDOM);
    })
  })
}

function SingleElementAndIDAndTextContentSetter(DOMElement,idName,textContent){
    const newDOMElement = document.createElement(DOMElement);
    newDOMElement.setAttribute('id',idName);
    newDOMElement.textContent = textContent;
    return newDOMElement;
}

document.addEventListener('DOMContentLoaded', init);