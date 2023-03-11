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

datosDiv = document.getElementById("datos");

estudiantes.forEach(function(element) {
    console.log(element.apellido);
    datosDiv.innerHTML=datosDiv.innerHTML+"<p>"+element.nombre+"</p>";
});

box = document.getElementById("box"); 
category = document.getElementById("category"); 
title = document.getElementById("title");
id = document.getElementById("id");
img = document.getElementById("img");
descripcion = document.getElementById("descripcion");
precio = document.getElementById("precio");
rating = document.getElementById("rating");




                fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    json.forEach(p => {
                        category.innerHTML = category.innerHTML+`<p>${p.category}</p>`;


                    })
                });

                fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    json.forEach(p => {
                        console.log(p.id)

                        title.innerHTML = title.innerHTML+`<p>${p.title}</p>`;


                    })
                });

                fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(json => {
                    console.log(json);

                    json.forEach(p => {
                        console.log(p.id)
                        category.innerHTML = category.innerHTML+`<p>${p.category}</p>`;
                        title.innerHTML = title.innerHTML+`<p>${p.title}</p>`;
                        id.innerHTML = id.innerHTML+`<p>${p.id}</p>`;
                        img.innerHTML = img.innerHTML+`<p>${p.image}</p>`;
                        descripcion.innerHTML = descripcion.innerHTML+`<p>${p.description}</p>`;
                        precio.innerHTML = precio.innerHTML+`<p>${p.price}</p>`;
                        rating.innerHTML = rating.innerHTML+`<p>${p.rating}</p>`;

                    })
                });