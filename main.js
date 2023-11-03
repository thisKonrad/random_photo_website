
const images = document.querySelectorAll('img');

/** array for the url collection:  */
let imageSourceArray = [];

/** push every url in an array: */
images.forEach( image => {

    let imageSource = image.getAttribute('src');

    imageSourceArray.push(imageSource);

});

console.log(imageSourceArray);

function changeUrlEnding(){

/* declare a variable for the random number of the url":*/
let imageNumber;

let randomImage = Math.floor(Math.random() * ( 100 - 1) + 1);

for( let i = 0; i < imageSourceArray.length; i++){

    /* get the url */
    let sourceUrl = imageSourceArray[i];

    /* loop over the urls and get the last letter */
    for( let letter of sourceUrl){

        console.log('letter-length: ',letter.length);

        if( letter.length === 38){

            imageNumber = letter.charAt(-1);

            imageNumber = `${randomImage}`;
            
        }
        if( letter.length === 39){
            
            imageNumber = letter.charAt(-2);

            imageNumber = `${randomImage}`;

        }

    }

};

}



setInterval(()=>{ changeUrlEnding() },(3000));


