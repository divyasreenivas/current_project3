let firstnumber = 3
let secondnumber = 9
let cards =[firstnumber,secondnumber]
let sum= firstnumber+secondnumber
let blackjack = false 
let alive =true
let message =""
let messageel=document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardel = document.getElementById("card-el")

function startgame(){
    rendergame()
}
function rendergame(){  
    cardel.textContent="cards:"+cards[0] +" "+ cards[1]
    sumel.textContent = "sum :"+ sum    
    if(sum<21){
        message="sad face "
    }
    else if (sum===21){
        message="happy face"
        blackjack = true
    }
    else {
        message="cry face"
        alive=false
    }
    messageel.textContent=message
}
function newcard(){
    console.log("draw a card from deck ")
    let cardnumber=6
    sum +=cardnumber
    rendergame()

}



