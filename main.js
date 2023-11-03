
const images = document.querySelectorAll('img');

/** array for the url collection:  */
let imageSourceArray = [];


function changeUrlEnd() {


/* declare a variable for the random number of the url":*/
let imageNumber;

let randomNumber = Math.floor(Math.random() * ( 100 - 1) + 1);

/** push every url in an array: */
images.forEach( image => {

    let imageSource = image.getAttribute('src');

    let urlArray = Array.from(imageSource);

    console.log("ArrayLEngth: ", urlArray.length);


    for( let i = 0; i < urlArray.length; i ++){
/* let sign = urlArray[i]; */

        urlArray.length === 38 ? urlArray.splice(-1, 1, randomNumber) : null;
        urlArray.length === 39 ? urlArray.splice(-2, 2, randomNumber) : null;

    }

    console.log("randomArrays: ", urlArray);



});

}