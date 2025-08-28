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

const call_history = [];

//Function for getting calls loop
function printCalls (){
    const blank = document.getElementById('historyPanel');
    blank.innerHTML = "";

    for(const database of call_history){
        const newHistory = document.createElement('div');
        newHistory.className = 'flex justify-between items-center bg-[#FAFAFA] rounded-[3px] p-3 m-3';
        newHistory.innerHTML = 
        `
            <div>
                <h4 class="font-bold">${database.name}</h4>
                <span class="text-[#5C5C5C]">${database.number}</span>
            </div>
            <div class="text-[#5C5C5C]">${database.time}</div>
        `;

        blank.appendChild(newHistory);
    }
}

//Common function for calling..
function call(callId, titleId, numId){
    document.getElementById(callId).addEventListener('click', function(event){
        event.preventDefault();
        const titleN = document.getElementById(titleId).innerText;
        const numN = document.getElementById(numId).innerText;
        if(parseInt(document.getElementById('coin_count').innerText)>0){
            const coinLeft = parseInt(document.getElementById('coin_count').innerText);
            const calculate = coinLeft - 20;
            const coinRemaining = document.getElementById('coin_count').innerText = calculate;
            alert("📞 Calling " + titleN + '  ' + numN + "...");

            //code for call history
            const call_name = document.getElementById(titleId).innerText;
            const call_number = document.getElementById(numId).innerText;
            
            call_history.push({
                name : call_name,
                number : call_number,
                time : new Date().toLocaleTimeString()
            })

            printCalls();
        }else{
            alert("❌ You don't have enough coins; you need at least 20 coins for each call")
        }
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

//Clearing history
document.getElementById("clear_btn").addEventListener('click', function(event){
    document.getElementById("historyPanel").innerHTML = "";
})