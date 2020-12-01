
const rickContent = document.getElementById("rickContent")

rickContent.addEventListener('click', ()=>{

    console.log("** Consumo de api Rick **");


    borrarContenido();

    var cssId;
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = 'cssId';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'assets/css/rickApi.css';
        link.media = 'all';
        head.appendChild(link);
    }




    const url = "https://rickandmortyapi.com/api/character/";

    const getData = (api) => {

        return fetch(api)
            .then((response) => response.json())
            .then((json) => {
                imprimirDatos(json)
            })
            .catch((error) => {
                console.log("Error: " , error)
            })
    }

    

    document.getElementById("containerAPI").innerHTML += `
            <div class="contedorHeader">
            <div><a href="#"><img  class="icoFlecha" src="assets/img/izquierda.png" alt="" id="btnPrev"></a></div>
            <h1 class="xtxTitulo">Rick and Morty API</h1>
            <div><a href="#"><img  class="icoFlecha" src="assets/img/derecha.png" alt="" id="btnNext"></a></div>
            </div>
            <div class="contenedorTodo" id="contenedorTodo"></div>
            `;

    const imprimirDatos = (data) => {

        TodaData = data;
        paraPaginar();


        let html = ""
        data.results.forEach(matachito => {
        
            html += `<div class="cards">`;
            html += `<div>`;  
            html += `<img class="foto" src="${matachito.image}">`;
            html += `</div>`;  
            html += `<div>`;  
            html += `<small class="txtSmall">Nombre</small>`;  
            html += `<p class="txtP">${matachito.name}</p>`;  
            html += `<small class="txtSmall">Especie</small>`;  
            html += `<p class="txtP">${matachito.species}</p>`;
            html += `</div>`;  
            html += `</div>`; 
            // console.log("La foto [" +matachito.image+ "] Nombre [" +matachito.name+ "] Especie[" +matachito.species+ "]")
        });
        document.getElementById("contenedorTodo").innerHTML = html
    };

    //Navegacion por la api
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    btnPrev.addEventListener ('click', () => {
        getData(TodaData.info.prev);
    });

    btnNext.addEventListener ('click', () => {
        getData(TodaData.info.next);

    });

    const paraPaginar = () => {
        console.log("" +TodaData.info.next )
        if(TodaData.info.prev == null){
            console.log ("Ya no hay pagians previas")
            btnPrev.style.display = "none";
            btnPrev.hidden = true;
        }else{
            console.log ("Navegue tranquilo owo atras")
            btnPrev.style.display = "";
            btnPrev.hidden = false;
        }
        if(TodaData.info.next == null){
            console.log ("Ya no hay paginas siguientes")
            btnNext.style.display = "none";
            btnNext.hidden = true;
        }else{
            console.log ("Navegue tranquilo owo adelante")
            btnNext.style.display = "";
            btnNext.hidden = false;
        }
    };

    getData(url)



});

var borrarContenido =() =>{
    if(document.getElementById('cssId')){
        document.getElementById("cssId").remove();
    }
    document.getElementById('containerAPI').innerHTML = "";
}



