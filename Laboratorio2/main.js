//main.js
import { Humano, Maquina, Extraterrestre } from './jugador.js';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let campoDeBatalla = [];

for (let i = 1; i <= 50; i++){
    campoDeBatalla.push(new Humano("h"+i));
    campoDeBatalla.push(new Maquina("m"+i));
    campoDeBatalla.push(new Extraterrestre("e"+i));
}
/*
console.log(campoDeBatalla[0]);
console.log(campoDeBatalla[1]);
console.log(campoDeBatalla[2]);
*/
while (campoDeBatalla.length > 1) {
    shuffleArray(campoDeBatalla);
    for (let i = 0; i < campoDeBatalla.length - 1; i += 2) {
        campoDeBatalla[i].luchar(campoDeBatalla[i+1]);
        if (campoDeBatalla[i].salud <= 0) {
            //console.log(`${campoDeBatalla[i].getNombre()} ha sido eliminado.`); //Console log to show who was eliminated
            campoDeBatalla.splice(i, 1);
            i--; // Adjust index after removal, if we don't do this, we would skip the next player in the array
        }
        if (i+1 < campoDeBatalla.length && campoDeBatalla[i+1].salud <= 0) {
            //console.log(`${campoDeBatalla[i+1].getNombre()} ha sido eliminado.`); //The same just in case it was the second Juagador who was eliminated
            campoDeBatalla.splice(i+1, 1);
            i--; // Adjust index after removal
        }
    }
}

console.log(`El campeón es: ${campoDeBatalla[0].getNombre()}`);