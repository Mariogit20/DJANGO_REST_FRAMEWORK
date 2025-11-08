// // let apiProduit = async ()=>{
// //     try {
// //         // let dataApi = await fetch('http://127.0.0.1:8000/produits/');       //         let dataApi = await fetch('http://127.0.0.1:8000/api/produits/');
// //         let dataApi = await fetch('http://127.0.0.1:8000/api/camions/');       //         let dataApi = await fetch('http://127.0.0.1:8000/api/produits/');        
// //         let dataJson = await dataApi.json()
// //         return dataJson
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }


// // apiProduit().then(e =>{
// //     console.log(e);
// //     let card_containt = document.querySelector('.card-content')

// //     html_str = ''

// //     e.forEach((element,index) => {
// //         html_str +=`
// //             <div class="col-md-3">
// //                 <div class="card" style="width: 18rem;">
// //                     <img src="${element.image}" class="card-img-top" alt="...">
// //                     <div class="card-body">
// //                       <h5 class="card-title">${element.nom}</h5>
// //                       <p class="card-text">${element.description}</p>
// //                       <a href="#" class="btn btn-primary">Go somewhere</a>
// //                     </div>
// //                   </div>
// //             </div>
// //         `
// //     });
// //     card_containt.innerHTML = html_str
    
// // })






// // ----------------------- GEMINI ::::::::::::::::::::::::

// let apiProduit = async ()=>{
//     try {
//         // L'URL de l'API reste inchangée pour récupérer la liste des camions
//         let dataApi = await fetch('http://127.0.0.1:8000/api/camions/'); 
//         let dataJson = await dataApi.json()
//         return dataJson
//     } catch (error) {
//         console.log("Erreur lors de la récupération de l'API des camions:", error)
//     }
// }

// apiProduit().then(e =>{
//     console.log(e);

//  console.dir("NOMBRE de CARDS = e.length = " + e.length );   // MARIO veut savoir le """"NOMBRE de CARDS""""

//     let card_containt = document.querySelector('.card-content')

//     let html_str = ''

//     e.forEach((element, index) => {
//         // Génération d'un nom d'ancre à partir du nom du camion pour correspondre au style du HTML statique
//         // Remplace les espaces et caractères spéciaux par des underscores pour le nom de l'ancre
//         const ancreName = element.nom.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

//         html_str +=`
//             <div class="col-md-3">
//                 <div class="card">
                    
//                     <div style="height:auto; width:90%; margin-right:auto; margin-left:auto;">
//                         <img src="${element.image}" class="card-img-top img-fluid" alt="${element.nom}" style="width:100%; margin-right:0px; height:auto;">
//                         <br>
//                         <br> 
//                     </div>
                    
//                     <a name="${ancreName}"> 
//                         <div class="card-header">
//                             <h1>${element.nom}</h1>
//                         </div>
//                     </a>
                    
//                     <div class="card-body">
//                         <p>
//                             ${element.description}
//                         </p>
//                         <a href="#" class="btn btn-primary">Read more</a>
//                     </div>
//                 </div>
//             </div>
//         `
//     });
    
//     // Injection du HTML généré dans le conteneur cible (.card-content)
//     card_containt.innerHTML = html_str
    
// })







// ----------------------- GEMINI ::::::::::::::::::::::::

let apiCamion = async ()=>{
    try {
        // L'URL de l'API reste inchangée pour récupérer la liste des camions
        let dataApi = await fetch('http://127.0.0.1:8000/api/camions/'); 
        let dataJson = await dataApi.json()
        return dataJson
    } catch (error) {
        console.log("Erreur lors de la récupération de l'API des camions:", error)
    }
}

apiCamion().then(e => {
    console.log(e);

    console.dir("NOMBRE de CARDS = e.length = " + e.length);

    let card_containt = document.querySelector('.card-content');

    let html_str = '';

    // **********************************************
    // 1. OUVERTURE DU CONTENEUR ROW
    // **********************************************
    html_str += `
        <div class="row" style="margin-right:0; margin-left:0;">
    `; 

    e.forEach((element, index) => {
        const ancreName = e[index].nom.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

        // Le code de la Card est correct (h-100, d-flex flex-column, mt-auto)
        html_str +=`
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3" style="margin-bottom:25px;">
                <div class="card h-100">

                    <a name="${ancreName}">                 
                        <div class="card-img-container">
                            <img src="${e[index].image}" class="card-img-top" alt="${e[index].nom}">
                        </div>
                    </a>                    

                    
                        <div class="card-header">
                            <h1>${e[index].nom}</h1>
                        </div>

                    
                    <div class="card-body d-flex flex-column"> 
                        <p>
                            ${e[index].description}
                        </p>
                        
                        <div class="mt-auto"> 
                            <a href="#" class="btn btn-primary">Read more</a>
                            <p class="card-text mt-2"><small class="text-muted">Prix: ${e[index].prix} €</small></p> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // **********************************************
    // 2. FERMETURE DU CONTENEUR ROW MANQUANTE
    // **********************************************
    html_str += `
        </div> 
    `;

    // Injection du HTML généré dans le conteneur cible (.card-content)
    card_containt.innerHTML = html_str;
});

// apiProduit().then(e =>{
//     console.log(e);

//  console.dir("NOMBRE de CARDS = e.length = " + e.length );   // MARIO veut savoir le """"NOMBRE de CARDS""""

//     let card_containt = document.querySelector('.card-content')

//     let html_str = ''

//         // html_str_________Card = ''

//         html_str +=`
//             <div class="row" style="margin-right:0; margin-left:0; " >
      
//         `    

//     e.forEach((element, index) => {
//         // Génération d'un nom d'ancre à partir du nom du camion pour correspondre au style du HTML statique
//         // Remplace les espaces et caractères spéciaux par des underscores pour le nom de l'ancre
//         const ancreName = e[index].nom.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

// console.dir("index = " + index );
// /*
// if (index == 0 && e.length == 4){
//         html_str +=`

//                 <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3" style="margin-bottom:14.95px; " >
                
//         `

//         // html_str +=`
//         //     <div class="row" style="margin-right:0; margin-left:0; " >
//         //         <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3" style="margin-bottom:14.95px; " >
//         //             <div class="row">
//         // `        
// }
// */

// html_str +=`
//     <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3" style="margin-bottom:25px;">
//         <div class="card **h-100**"> <div class="card-img-container">
//                 <img src="${e[index].image}" class="card-img-top" alt="${e[index].nom}">
//             </div>
            
//             <a name="${ancreName}"> 
//                 <div class="card-header">
//                     <h1>${e[index].nom}</h1>
//                 </div>
//             </a>
            
//             <div class="card-body **d-flex flex-column**"> <p>
//                     ${e[index].description}
//                 </p>
                
//                 <div class="**mt-auto**"> 
//                     <a href="#" class="btn btn-primary">Read more</a>
//                     <p class="card-text mt-2"><small class="text-muted">Prix: ${e[index].prix} €</small></p> 
//                 </div>
//             </div>
//         </div>
//     </div>
// `;

//         // html_str  +=`

//         //         <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3" style="margin-bottom:14.95px; " >
                   
//         //         <div class="card">
                    
//         //             <div style="height:auto; width:90%; margin-right:auto; margin-left:auto;">
//         //                 <img src="${e[index].image}" class="card-img-top img-fluid" alt="${e[index].nom}" style="width:100%; margin-right:0px; height:auto;">
//         //                 <br>
//         //                 <br> 
//         //             </div>
                    
//         //             <a name="${ancreName}"> 
//         //                 <div class="card-header">
//         //                     <h1>${e[index].nom}</h1>
//         //                 </div>
//         //             </a>
                    
//         //             <div class="card-body">
//         //                 <p>
//         //                     ${e[index].description}
//         //                 </p>
//         //                 <a href="#" class="btn btn-primary">Read more</a>
//         //             </div>
//         //         </div>
                
//         //         </div>
                           
//         // `

// /*
// if (index == 3){
//     html_str +=  html_str_________Card

//         html_str +=`
                
//                 </div>
            
//         `
// }
// */

//     // html_str +=  html_str_________Card

// // if (index == 4){
// //         html_str +=`
                
// //                 </div>
// //             </div>
// //         `
// // }

//     });
    
//     // Injection du HTML généré dans le conteneur cible (.card-content)
//     card_containt.innerHTML = html_str
    
// })

