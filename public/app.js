// creating a variable and storing a reference to .getSecret html
const acquireSecrets = document.querySelector(".getSecret")

// add event listener to that acquireSecrets variable
acquireSecrets.addEventListener("click", function(){
    fetch("/getSecret")
        .then((response)=> {
            return response.json()
        })  
        .then((data) => {
            const main = document.querySelector("main")
            main.innerHTML = ""
            let elem = document.createElement("p")
            //get random value of array (array name.length)
            const rng = Math.floor(Math.random()*data.data.length)
            elem.innerHTML = data.data[rng].secret
            main.appendChild(elem)
        })        
})
