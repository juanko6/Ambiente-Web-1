console.log("incio javascript");

estudiantes = [
    {
        nombre:"Héctor",
        apellido: "Domínguez",
        celular: "3156676767",
        edad: 18
    },
    {
        nombre:"Francisco",
        apellido: "Valencia",
        celular: "3115151515",
        edad: 30
    }
];

/*console.log(estudiantes);
console.log("Recorrido con función flecha:");
estudiantes.forEach(element => {
    console.log(element.apellido);
});
console.log("Recorrido con función Anónima:");
estudiantes.forEach(function(element) {
    console.log(element.apellido);
});
console.log("Filtrando elementos con menos de 20 años:");
estudiantesFiltrados = estudiantes.filter(function(element) {
    console.log(element.edad<20)
    return element.edad<20;
});
estudiantesFiltrados.forEach(function(element) {
    console.log(element.apellido);
});*/

                fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    json.forEach(p => {
                        box.innerHTML = box.innerHTML +
                        `<div class="category">${p.category}</div>` 
                        +`<div class="title">${p.title}</div>`
                        +`<div class="id">${p.id}</div>`
                        +`<div class="img"><img src="${p.image}" width="100%" height="100%"></div>`
                        +`<div class="description">${p.description}</div>`
                        +`<div class="precio">$${p.price}</div>`
                        +`<div class="rating">Rate: ${p.rating.rate} Count: ${p.rating.count} </div>`;
                    })
                });