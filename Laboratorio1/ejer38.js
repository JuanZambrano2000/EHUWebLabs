class ArrayOrdenado {
    constructor(comparador) {
      this.comparador = comparador;
      this.contenido = [];
    }
  
    findPos = (elt) => {
      return this.contenido.findIndex(item => this.comparador(elt, item) < 0);
    }
  
    insert = (elt) => {
      const pos = this.findPos(elt);
      this.contenido.splice(pos === -1 ? this.contenido.length : pos, 0, elt);
    }
  }
  
  const ordenado = new ArrayOrdenado((a, b) => a - b);
  ordenado.insert(5);
  ordenado.insert(1);
  ordenado.insert(2);
  ordenado.insert(4);
  ordenado.insert(3);
  
  console.log("Array:", ordenado.contenido);
  // array: [1, 2, 3, 4, 5]