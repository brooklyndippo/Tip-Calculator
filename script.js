const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displyTotal = document.querySelector('#display-total')

billInput.addEventListener('input', handleBill) 
tipInput.addEventListener('input', handleBill)
peopleInput.addEventListener('input', handleBill)

const bill = parseFloat(billInput.value)
const tip = parseInt(tipInput.value)
const numPeople = parseInt(peopleInput.value)

