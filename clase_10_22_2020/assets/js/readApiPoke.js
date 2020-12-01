// console.log("*** Consumo de api ***");
const pokeContent = document.getElementById("pokeContent")

pokeContent.addEventListener('click', ()=>{

    console.log("** Consumo de api Poke **");



    borrarContenido()
    
    var cssId;
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = 'cssId';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'assets/css/pokeApi.css';
        link.media = 'all';
        head.appendChild(link);
    }

    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";



    const getData = (api, opc) => {

        return fetch(api)
            .then((response) => response.json())
            .then((json) => {
                if (opc == 1)
                imprimirDatos(json);
                else
                obtenerUrl(json);
            })
            .catch((error) => {
                console.log("Error: " , error)
            });
    };

    const colores = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    const main_types = Object.keys(colores);

    let html;
    const obtenerUrl = (data) => {
        TodaData = data;
        paraPaginar();

    data.results.forEach(pokemon => {
        html="";
        getData(pokemon.url,1)
    });
    }


    document.getElementById("containerAPI").innerHTML += `
            <h1>Pokemon API</h1>
            <button class="button-prev" id="btnPrev">Anterior </button>
            <button class="button-next" id="btnNext">Siguiente</button>
            <div id="poke_container" class="poke-container"></div>
            `;// Escaped with too many `"`
                    
    const imprimirDatos = (data) => {


        // const pokemonEl = document.createElement('div');
        // pokemonEl.classList.add('pokemon');

        const poke_types = data.types.map(type => type.type.name);
        const type = main_types.find(type => poke_types.indexOf(type) > -1);
        const color = colores[type];
        
        // pokemonEl.style.backgroundColor = color;


        // pokemonEl.style.backgroundColor = color;

        // const pokeInnerHTML = `
        //     <div class="img-container">
        //         <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}" />
        //     </div>
        //     <div class="info">
        //         <span class="number">#${data.id.toString().padStart(3, '0')}</span>
        //         <h3 class="name">${data.name}</h3>
        //         <small class="type">Type: <span>${type}</span></small>
        //     </div>
        // `;

        // pokemonEl.innerHTML = pokeInnerHTML;

        // poke_container.appendChild(pokemonEl);

        html += `<div class="pokemon">`;
        html += `<div class="img-container">`;
        html += `<img src="${data.sprites.other.dream_world.front_default}">`;
        html += `</div>`;
        html += `<div class="info">`;
        html += `<span class="number">#${data.id.toString().padStart(3, '0')}</span>`;
        html += `<h3 class="name">${data.name}</h3>`;
        html += `<small class="type">Tipo: <span>${type}</span></small>`;
        html += `</div>`;
        html += `</div>`;
     
      document.getElementById("poke_container").innerHTML = html;


    };

    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    btnPrev.addEventListener('click', ()=>{
        
    getData(TodaData.previous);

    });

    btnNext.addEventListener('click', ()=>{
        getData(TodaData.next);
        
    });




    const paraPaginar =() =>{
        console.log("" +TodaData.next )
        
        if (TodaData.previous == null) {
            console.log (" Ya no hay mas paginas previas ");
            btnPrev.style.display = "none";
            btnPrev.hidden = true;
        }else {
            console.log ("  si hay mas paginas previas  ");
            btnPrev.style.display = "";
            btnPrev.hidden = false;
        }
        if (TodaData.next == null) {
            console.log (" Ya no hay mas paginas siguientes ");
            btnNext.style.display = "none";
            btnNext.hidden = true;
        } else {
            console.log (" si hay mas paginas siguientes ");
            btnNext.style.display = "";
            btnNext.hidden = false;
        }
    }


    getData(url,0);

    


});

var borrarContenido =() =>{
    if(document.getElementById('cssId')){
        document.getElementById("cssId").remove();
    }
    // document.getElementById('cssId').innerHTML = "";
    document.getElementById('containerAPI').innerHTML = "";
}









