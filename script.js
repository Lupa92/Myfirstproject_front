console.log("hello")

fetch('https://myfirstproject-back.vercel.app/year')
.then(response=>response.json())
.then((data)=>{
    document.querySelector("#year").textContent= year
})
