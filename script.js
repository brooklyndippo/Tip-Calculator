//-----------------------------------------------
// SELECT INPUTS/OUTPUTS FROM HTML DOC
const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

//-----------------------------------------------
// ADD EVENT LISTENERS
billInput.addEventListener('change', handleBill) 
tipInput.addEventListener('change', handleBill)
peopleInput.addEventListener('change', handleBill)

//-----------------------------------------------
// FUNCTION TO CALCULATE TIP/TOTAL WITH MOST RECENT VALUES
function handleBill(e) {

    //collect the most updated input for all values
    const bill = parseFloat(billInput.value)
    const tip = parseInt(tipInput.value)
    const numPeople = parseInt(peopleInput.value)

    //using inputs calculate different outputs & log in console to test
    const tipOutput = (bill * tip / 100)
    const totalOutput = (bill + tipOutput)
    const cppOutput = totalOutput / numPeople
    console.log (tipOutput)
    console.log (totalOutput)
    console.log (cppOutput)

    //-----------------------------------------------
    // PUSH OUTPUT VALUES TO DISPLAY
    function displayOutput () {
        //check to make sure that the user has input a bill & tip amount before displaying
        if (billInput.value !== '' && tipInput.value !== '') {
        displayTip.innerHTML = `$${tipOutput.toFixed(2)}`
        displayTotal.innerHTML = `$${totalOutput.toFixed(2)}`
        }
    }

    displayOutput ();

}