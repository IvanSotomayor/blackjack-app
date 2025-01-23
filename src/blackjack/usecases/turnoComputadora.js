import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!deck) throw new Error('Deck necesario');
    if(!puntosHTML) throw new Error('HTML necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );
        
        // <img class="carta" src="assets/cartas/2C.png">
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}