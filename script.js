//-----------------------------------------------
// SELECT INPUTS/OUTPUTS FROM HTML DOC
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const checkbox = document.querySelector("#split-bill")
const revealNumPeople = document.querySelector("#reveal-num-people")

//-----------------------------------------------
// ADD EVENT LISTENERS
billInput.addEventListener('change', handleBill) 
tipInput.addEventListener('change', handleBill)
checkbox.addEventListener('change', handleBill)
peopleInput.addEventListener('change', handleBill)

//-----------------------------------------------
// FUNCTION TO CALCULATE TIP/TOTAL WITH MOST RECENT VALUES
function handleBill(e) {

    //collect the most updated input for all values
    const bill = parseFloat(billInput.value)
    const tip = parseInt(tipInput.value)

    const check = checkbox.checked
    const numPeople = parseInt(peopleInput.value)

    //reveal the input field for number of people if split bill is checked

    revealNumPeople.style.display = check ? "block" : "none"
    
    console.log (check)
    console.log (checkbox)
    console.log (revealNumPeople)


    //using inputs calculate different outputs & log in console to test
    const tipOutput = (bill * tip / 100)
    const totalOutput = (bill + tipOutput)
    const ppTip = tipOutput / numPeople
    const ppTotal = totalOutput / numPeople


    console.log (tipOutput)
    console.log (totalOutput)
    console.log (ppTip)
    console.log (ppTotal)

    displayOutput ();

     //-----------------------------------------------
    // PUSH OUTPUT VALUES TO DISPLAY
    function displayOutput () {
 
        //check to make sure that the user has input a bill & tip amount before displaying
        if (billInput.value !== '' && tipInput.value !== '') {

        //if there is greater than one person to split the bill between, then it will display per person cost 
        if (check == true && parseInt(peopleInput.value) > 1) {
            displayTip.innerHTML = `$${ppTip.toFixed(2)} per person`
            displayTotal.innerHTML = `$${ppTotal.toFixed(2)} per person`
        }

        else {
        displayTip.innerHTML = `$${tipOutput.toFixed(2)}`
        displayTotal.innerHTML = `$${totalOutput.toFixed(2)}`
        }
        
        console.log ("Output displayed")
    }

}
}



