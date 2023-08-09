
let cards =[]
let sum= 0
let blackjack = false 
let alive =false
let message =""
let messageel=document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardel = document.getElementById("card-el")
let playername = "div"
let playchip =143
let playerel=document.getElementById("player-el")
playerel.textContent=playername+" " + playchip
console.log(cards)
function getrandom(){
    let random = Math.floor(Math.random()*13)+1
    
    if (random >10){
         return  10
    }else if (random ===1){        
        return 1
    }else{
        return random
    }
    
}

function startgame(){
    alive=true
    let firstnumber = getrandom()
    let secondnumber = getrandom()
    cards =[firstnumber,secondnumber]
    sum =firstnumber+secondnumber
    rendergame()
}
function rendergame(){
    cardel.textContent = "cards:"
    for (let i =0 ;i<cards.length;i++){ 
        cardel.textContent += cards[i] +" "
}
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
   if ( alive===true && blackjack===false){
    let card=getrandom()
    sum +=card
    cards.push(card)
    console.log(cards)
   
    rendergame()

   }
    

}
 