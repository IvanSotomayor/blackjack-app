
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String}
 */

// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    if( !deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}