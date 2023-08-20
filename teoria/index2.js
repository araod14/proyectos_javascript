const respuesta = document.getElementById('resp')
const btnejecutar = document.getElementById('ejecutar')
btnejecutar.addEventListener('click', iniciar)

let frutas = ['manzana', 'mango','pera','fresa']
function iniciar(){
    //respuesta.innerText=frutas[frutas.length-1]
    frutas.forEach(function(item, index, array){
        respuesta.innerText=array
    })
}