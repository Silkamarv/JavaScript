class Producto
{
    constructor(name, price, year)
    {
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class Usuario
{
    agregarProducto(producto)
    {
        const productList = document.getElementById('product-list');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
                                <div class="card text-center mb-4">
                                    <div class="card-body">
                                        <strong>Nombre del Producto</strong>: ${producto.name} -
                                        <strong>Precio del Producto</strong>: ${producto.price} - 
                                        <strong>Año del Producto</strong>: ${producto.year}
                                        <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                                    </div>
                                </div>
                            `;
        productList.appendChild(elemento);
        
    }

    limpiarFormulario()
    {
        document.getElementById('product-form').reset();
    }
    eliminarProducto(elemento)
    {
        if (elemento.name == 'delete')
        {
            elemento.parentElement.parentElement.parentElement.remove();   
            this.mostrarMensaje('Producto eliminando satisfactoriamente','info');
        }
    }
    mostrarMensaje(mensaje,cssClass)
    {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(mensaje));
        //Mostrando en el DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

// DOM EVENTS
document.getElementById('product-form')
    .addEventListener('submit',function(e)
{
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    console.log(name, price, year);
    
    const producto = new Producto(name, price, year);
    const iu = new Usuario();

    if (name === '' || price === '' || year === '' )
    {
       return  iu.mostrarMensaje('Complete los campos por favor', 'danger');
    }



    iu.agregarProducto(producto);
    iu.limpiarFormulario();
    iu.mostrarMensaje('Producto agregado satisfactoriamente','success');

    e.preventDefault();

});

document.getElementById('product-list').addEventListener('click',function(e){
const iu = new Usuario();
iu.eliminarProducto(e.target);
});