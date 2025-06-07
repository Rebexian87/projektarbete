"use strict"

window.onload = init;

function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi
        document.querySelector("#inputCat").addEventListener("input", filterData); //händelsehanterar som händer när man börjar skriva in text i sökfält
        document.getElementById("oneCat").style.display='none';
  
}
/**
 * 
 */
let cats=[]

/**
 * @async
 * @function
 * 
 */
async function getcatApi(){


try {const response = await fetch ("https://api.thecatapi.com/v1/breeds");

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  cats = await response.json(); 
 
  
  let catData=cats
  
  console.log(catData);
             
  displayCat(catData);  




}
  catch (error){console.error(error)}   
}

/**
 * 
 */
   let numberOfCatsEl = document.getElementById("numberOfCats")
   /**
    * 
    */
   numberOfCatsEl.addEventListener("change", getcatApi)

 

    /**
     * @function
     * @param {*} catData 
     */
function displayCat (catData) {

     console.log(catData);
         let catsEl=document.getElementById("cats");
       catsEl.innerHTML=""

        
       catData.length=numberOfCatsEl.value
      catData.forEach(cat => {  //Loopar igenom katter


           let newElLi= document.createElement ("li")   
           let newElButton = document.createElement ("button")
           let newText=document.createTextNode (cat.name)  
           newElButton.setAttribute('id', cat.country_code) 
           newElButton.setAttribute('title', cat.description)
           newElButton.setAttribute('class', cat.id)
           newElButton.appendChild(newText) 
           newElLi.appendChild(newElButton) 
           catsEl.appendChild(newElLi)
    
    newElButton.addEventListener ("click", showcountry, false); //anropar funktionen showcountre vid klick kattras
    newElButton.addEventListener ("click", showOneButton, false); //anropar funktionen showOneButton
    newElButton.addEventListener ("click", showCountryFlag, false); //anropar funktionen showOneButton
    }
  
);   
    } 

    let aEl=document.getElementById("cuteCatButton")
    let cutCatbuttonEl=document.createElement("button")
    aEl.appendChild(cutCatbuttonEl)

    let cuteCatbuttonTextEl=document.createTextNode("Pictures of cats")
    cutCatbuttonEl.appendChild(cuteCatbuttonTextEl)

    aEl.setAttribute('href', 'pictures.html' )

    

/**
 * 
 */
function filterData () {   //Funktion som gör att när man skriver så filtreras datan i tabellen till det man skriver . 

let catData=cats
let searchphrase = document.querySelector("#inputCat").value;  //värdet som skrivs i i sökfält

let filteredData = catData.filter(cat => 
    cat.name.toLowerCase().includes(searchphrase.toLowerCase()) //filtreringsfunktion med avseende på kursnamn och kurskod
    
);
displayCat(filteredData) //anropar funktionen  displayCourses med filtreringsfunktion

}  


/**
 * 
 */
let location = [];


/**
 * 
 * @param {*} e 
 */
 async function showcountry(e) {
  
 console.log(e.target.title);


  try {const response = await fetch (`https://nominatim.openstreetmap.org/search?q=${e.target.id}&format=json`)
     if (!response.ok){
         throw new Error ("Fel....")  
     }
 location = await response.json();   

 displayPlace(location)
 
}

catch (error){console.error(error)}   

 }
/**
 * 
 * @param {*} data 
 */
 function displayPlace (data) {
    
  let latitude = data[0].lat  //["lat"];
  console.log(latitude);

  let longitude = data[0].lon  //["lat"];
  console.log(longitude)
  
  let country=data[0].name
 
 let map = L.map('map').setView([latitude, longitude],2);

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);


  
  let marker = L.marker([latitude, longitude]).addTo(map);
  marker.bindPopup("The cat is from " + country).openPopup();




 }



/**
 * 
 * @param {*} e 
 */
 function showOneButton (e) {

    console.log(e.target.id);
      console.log(e.target.class);
  
        document.getElementById("oneCat").style.display='block';
        let catsEl=document.getElementById("cats");
        catsEl.style.display='none' 
        document.getElementById("inputCat").style.display='none'
        document.getElementById("labelSearch").style.display='none'
        document.getElementById("labelMax").style.display='none'
        document.getElementById("numberOfCats").style.display='none'
        document.getElementById("cuteCat").style.display='none'
        document.getElementById("cuteCatButton").style.display='none'
        document.getElementById("infoText").style.display='none'
            

       let oneCatEl=document.getElementById("oneCat")       
       let newElH2 = document.createElement ("h2")
       let newElP = document.createElement ("p")
       let newText=document.createTextNode (e.target.innerText)  
       let newText2=document.createTextNode (e.target.title)  
 
        newElH2.appendChild(newText) 
        oneCatEl.appendChild(newElH2) 
        newElH2.appendChild(newElP) 
        newElP.appendChild(newText2)
  

let aEl2=document.getElementById("buttonStart")
let buttonStartEl=document.createElement("button")
aEl2.appendChild(buttonStartEl)
let startButtonTextEl=document.createTextNode("Back to the front page")
   buttonStartEl.appendChild(startButtonTextEl) 
    aEl2.setAttribute('href', 'index.html' )        

 }
/**
 * 
 * @param {*} e 
 */
async function showCountryFlag(e){

let url=`https://flagsapi.com/${e.target.id}/flat/64.png`

   let flagEl=document.getElementById("flag");
   flagEl.setAttribute('src', url)
}

















// // Meny-knapparna
// let openBtn = document.getElementById("open-menu");
// let closeBtn = document.getElementById("close-menu");


// openBtn.addEventListener('click', toggleMenu);
// closeBtn.addEventListener('click', toggleMenu);

// //Navigeringsmeny
// function toggleMenu() {
//     let navMenuEl = document.getElementById("nav-menu");

//     //hämtar in css för menyn
//     let style = window.getComputedStyle(navMenuEl);

//     //koll om navigering är synlig eller ej, ändrar display block/none
//     if(style.display === "none") {
//         navMenuEl.style.display = "block";
//     } else {
//         navMenuEl.style.display = "none";
//     }
// }
// //Meny/Hamburgarmenykod är taget från MallarMiun och anpassats till uppgiften


