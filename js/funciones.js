const miniCarrito = document.querySelector('#miniCarrito');

const listaProductos = document.querySelector('#divProductos');

let productosCarrito = [];

function agregarAlCarritoBTN(e){
    listaProductos.addEventListener('click', agregarProducto);
}

function agregarProducto(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('agregarAlCarrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto(producto){

    const datosProducto = {
        imagen: producto.querySelector('img').src,
        tipo : producto.querySelector('h5').textContent,
        marca : producto.querySelector('.marca').textContent,
        modelo : producto.querySelector('.modelo').textContent,
        precio : producto.querySelector('.precio').textContent,
        id: producto.querySelector('button').getAttribute('id'),
        cantidad: 1
    }
    productosCarrito = [...productosCarrito, datosProducto];

    miniCarritoHTML();
}

function miniCarritoHTML(){
    productosCarrito.forEach (producto => {
        const lineaCarrito = document.createElement('div');
        lineaCarrito.innerHTML = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="${producto.imagen}" width="30px" class="img-fluid " alt="...">
                </a>
                <ul class="dropdown-menu bg-dark" style="border: solid; border-color: white;">
                    <li><img src="/multimedia/imagenesProductos/mouseHyperXPulsfireSurge.jpg"class="dropdown-item bg-dark">
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.tipo}</p></li>
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.marca} ${producto.modelo}</p></li>
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.precio}</p></li>
                 </ul>
            </li>
        `;

        miniCarrito.appendChild(lineaCarrito)
    })
}