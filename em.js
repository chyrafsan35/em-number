console.log("hi")

//Common function for clicking 'heart'
function count(idName){
    document.getElementById(idName).addEventListener('click', function(event){
    event.preventDefault();
    const storeHeart = parseInt(document.getElementById('heart_count').innerText);
    const sum = storeHeart + 1;
    document.getElementById('heart_count').innerText = sum;
})
}

const h1 = count('heart');
const h2 = count('heart2');
const h3 = count('heart3');
const h4 = count('heart4');
const h5 = count('heart5');
const h6 = count('heart6');
const h7 = count('heart7');
const h8 = count('heart8');
const h9 = count('heart9');