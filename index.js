//let count = 0

//console.log(count)

//initialize count as 0
//listen to clicks on the increment button
//increment the count variable when the button is clicked
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}