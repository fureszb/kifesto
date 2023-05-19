import Szinek from "./szinek.js";
import { LISTA } from "./adat.js";
$(function(){
    let szuloElem = $(".tarolo")
    
    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szinek(index, LISTA[index], szuloElem);
        
    }
});