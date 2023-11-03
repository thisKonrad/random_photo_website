
const images = document.querySelectorAll('img');

/** array for the url collection:  */
let imageSourceArray = [];

/** push every url in an array: */
images.forEach( image => {

    let imageSource = image.getAttribute('src');

    imageSourceArray.push(imageSource);

});

console.log(imageSourceArray);

/* declare a variable for the random number of the url":*/
let imageNumber;

for( let i = 0; i < imageSourceArray.length; i++){

    /* get the url */
    let sourceUrl = imageSourceArray[i];

    console.log(sourceUrl);


    /* loop over the urls and get the last letter */
    for( let letter of sourceUrl){

        console.log('letter: ',letter.length);

        if( letter.length === 38){

            imageNumber = letter.charAt(-1);

            imageNumber = `${randomSingle}`;
            
        }
        if( letter.length === 39){
            
            imageNumber = letter.charAt(-2);

            imageNumber = `${randomDouble}`;
        }

    }

};




