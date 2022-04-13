//↴ Variables.
const sacarBTN = document.querySelector ('#miniCarrito')
const contenedorMiniCarrito = document.querySelector ('#listaMiniCarrito')
const listaProductos = document.querySelector('#divProductos');
let productosCarrito = []; //↢ Se va llenando con los productos que agrego al carrito.

//↴ Funciones.
botones();
function botones(e){//↤ Esta funcion agrupa las funciones relacionadas a los botones.
    listaProductos.addEventListener('click', agregarProducto);
    //↥ Esta funcion agrega los productos al carrito cuando apretas el boton agregar al carrito.
    sacarBTN.addEventListener('click', eliminarProducto);//↤ Elimina productos del carrito.
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarAlCarrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}//↥ Esta funcion agrega los productos al carrito cuando apretas el boton agregar al carrito.

function eliminarProducto(e){//↤ Elimina productos del carrito.
    if(e.target.classList.contains('sacarDelCarritoBTN')){
        const productoId = e.target.getAttribute('id')
        productosCarrito = productosCarrito.filter (producto => producto.id !== productoId);
        miniCarritoHTML();
    }
}

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
    //↴ Cambia la cantidad del producto en el carrito envez de ponerlo dos veces.
    const estaEnCarrito = productosCarrito.some (producto => producto.id === datosProducto.id);
    if(estaEnCarrito) {
        const prdctos = productosCarrito.map(producto =>{
            if(producto.id === datosProducto.id){
                producto.cantidad++;
                return producto; //↤ Retorna el objeto con la cantidad actualizada.
            }else{
                return producto; //↤ Retorna los objetos que no son duplicados.
            }
        });
        productosCarrito = [...prdctos];
    }else {
        //↴ Agrega elementos al arreglo del carrito
        productosCarrito = [...productosCarrito, datosProducto];
    }
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