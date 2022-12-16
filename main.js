
let cont=document.getElementById("movie_container");
    let input=document.getElementById("search-inp")
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
      fetchData=actualData.Search
      displayMovie(actualData.Search)
     })
     .catch((error) =>{
      let h2=document.createElement("h2")
      h2.setAttribute("class","error-container")
      h2.innerText="Movie not found!"
      cont.append(h2)
     })
    })
    function displayMovie(data){
      cont.innerHTML=""
        data.forEach((element) => {
          let card=document.createElement("div")
          card.setAttribute("class","mov")
          let image=document.createElement("img")
          image.setAttribute("class","poster")
          image.setAttribute("src",element.Poster)
          card.append(image)
          cont.append(card)
        });
    }
  