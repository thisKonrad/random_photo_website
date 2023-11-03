
const images = document.querySelectorAll('img');


function changeUrlEndings(){

    images.forEach( image => {

        /* get the url and change it for iteration into an array: */
        let imageSource = image.getAttribute('src');
    
        let urlArray = Array.from(imageSource);
    
        console.log("ArrayLEngth: ", urlArray.length);
    
        /* replace the default random number of the image url: */
        for( let i = 0; i < urlArray.length; i ++){
    
            let randomNumber = Math.floor(Math.random() * ( 100 - 1) + 1);
    
                urlArray.length === 38 ? urlArray.splice(-1, 1, randomNumber) : null;
                urlArray.length === 39 ? urlArray.splice(-2, 2, randomNumber) : null;
    
        }
    
        /* turn it into strings again: */
        let urlArrayToString = urlArray.join('')
        console.log("randomArrays: ",urlArrayToString );

        /* replace the image src: */
        image.setAttribute("src", urlArrayToString);

        image.classList.add('image_change');
    
    });
    
};

setInterval(()=>{ changeUrlEndings() },(4000));