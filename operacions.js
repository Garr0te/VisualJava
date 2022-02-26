const moment = require('moment')
const dades = require('./llista')

function ordenar_per_nom(llista){
    llista.sort(((a, b) => (a.nom > b.nom) ? 1 :-1))
    return llista
}

function ordenar_per_data(llista){
    llista.sort((a, b) => (moment(a.data_naiximent, 'DD_MM_YYYY') > moment(b.data_naiximent, 'DD_MM_YYYY') ? 1:-1))
    return llista
}
module.exports = {
    ordenar_per_nom,
    ordenar_per_data
}