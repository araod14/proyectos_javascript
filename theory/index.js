console.log('Qlqx');
var variable=3
console.log(variable)
const constante=5
/*console.log(constante)
console.log('probando concat '+constante)*/
// o con ctrl +k +c y los quito con u
var exponente = Math.pow(2,3)-(variable*2)
var exponentes = 2**3
console.log(exponente)

// conditional if
var numero = 8
    if(numero==7) {
        console.log('si es')
    }
    else if(numero==8){
        console.log('es 8')
    }
    else {
        console.log('no es')
    }

// bucles
var i=0
while(i<=5){
    console.log(i)
    i+=1
}

for(var a=0; a<7; a+=1){
    console.log(a)
}

//funciones
var cafe = 'mocca'
function cafetera(ingrediente1){
    if(ingrediente1=='leche') {
        return cafe
    }
}
var tasa = cafetera('leche')
console.log(cafe)