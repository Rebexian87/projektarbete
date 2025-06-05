window.onload = init;
function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi
       }



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
    // let numberOfCatsEl = document.getElementById("numberOfCats")
    // numberOfCatsEl.addEventListener("change", )

    // console.log(numberOfCatsEl.value);
        
       catData.length=numberOfCatsEl.value
      catData.forEach(cat => {  //Loopar igenom kstter
        //  let newOptionEl= document.createElement ("option")   
       
        //  let newText=document.createtextContent(cat.name)
        // newOptionEl.textContent=cat.name
        //  newOptionEl.value= cat.name
        //   catsEl.appendChild(newOptionEl)
        //  newOptionEl.appendChild(newText)

           let newElLi= document.createElement ("li")   
           let newElButton = document.createElement ("button")
           let newText=document.createTextNode (cat.name)  
           newElButton.setAttribute('id', cat.country_code) 
           newElButton.setAttribute('title', cat.description)
            newElButton.setAttribute('class', cat.id)
              newElButton.appendChild(newText) 
           newElLi.appendChild(newElButton) 
           catsEl.appendChild(newElLi)

          



// newElButton.addEventListener ("click", showcountry, false); //anropar funktionen showcountre vid klick kattras
// newElButton.addEventListener ("click", showOneButton, false); //anropar funktionen showOneButton
// newElButton.addEventListener ("click", showCountryFlag, false); //anropar funktionen showOneButton


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
