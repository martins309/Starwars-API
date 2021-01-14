'use strict';

function getStarWarsPeople(apiNumber) {
    const url = `https://swapi.dev/api/people/${apiNumber}`;
    get(url).then(function (response) {
        console.log(response);
    })
}

function eventListener(imageButton, index) {
    imageButton.addEventListener('click', function (event) {
        event.preventDefault();
        const userAPISelection = characterIndex[index].apiNumber;
        getStarWarsPeople(userAPISelection);
        const modalSelector = document.querySelector('#hiddenModal');
    })
}


// closeModal.addEventListener('click', toggleModal);


const characterIndex = [
    {name: '#buttonObiWan', 
    apiNumber : '10',},
    {name: '#buttonLuke',
    apiNumber: '1'},
    {name:'#buttonC3PO', 
    apiNumber: '2'},
    {name:'#buttonR2D2',
    apiNumber: '3'},
    {name:'#buttonDarthVader',
    apiNumber: '4'},
    {name:'#buttonLeia', 
    apiNumber: '5'},
]

characterIndex.forEach((character, index) => {
    const buttonID = character.name;
    const button = document.querySelector(buttonID);
    eventListener(button, index);
    })

