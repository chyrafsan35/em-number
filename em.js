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

//Common function for calling..
function call(callId, titleId, numId){
    document.getElementById(callId).addEventListener('click', function(event){
        event.preventDefault();
        const titleN = document.getElementById(titleId).innerText;
        const numN = document.getElementById(numId).innerText;
        alert("Calling " + titleN + '  ' + numN + "...")
    })
}

const do1 = call('call', 'title', 'num');
const do2 = call('call2', 'title2', 'num2');
const do3 = call('call3', 'title3', 'num3');
const do4 = call('call4', 'title4', 'num4');
const do5 = call('call5', 'title5', 'num5');
const do6 = call('call6', 'title6', 'num6');
const do7 = call('call7', 'title7', 'num7');
const do8 = call('call8', 'title8', 'num8');
const do9 = call('call9', 'title9', 'num9');