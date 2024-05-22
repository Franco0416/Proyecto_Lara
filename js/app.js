const menu = document.querySelector('.opciones');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnveinticuatro = document.querySelector('.veinticuatro');
const btnveinte = document.querySelector('.veinte');
const btnnueve = document.querySelector('.nueve');
const btnveintisiete = document.querySelector('.veintisiete');
const contenedoralbums = document.querySelector('.albums');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    albums();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const albums = () =>{
    let albumsArreglo = [];
    const albums = document.querySelectorAll('.album');

    albums.forEach(album=> albumsArreglo = [...albumsArreglo,album]);

    const veinticuatro = albumsArreglo.filter(cuatro=> cuatro.getAttribute('data-album') === 'cuatro');
    const veinteveinte = albumsArreglo.filter(veinte => veinte.getAttribute('data-album') === 'veinte');
    const diecinueve = albumsArreglo.filter(nueve => nueve.getAttribute('data-album') === 'nueve');
    const veintisiete = albumsArreglo.filter(siete=> siete.getAttribute('data-album') === 'siete');

    mostraralbums(veinticuatro, veinteveinte, diecinueve, veintisiete, albumsArreglo);

}

const mostraralbums = (veinticuatro, veinteveinte, diecinueve, veintisiete, todos) =>{
    btnveinticuatro.addEventListener('click', ()=>{
        limpiarHtml(contenedoralbums);
        veinticuatro.forEach(cuatro=> contenedoralbums.appendChild(cuatro));
    });

    btnveinte.addEventListener('click', ()=>{
        limpiarHtml(contenedoralbums);
         veinteveinte.forEach(veinte=> contenedoralbums.appendChild(veinte));
    });

    btnnueve.addEventListener('click', ()=>{
        limpiarHtml(contenedoralbums);
        diecinueve.forEach(nueve=> contenedoralbums.appendChild(nueve));
    });
    btnveintisiete.addEventListener('click', ()=>{
        limpiarHtml(contenedoralbums);
        veintisiete.forEach(siete=> contenedoralbums.appendChild(siete));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedoralbums);
        todos.forEach(todo=> contenedoralbums.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}