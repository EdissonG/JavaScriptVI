const pokeList = document.getElementById("pokeList");

pokeList.addEventListener('click', ()=> {

    console.log("** Consumo de api pokeList **");

    borrarContenido()
    
    var cssId;
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = 'cssId';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'assets/css/pokeListApi.css';
        link.media = 'all';
        head.appendChild(link);
    }

    document.getElementById("containerAPI").innerHTML += `
    <div class="grid-container">
            <div class="left-container">
                <div class="left-container__black">
                <div class="left-container__screen">
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                    <div class="list-item"></div>
                </div>
                </div>
                <div class="right-container__buttons">
                <button type="button" class="left-button">Anterior</button>
                <button type="button" class="right-button">Siguiente</button>
                </div>
            </div>
        <div class="main-section__white">
            <div class="main-section__black">
                <div class="main-screen hide">
                <div class="screen__header">
                    <span class="poke-name"></span>
                    <span class="poke-id"></span>
                </div>
                <div class="screen__image">
                    <img src="" class="poke-front-image" alt="front">
                    <img src="" class="poke-back-image" alt="back">
                </div>
                <div class="screen__description">
                    <div class="stats__types">
                    <span class="poke-type-one"></span>
                    <span class="poke-type-two"></span>
                    </div>
                    <div class="screen__stats">
                    <p class="stats__weight">
                        weight: <span class="poke-weight"></span>
                    </p>
                    <p class="stats__height">
                        height: <span class="poke-height"></span>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
            `;

    const mainScreen = document.querySelector('.main-screen')

    const pokeName = document.querySelector('.poke-name');
    const pokeId = document.querySelector('.poke-id');
    const pokeFrontImage = document.querySelector('.poke-front-image');
    const pokeBackImage = document.querySelector('.poke-back-image');
    const pokeTypeOne = document.querySelector('.poke-type-one');
    const pokeTypeTwo = document.querySelector('.poke-type-two');
    const pokeWeight = document.querySelector('.poke-weight');
    const pokeHeight = document.querySelector('.poke-height');
    const pokeListItems = document.querySelectorAll('.list-item');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');



    // const types = [
    //     'normal', 'fighting', 'flying',
    //     'poison', 'ground', 'rock',
    //     'bug', 'ghost', 'steel',
    //     'fire','water','grass',
    //     'electric','psychic','ice',
    //     'dragon','dark','fairy'
    // ];

    let prevUrl = null;

    let nextUrl = null;


    //Aqui van las funciones
    const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

    // const resetScreen = () => {
    //     mainScreen.classList.remove('hide');
    //     for (const tipos of types){
    //         mainScreen.classList.remove(tipos);

    //     }

    // }
    const resetScreen = () => {
        mainScreen.classList.remove('hide');
        const classListLength = mainScreen.classList.length;
            for (let i = 0; i < classListLength; i++) {
                mainScreen.classList.remove(mainScreen.classList[0]);
            }
            mainScreen.classList.add("main-screen");
    };


    const fetchPokeList = url => {
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
            const { results, previous, next } = data;
            
            prevUrl = previous;
            
            if (prevUrl == null) {
                leftButton.style.display = "none";
                leftButton.hidden = true;
            } else { 
                leftButton.style.display = "";
                leftButton.hidden = false;    
            }
            
            
            nextUrl = next;

            if (nextUrl == null) {
                rightButton.style.display = "none";
                rightButton.hidden = true;
            } else { 
                rightButton.style.display = "";
                rightButton.hidden = false;    
            }

            for (let i = 0; i  < pokeListItems.length; i++){
                const pokeListItem = pokeListItems[i];
                const resultData = results[i];

                if(resultData) {
                    const { name, url } = resultData;
                    const urlArray = url.split('/');
                    const id = urlArray[urlArray.length - 2]
                    pokeListItem.textContent = id + '. ' + capitalize(name);
                } else {
                    pokeListItem.textContent = '';

                }
            }
        });
    };

    const fetchPokemonData = id => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res =>  res.json())

            .then(data => {

                    resetScreen();

                    const dataTypes = data['types']
                    const dataFirstType = dataTypes[0];
                    const dataSecondType = dataTypes[1];
                    pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
                    // if (dataSecondType){
                    //     pokeTypeTwo.classList.remove('hide');
                    //     pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
                    // }else{
                    //     pokeTypeTwo.classList.add('hide');
                    //     pokeTypeTwo.textContent = '';
                    // }

                    if(dataTypes[1]) {
                        const dataFirstType = dataTypes[1];
                        const dataSecondType = dataTypes[0];
                        pokeTypeTwo.classList.remove('hide');
                        pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
                        pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
                        mainScreen.classList.add(dataFirstType['type']['name'])
                    }
                    else {
                        const dataFirstType = dataTypes[0];
                        pokeTypeOne.textContent = dataFirstType['type']['name'];
                        pokeTypeTwo.classList.add('hide');
                        pokeTypeTwo.textContent = "";
                        mainScreen.classList.add(dataFirstType['type']['name'])
                    }

                    mainScreen.classList.add(dataFirstType['type']['name']);

                    pokeName.textContent = capitalize(data['name']);
                    pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
                    pokeWeight.textContent = data ['weight'];
                    pokeHeight.textContent = data ['height'];
                    pokeFrontImage.src =  data['sprites']['front_default'] || '';
                    pokeBackImage.src =  data['sprites']['back_default'] || '';

        });

    }

    const manejarClicConElBotónIzquierdo = () => {

        if(prevUrl){
            console.log(prevUrl)
            fetchPokeList(prevUrl)
        }
    }

    const manejarClicConElBotónDerecho = () => {
        if(nextUrl){
            fetchPokeList(nextUrl);
        }
    };

    const manejarItemConElClic = (e) => { 
        if (!e.target) return; 

        const listItem = e.target;

        if (!listItem.textContent) return;

        const id = listItem.textContent.split('.')[0];

        fetchPokemonData(id);

    }



    leftButton.addEventListener('click', manejarClicConElBotónIzquierdo );
    rightButton.addEventListener('click', manejarClicConElBotónDerecho);
    for (const pokeListItem of pokeListItems) {
        pokeListItem.addEventListener('click', manejarItemConElClic)
    }


    //
    fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')


});




var borrarContenido =() =>{
    if(document.getElementById('cssId')){
        document.getElementById("cssId").remove();
    }
    document.getElementById('containerAPI').innerHTML = "";
}