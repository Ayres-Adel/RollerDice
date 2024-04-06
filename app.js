function rolldice() {
    
    const numofDice = document.getElementById("numofdice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values = [];
    const images = [];
    diceResult.textContent = "";
    diceImages.innerHTML="";
    
    for(let i=0;i<numofDice;i++) {
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        console.log(value);

        if(value==1) {
            diceResult.textContent += "1 ";   
            diceImages.innerHTML += "<img src='./images/dice-six-faces-one.png'>";
        }
        if(value==2) {
            diceResult.textContent += "2 ";
            diceImages.innerHTML += "<img src='./images/dice-six-faces-two.png'>";
        }
        if(value==3) {
            diceResult.textContent += "3 ";
            diceImages.innerHTML += "<img src='./images/dice-six-faces-three.png'>";
        }
        if(value==4) {
            diceResult.textContent += "4 ";
            diceImages.innerHTML += "<img src='./images/dice-six-faces-four.png'>";
        }
        if(value==5) {
            diceResult.textContent += "5 ";
            diceImages.innerHTML += "<img src='./images/dice-six-faces-five.png'>";
        }
        if(value==6) {
            diceResult.textContent += "6 ";
            diceImages.innerHTML += "<img src='./images/dice-six-faces-six.png'>";
        }
    }
}

