window.onload = init;
function init () {
       getcatApi ()  //När sidan startar så anropas funktionen getcatApi
       }

let catsList= []

       async function getcatApi(){


try {const response = await fetch ("https://api.thecatapi.com/v1/breeds");

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  catsList = await response.json(); 
 
  
//   let catData=cats
  

             
  displayCat(catsList);  




}
  catch (error){console.error(error)}   
}


function displayCat(catsList)  
 {

     console.log(catsList);

    
    //`<li><button>text<button></li>`
       
       let catsSelectEl=document.getElementById("catsSelect");
       catsSelectEl.innerHTML=""
    // let numberOfCatsEl = document.getElementById("numberOfCats")
    // numberOfCatsEl.addEventListener("change", )

    // console.log(numberOfCatsEl.value);
        
    //    catData.length=numberOfCatsEl.value
      catsList.forEach(cat => {  //Loopar igenom kstter
          let newOptionEl= document.createElement ("option")  
           newOptionEl.value= cat.name 
           newOptionEl.textContent=cat.name
           newOptionEl.setAttribute('id', cat.id)
           newOptionEl.setAttribute('class', cat.temperament)

       
        //  let newText=document.createtextContent(cat.name)

        
          catsSelectEl.appendChild(newOptionEl)

           newOptionEl.addEventListener("click", readpicture)
          //  newOptionEl.addEventListener("click", showName)

        //  newOptionEl.appendChild(newText)

        //    let newElLi= document.createElement ("li")   
        //    let newElButton = document.createElement ("button")
        //    let newText=document.createTextNode (cat.name)  
        //    newElButton.setAttribute('id', cat.country_code) 
        //    newElButton.setAttribute('title', cat.description)
        //     newElButton.setAttribute('class', cat.id)
        //       newElButton.appendChild(newText) 
        //    newElLi.appendChild(newElButton) 
        //    catsEl.appendChild(newElLi)

          



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

let catsPic=[]
   async function readpicture  (e){
            try {const response = await fetch (`https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=${e.target.id}`);

    if (!response.ok){
        throw new Error ("Fel....")  
     }
  catsPic = await response.json(); 
 
  
//   let catData=cats
  

             
   showCat(catsPic);  




}
  catch (error){console.error(error)}   

    }
     console.log(catsPic);
     
    function showCat(catsPic)   {

        console.log(catsPic);
      console.log(catsPic[0].url);
  
    // catFact1H2.appendChild(catFactP)
    // catFactP.appendChild(catFactText2)

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

    // function showName(e) {
   
    // let catNameEl=document.getElementById("catName1")
    //   catNameEl.innerHTML=""
    // let catNameH2=document.createElement("H2")
    // // let catFactP=document.createElement("P")
    //  let catNameText1=document.createTextNode(e.target.value)
    // // let catFactText2=document.createTextNode(e.target.className)
    // catNameEl.appendChild(catNameH2)
    // catNameH2.appendChild(catNameText1)


    // }

//     let fact=[]

//     async function readFact () {
//     // 

//                 try {const response = await fetch (`https://catfact.ninja/fact`);

//     if (!response.ok){
//         throw new Error ("Fel....")  
//      }
//   fact = await response.json(); 
 
  
// //   let catData=cats
  

             
//    showFact(fact);  




// }
//   catch (error){console.error(error)}   

//     }

//     buttonAEl=document.getElementById("buttonTest")
//    let buttonTestEl=document.createElement("button")
//    buttonAEl.appendChild(buttonTestEl)
//      let text=document.createTextNode("Facts of cats")
//    buttonTestEl.appendChild(text)


//  buttonTestEl.addEventListener("click", readFact)


//             //   newOptionEl.addEventListener("click", readFact)

//      function showFact (fact){

//         console.log(fact.fact);
        

//         let catFactEl=document.getElementById("catFact")
//         catFactEl.innerHTML=""
   
  
      
//     // let catFactH2=document.createElement("H2")
//     // let catFactP=document.createElement("P")
//     //  let catFactText1=document.createTextNode("Kattfakta")
//      let catFactP=document.createElement("P")
//        let catFactText2=document.createTextNode("Kattfakta "+ fact.fact)
//     // let catFactText2=document.createTextNode(e.target.className)
//     catFactEl.appendChild(catFactP)
//     catFactP.appendChild(catFactText2)
        
    
//     }