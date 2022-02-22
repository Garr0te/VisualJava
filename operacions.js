const moment = require('moment')
const dades = require('./llista')

function ordenar_per_nom(llista){
    llista.sort(((a, b) => (a.nom > b.nom) ? 1 :-1))
    return llista
}