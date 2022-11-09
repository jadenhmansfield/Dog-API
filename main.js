document.getElementById("button").addEventListener("click", dog)
    
function dog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("img").src = data.message;
    })
}