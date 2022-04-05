if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready()
}
function ready(){
    var sacarDelCarritoBoton = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < sacarDelCarritoBoton.length; i++) {
    var button = sacarDelCarritoBoton[i]
    button.addEventListener('click', function(event) {
        var botonClickeado = event.target
        botonClickeado.parentElement.parentElement.parentElement.parentElement.remove()
    })
    }
    var botonAñadirAlCarrito = document.getElementsByClassName('btn btn-primary')
    for ( let i = 0; i < botonAñadirAlCarrito.length; i++){
        var button = botonAñadirAlCarrito[i]
        button.addEventListener('click', añadirAlCarritoClick)
    }   
}

function añadirAlCarritoClick(event) {
    var button = event.target
    var producto = button.parentElement.parentElement
    var tipoProducto = producto.getElementsByClassName('tipo')[0].innerText
    var marcaModeloProducto = producto.getElementsByClassName('marca')[0].innerText
    var colorProducto = producto.getElementsByClassName('color')[0].innerText
    var precioProducto = producto.getElementsByClassName('precio')[0].innerText
    var imgProducto = producto.getElementsByClassName('card-img-top')[0].src
    console.log(tipoProducto, marcaModeloProducto, colorProducto, precioProducto, imgProducto)
    añadirAlCarrito(tipoProducto, marcaModeloProducto, colorProducto, precioProducto, imgProducto)
}
function añadirAlCarrito(tipoProducto, marcaModeloProducto, colorProducto, precioProducto, imgProducto){
    var lineaDelCarrito = document.createElement('div')
    lineaDelCarrito.classList.add('card-mb-3')
    var productoEnCarrito = document.getElementsByClassName('carrito')[0]
    var contenidoLineaCarrito =`
                    <div class="row g-0">
                        <div class="col-md-4" style="width: 12rem;">
                        <img src="${imgProducto}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body carritoCardBody">
                            <h5 class="card-title">${tipoProducto}</h5>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item marca cCBC">${marcaModeloProducto}</li>
                            <li class="list-group-item color cCBC">${colorProducto}</li>
                            <li class="list-group-item precio cCBC">${precioProducto}</li>
                            </ul>
                            <button type="button" class="btn btn-danger">Quitar</button>
                            <a class="btn btn-success" href="/paginas/pago.html" role="button">Comprar</a>
                        </div>
                        </div>
                    </div>`
    lineaDelCarrito.innerHTML = contenidoLineaCarrito
    productoEnCarrito.append(lineaDelCarrito)
    lineaDelCarrito.getElementsByClassName('btn-danger')[0].addEventListener('click', botonClickeado)
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
        })
})()
document.getElementById('botonCompra').addEventListener('click',()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'Esta seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Comprar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            'Comprado',
            'La compra se a realizado con exito',
            'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Compra cancelada',
            '',
            'error'
        )
        }
    })
})

