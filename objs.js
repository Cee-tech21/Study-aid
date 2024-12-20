theItems = [
            {"Beta receptor": "receptor to which adrenaline and noradrenaline bind causing an increase in heart rate and blood pressure "},
            {"adrenal gland": "glands located above each kidney, secrete hormones such as adrenaline and cortisol"},
            {"renin": "precursor to the hormone angiotensin"},
            {"Onionin A": "sulfur-containing compound contained in onions, elicits anti-cancer responses"}

]

// Get elements from DOM
let cardContentEl = document.querySelector("#card-content")
let cardNumEl = document.querySelector("#card-num")

// Initialise some variables
let theToggle = true
let counter = -11

let initialContent = "Questions get displayed here"

// Make function call
setInitialContent()


// use counter to iterate through array
// length of array will be used to determine number of data items
// after end of array is reached, counting goes back to zero
// flipCard is a function that alternates card content between key 
//          or value of an item

// Define functions 
function setInitialContent(){
    //set initial card content
    cardContentEl.textContent = initialContent
}
function flipCard(){
    theToggle = !theToggle
    if(!theToggle){
        cardContentEl.textContent = Object.keys(theItems[counter])
    }else{ 
        cardContentEl.textContent = 
             theItems[counter][Object.keys(theItems[counter])]
    }
    console.log(cardContentEl.textContent)
}
function getNextCard(){
    counter++
    resetCounter()
    if(counter < theItems.length){
        
        cardContentEl.textContent = 
             theItems[counter][Object.keys(theItems[counter])] 
        cardNumEl.textContent = "Card " + (counter + 1)
    }         
    //console.log(counter)
}
function getPreviousCard(){
    counter--
    resetCounter()
    if(counter >= 0){
        cardContentEl.textContent = 
            theItems[counter][Object.keys(theItems[counter])]
        cardNumEl.textContent = "Card " + (counter + 1)
    }
}
function resetCounter(){    
    if(counter < 0 || counter === null){
        counter = 0
    }    
    if(counter === theItems.length){
        counter = 0
    } 
}