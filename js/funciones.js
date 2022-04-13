//↴ Variables.
const miniCarrito = document.querySelector('#miniCarrito');
const contenedorMiniCarrito = document.querySelector ('#listaMiniCarrito')
const listaProductos = document.querySelector('#divProductos');
let productosCarrito = []; //↢ Se va llenando con los productos que agrego al carrito.

//↴ Funciones.
botones();
function botones(e){
    listaProductos.addEventListener('click', agregarProducto);
}//↥ Esta funcion agrupa las funciones relacionadas a los botones.

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarAlCarrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}//↥ Esta funcion agrega los productos al carrito cuando apretas el boton agregar al carrito.

function leerDatosProducto(producto){
    const datosProducto = {//↴ Lee el contenido del producto al que le dimos click y extrae la informacion.
        imagen: producto.querySelector('img').src,
        tipo : producto.querySelector('h5').textContent,
        marca : producto.querySelector('.marca').textContent,
        modelo : producto.querySelector('.modelo').textContent,
        precio : producto.querySelector('.precio').textContent,
        id: producto.querySelector('button').getAttribute('id'),
        cantidad: 1
    }
    //↴ Agrega elementos al arreglo del carrito
    productosCarrito = [...productosCarrito, datosProducto];
    miniCarritoHTML();
}

function miniCarritoHTML(){ //↴ Muestra los productos en el carrito dentro del mini carrito del HTML.
    limpiarHTML();
    productosCarrito.forEach (producto => { 
        const {imagen, tipo, marca, modelo, cantidad, precio, id} = producto;
        const lineaCarrito = document.createElement('div');
        lineaCarrito.innerHTML = `
                    <li><img src="${producto.imagen}"class="dropdown-item bg-dark w-75 miniCarritoImg">
                    <li><p class="dropdown-item bg-dark miniCarrito">${tipo}</p></li>
                    <li><p class="dropdown-item bg-dark miniCarrito">${marca}</p></li>
                    <li><p class="dropdown-item bg-dark miniCarrito">${producto.modelo}</p></li>
                    <li><p class="dropdown-item bg-dark miniCarrito">Cantidad :${cantidad}</p></li>
                    <li><p class="dropdown-item bg-dark miniCarrito">${precio}</p></li>
                    <li style="border-bottom: solid; border-color: white;"><button class="btn btn-danger sacarDelCarritoBTN" id="${id} type="button">X</button></li>
        `;
        contenedorMiniCarrito.appendChild(lineaCarrito)
    })
}

function limpiarHTML(){ //↴ Evita que al agregar mas de un producto en el carrito se duplique el anterior.
    while(contenedorMiniCarrito.firstChild){
        contenedorMiniCarrito.removeChild(contenedorMiniCarrito.firstChild)
    }
}