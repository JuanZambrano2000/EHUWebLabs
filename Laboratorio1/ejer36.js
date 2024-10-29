const almacen = [
    {tipo: "lavadora", valor: 5000},
    {tipo: "lavadora", valor: 650},
    {tipo: "vaso", valor: 10},
    {tipo: "armario", valor: 1200},
    {tipo: "lavadora", valor: 77}
];

let totalValorLavadoras = almacen
    .filter(function(item) {
        return item.tipo === "lavadora";
    })
    .reduce(function(acumulador, item) {
        return acumulador + item.valor;
    }, 0);

let printAllItems = items => {
    items.forEach(item => console.log(item.valor));
};
//console.log(totalValorLavadoras); // se espera 5727

printAllItems(almacen);