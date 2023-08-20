async function obtenerdata(){
    const response = await fetch('http://127.0.0.1:5500/teoria/data.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(errpr => console.log('Solicitu fallida'))
}
obtenerdata();