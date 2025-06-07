"use strict"


window.onload = init;


function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi
       }

let catsList= []



/**
 * @async
 * @function
 * @throws {Error} -Om vi inte får någon data
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


function displayCat(catsList)  
 {

     console.log(catsList);

  
       
       let catsSelectEl=document.getElementById("catsSelect");
       catsSelectEl.innerHTML=""
        /**
         * Läsar in data från API och loopar igenom den så vi kan få fram olika element och attribut
         * @param {any[]} cat 
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

let catsPic=[]
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
     
    function showCat(catsPic)   {

        console.log(catsPic);
      console.log(catsPic[0].url);
  
 
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
