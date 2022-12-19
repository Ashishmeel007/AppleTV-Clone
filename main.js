const questions=document.querySelectorAll('.question-answer');
   
questions.forEach(function(question){
 const btn = question.querySelector('.question-btn');
 btn.addEventListener("click",function() {
   questions.forEach(function(item){
     if (item !== question){
       item.classList.remove("show-text")
     }
   })
   question.classList.toggle("show-text");
 })
})
const questions1=document.querySelectorAll('.question-answer1');

questions1.forEach(function(question){
 const btn = question.querySelector('.question-btn');
 btn.addEventListener("click",function() {
   questions1.forEach(function(item){
     if (item !== question){
       item.classList.remove("show-text")
     }
   })
   question.classList.toggle("show-text");
 })
})





    let cont=document.getElementById("movie_container");
    let input=document.getElementsByClassName("input")
    let btn=document.getElementById("search-btn");
    
    btn.addEventListener("click",() =>{
      var api="https://www.omdbapi.com/?apiKey=7c955b18&s="
    var query=input.value
    api=api+query;
    
     fetch(api)
      .then((requestResponse) =>{ 
      return requestResponse.json()
    })
     .then((actualData) =>{
      // console.log(actualData.Search)
      displayMovie(actualData.Search)
     })
     .catch((error) =>{
        return error  
      // let h2=document.createElement("h2")
      // h2.setAttribute("class","error-container")
      // h2.innerText="Movie not found!"
      // cont.append(h2)
     })
    })
    function displayMovie(data){
      // cont.innerHTML=null
        data.forEach((element) => {
          console.log(data)
          let card=document.createElement("div")
          card.setAttribute("class","mov")
          let image=document.createElement("img")
          image.setAttribute("class","poster")
          image.setAttribute("src",element.Poster)
          card.append(image)
          cont.append(card)
        });
    }
  
    




  
