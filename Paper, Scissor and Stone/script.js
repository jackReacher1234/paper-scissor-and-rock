let player1Name = document.getElementById('nameInput1'),
    player2Name = document.getElementById('nameInput2'),
    startButton = document.getElementById('startButton');

const animation1 = function(){
    document.querySelector('.players .player1').innerHTML = `
    <div class='animate1'></div>
    `;
}
const animation2 = function(){
    document.querySelector('.players .player2').innerHTML = `
    <div class='animate2'></div>
    `;
}

const clearDiv = function(){
    document.getElementById('firstWinner').style.display = "none";
    document.getElementById('secondWinner').style.display = "none";
}
const showDiv = function(){
    document.getElementById('firstWinner').style.display = "block";
    document.getElementById('secondWinner').style.display = "block";
}

function newGame(){
    clearDiv();
    document.getElementById('nameInput1').disabled = false;
    document.getElementById('nameInput2').disabled = false;
    player1Name.value = '';
    player2Name.value = '';
}

startButton.addEventListener('click', function(e){
    clearDiv();
if(player1Name.value === '' && player2Name.value!==''){
    player1Name.value = "First Player";
}
else if(player1Name.value !== '' && player2Name.value===''){
    player2Name.value = "Second Player";
}
else if(player1Name.value === '' && player2Name.value===''){
    player1Name.value = "First Player";
    player2Name.value = "Second Player";
}
    document.getElementById('nameInput1').disabled = true;
    //document.getElementById('nameInput1').setAttribute("editable",true);
    document.getElementById('nameInput2').disabled = true;
   // document.getElementById('nameInput2').setAttribute("editable",true);
    animation1();
    animation2();
    const x = player1KoKAayo();
    const y = player2KoKAayo();
    setTimeout(x,3000);
    setTimeout(y,3500);
    setTimeout(showDiv,6500);
    if(x === y){
        document.getElementById('firstWinner').textContent = "It's a DRAW";
        document.getElementById('secondWinner').textContent = "It's a DRAW";
        //("Draw");
    }
    else if(x===1 && y === 2){
        document.getElementById('firstWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player1Name.value} wins`;
        document.getElementById('secondWinner').textContent = `LOOSER LOOSER.Better luck next time ${player2Name.value}`;
        //(`${player1Name.value} wins`);
    }
    else if(x===1 && y ===3){
        document.getElementById('secondWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player2Name.value} wins`;
        document.getElementById('firstWinner').textContent = `LOOSER LOOSER.Better luck next time ${player1Name.value}`;
        //(`${player2Name.value} wins`);
    }
    else if(x===2 && y ===1){
        document.getElementById('secondWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player2Name.value} wins`;
        document.getElementById('firstWinner').textContent = `LOOSER LOOSER.Better luck next time ${player1Name.value}`;
        //(`${player2Name.value} wins`);
    }
    else if(x===2 && y ===3){
        document.getElementById('firstWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player1Name.value} wins`;
        document.getElementById('secondWinner').textContent = `LOOSER LOOSER.Better luck next time ${player2Name.value}`;
        //(`${player1Name.value} wins`);
    }
    else if(x===3 && y ===1){
        document.getElementById('firstWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player1Name.value} wins`;
        document.getElementById('secondWinner').textContent = `LOOSER LOOSER.Better luck next time ${player2Name.value}`;
        //(`${player1Name.value} wins`);
    }
    else if(x===3 && y ===2){
        document.getElementById('secondWinner').textContent = `WINNER WINNER CHICKEN DINNER. ${player2Name.value} wins`;
        document.getElementById('firstWinner').textContent = `LOOSER LOOSER.Better luck next time ${player1Name.value}`;
        //(`${player2Name.value} wins`);
    }
});


player1KoKAayo = function(){
    const random1 = (((Math.ceil(Math.random()*31313432))%3)+1);
    
    if(random1 === 1){
        document.querySelector('.players .player1').firstElementChild.style.backgroundImage = "url('https://m.media-amazon.com/images/S/aplus-media/vc/63859897-44f1-4235-b7ad-9b98e8fc7a7e.jpg')"
        document.querySelector('.players .player1').firstElementChild.style.backgroundSize = "contain";
    }

    else if(random1 === 2){
        document.querySelector('.players .player1').firstElementChild.style.backgroundImage = "url('https://4.imimg.com/data4/IY/GU/MY-11466892/75-gsm-a4-copier-paper-1079606-500x500.jpg')"
       // document.querySelector('.players .player1').firstElementChild.style.backgroundSize = "cover";
    }

    else{
        document.querySelector('.players .player1').firstElementChild.style.backgroundImage = "url('https://www.thoughtco.com/thmb/uZ9ZOTG1ewSqLg6fLfQ3Zwzrjvs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-rocks-at-beach-560515091-59de7c3baad52b001091ff7b.jpg')"
       // document.querySelector('.players .player1').firstElementChild.style.backgroundSize = "cover";
    }
    return random1;
}
player2KoKAayo = function(){
    const random2 = (((Math.ceil(Math.random()*91891123))%3)+1);
    if(random2 === 1){
        document.querySelector('.players .player2').firstElementChild.style.backgroundImage = "url('https://m.media-amazon.com/images/S/aplus-media/vc/63859897-44f1-4235-b7ad-9b98e8fc7a7e.jpg')";
        document.querySelector('.players .player2').firstElementChild.style.backgroundSize = "contain";
    }

    else if(random2 === 2){
        document.querySelector('.players .player2').firstElementChild.style.backgroundImage = "url('https://4.imimg.com/data4/IY/GU/MY-11466892/75-gsm-a4-copier-paper-1079606-500x500.jpg')";
       // document.querySelector('.players .player2').firstElementChild.style.backgroundSize = "cover";
    }

    else{
        document.querySelector('.players .player2').firstElementChild.style.backgroundImage = "url('https://www.thoughtco.com/thmb/uZ9ZOTG1ewSqLg6fLfQ3Zwzrjvs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-rocks-at-beach-560515091-59de7c3baad52b001091ff7b.jpg')";
       // document.querySelector('.players .player2').firstElementChild.style.backgroundSize = "cover";
    }
    return random2;
}


document.getElementById("newGameButton").addEventListener('click', newGame);
