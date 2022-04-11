const miniCarrito = document.querySelector('#miniCarrito');
const contenedorMiniCarrito = document.querySelector ('#listaMiniCarrito')
const listaProductos = document.querySelector('#divProductos');

let productosCarrito = [];

agregarAlCarritoBTN();
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

    limpiarHTML();

    productosCarrito.forEach (producto => {
        const lineaCarrito = document.createElement('div');
        lineaCarrito.innerHTML = `
                    <li><img src="${producto.imagen}"class="dropdown-item bg-dark">
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.tipo}</p></li>
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.marca} ${producto.modelo}</p></li>
                    <li class="miniCarrito"><p class="dropdown-item bg-dark miniCarrito">${producto.precio}</p></li>
        `;

        contenedorMiniCarrito.appendChild(lineaCarrito)
    })
}

function limpiarHTML(){
    while(contenedorMiniCarrito.firstChild){
        contenedorMiniCarrito.removeChild(contenedorMiniCarrito.firstChild)
    }
}