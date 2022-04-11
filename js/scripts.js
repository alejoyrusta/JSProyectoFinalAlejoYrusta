let divProductos = document.getElementById('divProductos')

fetch('./json/productos.json')
.then(promesa => promesa.json())
.then(data => {
    data.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div>
            <div class="card" id="producto${indice}" style="width: 18rem;">
                <img src="/multimedia/imagenesProductos/${producto.imagen}" class="card-img-top" alt="${producto.modelo}">
                <div class="card-body">
                    <h5 class="card-title tipo">${producto.tipo}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item marca">Marca ${producto.marca}</li>
                    <li class="list-group-item modelo">Modelo ${producto.modelo}</li>
                    <li class="list-group-item color">Color ${producto.color}</li>
                    <li class="list-group-item stock">Stock: ${producto.stock}</li>
                    <li class="list-group-item precio">Precio $${producto.precio}</li>
                </ul>
                <div class="card-body"> 
                    <a class="btn btn-primary" href="/paginas/pago.html" role="button">Comprar</a>
                    <button class="btn btn-primary agregarAlCarrito" id="${indice} type="button">Añadir al carrito</button>
                </div>
            </div>
        </div>
        `
    });
})

