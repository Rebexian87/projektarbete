"use strict"

/**
  * @function window.onload
  * Körs när man kommer in på sidan
 */
window.onload = init;

/**
 * Funktion som kallar annan funktion när hemsidan laddas
 */
function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi
       }


 /**
  * En tom array som kommer att innehålla data från API
  * @type {catsList[]} 
  */      
let catsList= []



/**
 * @async
 * @function getcatApi
 * @throws {Error} -Om vi inte får någon data
 * @param {string} url - The URL to download from.
 * @returns {Promise|catsList}   - Datan som vi får från url
 */
async function getcatApi(){


try {const response = await fetch ("https://api.thecatapi.com/v1/breeds");

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  catsList = await response.json(); 
 
displayCat(catsList);  
}
  catch (error){console.error(error)}   
}

/**
 * 
 * @param {*} catsList 
 */
function displayCat(catsList)  
 {

     console.log(catsList);

  
       
       let catsSelectEl=document.getElementById("catsSelect");
       catsSelectEl.innerHTML=""
        /**
         * Läsar in data från API och loopar igenom den så vi kan få fram olika element och attribut
         * @param {any[]} cat -information som loopas igenom från API. Väljer vilken information man vill ha från AP som exempelvis kattras
         * @returns {HTMLElement} - Returnerar en del element som syns på sidan 
         * @returns {fires} - händelsehanterare som anropar andra funktioner
         */
        catsList.forEach(cat => {  //Loopar igenom kstter
          let newOptionEl= document.createElement ("option")  
           newOptionEl.value=cat.id
           newOptionEl.textContent=cat.name
           newOptionEl.setAttribute('id', cat.id)
           newOptionEl.setAttribute('class', cat.temperament)
           catsSelectEl.appendChild(newOptionEl)
           catsSelectEl.addEventListener("change", readpicture)
    } 
); 
    } 
/**
 * En tom array som kommer att innehålla data från API
 * @param {any[]}
 */
let catsPic=[]

    /**
     * Hämtar data med hjälp av ajaxanrop. Try/Catch Async/Await
     * @async
     * @function readpicture
     * @param {string} url - The URL to download from.
     * @param {event} e - När man ändrar element i select lista så anropas denna funktion och targetar värdet. 
     * @returns {Promise|catsPic} -Datan som vi får från url
     */
   async function readpicture  (e){
    console.log(e.target.value);
    
            try {const response = await fetch (`https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=${e.target.value}`);

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  catsPic = await response.json(); 


             
   showCat(catsPic);  




}
  catch (error){console.error(error)}   

    }
     console.log(catsPic);
     

    /**
     * Funktion som visar kattbilder
     * @param {any[]} catsPic 
     * @returns {img}- Bilder från API
     */
    function showCat(catsPic)   {
  
 
      document.getElementById("kittenCoconut").style.display='none'
      document.getElementById("pictureH").style.display='none'

      let catSelectEl=document.getElementById("catSelect")
      catSelectEl.setAttribute('src', catsPic[0].url)
      let catSelectEl2=document.getElementById("catSelect2")
      catSelectEl2.setAttribute('src', catsPic[1].url)   
      let catSelectEl3=document.getElementById("catSelect3")
      catSelectEl3.setAttribute('src', catsPic[2].url)   
      let catSelectEl4=document.getElementById("catSelect4")
      catSelectEl4.setAttribute('src', catsPic[3].url)   

    }
