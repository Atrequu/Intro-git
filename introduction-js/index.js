//capturar elemento por id y asinarlo a la variable 'div'
const div=document.getElementById('app')
//Actualizar contenido (adicional al elemento)
div.innerHTML=`
<h2>Titulo desde js</h2>
<h4>Somos el grupo 14</h4>
<p>Estamos insertanfo el código html desde js, estoy muy feliz!
`
//Arreglo que contiene objetos de tipo persona
const personas=[
  {nombre:"Diana",apellido:"Quintana"},
  {nombre:"Daniel",apellido:"Tamayo"},
  {nombre:"Samuel",apellido:"Gonzales"},
  {nombre:"Sara",apellido:"Nieto"},
  {nombre:"Juan Pablo",apellido:"Torres"}
]


//Referenciar tabla
const tabla = document.getElementById('tabla')
tabla.innerHTML +=`<tbody>`
//Iterar arreglo
for(let i=0;i<personas.length;i++){
  tabla.innerHTML+=`
  <tr>
    <td>${personas[i].nombre}</td>
    <td>${personas[i].apellido}</td>
  </tr>
  `
}
tabla.innerHTML+='</tbody>'