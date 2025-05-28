"use strict"

 let map = L.map('map').setView([51.505, -0.09],2);

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);

// let button1El=document.getElementById("button1")
// button1El.addEventListener("click", getcatApi);


window.onload = init;
function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi

        document.querySelector("#inputCat").addEventListener("input", filterData); //händelsehanterar som händer när man börjar skriva in text i sökfält


   
}

cats=[]




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


function displayCat (catData) {

     console.log(catData);
    
    //`<li><button>text<button></li>`
       
       let catsEl=document.getElementById("cats");
       catsEl.innerHTML=""

      catData.forEach(cat => {  //Loopar igenom kurser+
           let newElLi= document.createElement ("li")   
           let newElButton = document.createElement ("button")
           let newText=document.createTextNode (cat.name)  
           newElButton.setAttribute('id', cat.name) 
           newElButton.setAttribute('title', cat.origin)
                //   newElButton.setAttribute('class', cat.pattern)
             newElButton.appendChild(newText) 
           newElLi.appendChild(newElButton) 
           catsEl.appendChild(newElLi)

          



newElLi.addEventListener ("click", showcountry, false); //anropar funktionen showcountre vid klick kattras
newElLi.addEventListener ("click", showOneButton, false); //anropar funktionen showOneButton
newElLi.addEventListener ("click", showCountryFlag, false); //anropar funktionen showOneButton


    //    catsEl.innerHTML += `<li id=${cat.country}><button id=${cat.country}>${cat.breed}<button></li>`
        // let catsElEl=catsEl.innerHTML
        //  catsElEl.setAttribut=("id", cat.country)

    //   catsEl.innerHTML.addEventListener("click", showpicture)
    }
  


); 
 
// let buttons = catsEl.querySelectorAll ('cats');

// buttons.forEach (button => {
//  button.addEventListener("click", showpicture)

// })


//     button1El=document.getElementById("button1");
// button1El.addEventListener("click", showpicture)
    //    let catsElLi=catsEl.innerHTML;
    //      catsElLi
   

//<td>${cat.data.country}</td>  <td>${cat.data.origin}</td>  <td>${cat.data.coat}</td> <td>${cat.data.pattern}</td>`});
    
    } 
        


function filterData () {   //Funktion som gör att när man skriver så filtreras datan i tabellen till det man skriver . 


     //console.log(catData);
    
       let catData=cats.data
        console.log(catData);



let searchphrase = document.querySelector("#inputCat").value;  //värdet som skrivs i i sökfält

let filteredData = catData.filter(cat => 
    cat.breed.toLowerCase().includes(searchphrase.toLowerCase()) //filtreringsfunktion med avseende på kursnamn och kurskod
    

);
displayCat(filteredData) //anropar funktionen  displayCourses med filtreringsfunktion




}  

let location = [];

 async function showcountry(e) {
  
 console.log(e.target.title);


  try {const response = await fetch (`https://nominatim.openstreetmap.org/search?q=${e.target.title}&format=json`)
     if (!response.ok){
         throw new Error ("Fel....")  
     }
 location = await response.json();   

 displayPlace(location)
          

 
}
catch (error){console.error(error)}   

 }

 function displayPlace (data) {

      


 
  let latitude = data[0].lat  //["lat"];
  console.log(latitude);

  let longitude = data[0].lon  //["lat"];
  console.log(longitude)
  

  map.flyTo(new L.LatLng(latitude, longitude), 7);

  let marker = L.marker([latitude, longitude]).addTo(map);


 }




 function showOneButton (e) {

    console.log(e.target.id);
    
 let catsEl=document.getElementById("cats");
       catsEl.style.display='none' 

       let oneCatEl=document.getElementById("oneCat")
       
       let newElH2 = document.createElement ("h2")
       let newElP = document.createElement ("p")
       let newText=document.createTextNode (e.target.id)  
       let newText2=document.createTextNode ("Kattrasen "+e.target.id+ " är ifrån "+e.target.title+".")  

        newElH2.appendChild(newText) 
        oneCatEl.appendChild(newElH2) 
         newElH2.appendChild(newElP) 
         newElP.appendChild(newText2)

        
    
           

 }



async function showCountryFlag(){

try {const response = await fetch ("https://api.thecatapi.com/v1/breeds");

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  cats = await response.json(); 
 
  
  let catData=cats
  
  console.log(catData);
             
  displayFlag(catData);  



}
  catch (error){console.error(error)}   



}




  function displayFlag(data)  {

    


  }










// Meny-knapparna
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

//Navigeringsmeny
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    //hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    //koll om navigering är synlig eller ej, ändrar display block/none
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}
//Meny/Hamburgarmenykod är taget från MallarMiun och anpassats till uppgiften


