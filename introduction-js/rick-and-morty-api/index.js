//obtener personajes
async function obtener_personajes (url_api){
    const resp = await fetch(url_api)
    const personajes = await resp.json()
    return personajes.results
}

function listar_personajes (personajes){
    //referenciar contonedor de las tarjetas
    const section = document.getElementById('section-characters')
    let cards=''
    for(i=0;i<personajes.length;i++){
        cards+=`
        <div class="card">
            <img
            src="${personajes[i].image}"
            />
                <div class="body-card">
                    <h5>${personajes[i].name}</h5>
                    <span>Especie${personajes[i].species}</span>
                </div>
                <br>
                    <span>Location: ${personajes[i].location.name}</span>
                </br>
                <br>
                    <span>Origin: ${personajes[i].origin.name}</span>
                </br>
            </div>
        `
    }
    section.innerHTML=cards

}

//funcion principal
async function main(){
    const url_api="https://rickandmortyapi.com/api/character"
    const personajes=await obtener_personajes(url_api)
    listar_personajes(personajes)
}

main()