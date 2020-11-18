// Population growth by Peter Oh

// HTML Elements
let popEl = document.getElementById('population');
let birthEl = document.getElementById('birth');
let moveInEl = document.getElementById('moveIn');
let deathEl = document.getElementById('death');
let moveOutEl = document.getElementById('moveOut');

// Event Function
function calcPopulation() {
    //Input
    let population = popEl.value;
    let birth = birthEl.value;
    let moveIn = moveInEl.value;
    let death = deathEl.value;
    let moveOut = moveOutEl.value;

    // Process
    // Change in Population Size = (Births + Immigration) - (Deaths + Emigration)
}