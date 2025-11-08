// ----------------------- ::::::::::::::::::::::::

let apiAPI_Types_camions = async ()=>{
    try {
        // L'URL de l'API reste inchangée pour récupérer la liste des camions
        let dataApi = await fetch('http://127.0.0.1:8000/api/camions/'); 
        let dataJson = await dataApi.json()
        return dataJson
    } catch (error) {
        console.log("Erreur lors de la récupération de l'API des camions:", error)
    }
}

apiAPI_Types_camions().then(e => {
    console.log(e);

    console.dir("NOMBRE de API concernant les MENUS RESPONSIVES = e.length = " + e.length);

    // let card_containt = document.querySelector('.card-content');
    let card_containt = document.querySelector('.API_Types_camions');    

    let html_str = '';

    // **********************************************
    // 1. OUVERTURE DU CONTENEUR ROW
    // **********************************************
/*    
    html_str += `
        <div class="row" style="margin-right:0; margin-left:0;">
    `; 
*/
    e.forEach((element, index) => {
        const ancreName = e[index].nom.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');



//////////////////////// index.html#${ancreName} ///////////////////////// ::::::::::::::::::::::::::::::::
// http://127.0.0.1:5501/#le_camion_plateau
// http://127.0.0.1:5501/#le_camion_plateau


        // Le code de la Card est correct (h-100, d-flex flex-column, mt-auto)
/*        
        html_str +=`
            <li><a class="dropdown-item" href="index.html#${ancreName}">${e[index].nom}</a></li>

        `;
*/
        
        html_str +=`
            <li><a class="dropdown-item" href="#${ancreName}">${e[index].nom}</a></li>

        `;


// http://127.0.0.1:5501/#le_camion_plateau
// http://127.0.0.1:5501/#le_camion_plateau
//////////////////////// index.html#${ancreName} ///////////////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



/*
        html_str +=`
            <li><a class="dropdown-item" href="API_Types_camions.html#${ancreName}">${e[index].nom}</a></li>

        `;
*/
    });
    
    // **********************************************
    // 2. FERMETURE DU CONTENEUR ROW MANQUANTE
    // **********************************************
/*    
    html_str += `
        </div> 
    `;
*/
    // Injection du HTML généré dans le conteneur cible (.card-content)
    card_containt.innerHTML = html_str;
});

