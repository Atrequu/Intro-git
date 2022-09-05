//Obtener los usuarios
async function obtener_usuarios(uri_users){
    // Enviar petición detipo Get
    const  resp = await fetch(uri_users)
    const data = await resp.json()
    return data
}

//Mostrar los usuarios

function mostrar_usuarios(users){
    //referenciar tabla
    const tabla =document.getElementById('tabla')
    let tbody =`<tbody>`

    for(let i =0; i<users.length;i++){
        let address = users[i].address.street
        address+=`, ${(users[i].address.suite)}`
        address+=`, ${(users[i].address.city)}`
        tbody += `
        <tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${address}</td>
        <td>${users[i].phone}</td>
        <td>${users[i].website}</td>
        </tr>
        `
    }
    tbody+=`</tbody>`
    tabla.innerHTML+=tbody
}

//Funcion principal

async function main(){
    const uri_users='http://jsonplaceholder.typicode.com/users/'
    const users = await obtener_usuarios(uri_users)
    mostrar_usuarios(users)
}

main()