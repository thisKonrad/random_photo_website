
const images = document.querySelectorAll('img');



function changeUrlEnding(){

    images.forEach( image => {

        let imageSource = image.getAttribute('src');
    
        let urlArray = Array.from(imageSource);
    
        console.log("ArrayLEngth: ", urlArray.length);
    
    
        for( let i = 0; i < urlArray.length; i ++){
    
            let randomNumber = Math.floor(Math.random() * ( 100 - 1) + 1);
    
                urlArray.length === 38 ? urlArray.splice(-1, 1, randomNumber) : null;
                urlArray.length === 39 ? urlArray.splice(-2, 2, randomNumber) : null;
    
        }
    
        let urlArrayToString = urlArray.join('')
        console.log("randomArrays: ",urlArrayToString );
    
    });
    

};