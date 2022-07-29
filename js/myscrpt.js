console.log('Abbinato')


// dimensione della griglia 
let dimensioneGriglia = 10;



//  richiamo il tabellone 
const tabelloneElement = document.querySelector('.tabellone')

console.log(tabelloneElement, dimensioneGriglia)

generaGriglia(dimensioneGriglia, tabelloneElement)

// creo funzione per generare la griglia 
function generaGriglia(dimensione, tabellone) {

    // numero di celle da fare 
    const celleDellaGriglia = dimensione ** 2

    // elementi div creati 
    const div = document.createElement('div')

    for (let i = 0; i < celleDellaGriglia; i++) {
        // console.log(i)
        // creo elemento square  con la Funzione
        const cella = getSquareElement()
        cella.innerHTML=[i+1]
        // appendo a tabellone 
        tabellone.append(cella)


    }
    return div.innerHTML
}


// funzione che crea lo square e gli da le proprietà
function getSquareElement() {
    const square = document.createElement('div')
    square.classList.add('square')

    // inserisco funzione click 
    square.addEventListener('click', clickHandler)

    return square
}

function clickHandler() {

    // uso il this per localizzare lo square 
    const square = this
    square.classList.toggle('clicked')

    // essendo campo minato puoi cliccare solo una volta 
    square.removeEventListener('click', clickHandler)
}