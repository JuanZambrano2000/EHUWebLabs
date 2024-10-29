// jugador.js
class Jugador {
    constructor(miNombre, fuerza, salud) {
        this.miNombre = miNombre;
        this.fuerza = fuerza;
        this.salud = salud;
    }
    
    luchar(jugador) {
        if (Math.random() * this.fuerza > jugador.fuerza) {
            jugador.salud -= this.fuerza;
        } else {
            this.salud -= jugador.fuerza;
        }
    }
    
    getNombre() {
        return this.miNombre;
    }
}
//I put all the .js files together because I thought it wasnt worth it to have its own file since all classes are very similar
// humano.js
class Humano extends Jugador {
    constructor(miNombre) {
        super(miNombre, 70, 150); // Fuerza fija de 70, salud fija de 150
    }
}

// maquina.js
class Maquina extends Jugador {
    constructor(miNombre) {
        super(miNombre, Math.floor(Math.random() * 100 + 1), 130); // Fuerza aleatoria 1-100, salud fija de 130
    }
}

// extraterrestre.js
class Extraterrestre extends Jugador {
    constructor(miNombre) {
        super(miNombre, Math.floor(Math.random() * 85 + 1), 150); // Fuerza aleatoria 1-85, salud fija de 150
    }
}

export { Humano, Maquina, Extraterrestre };