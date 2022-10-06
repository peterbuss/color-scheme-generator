const btn = document.querySelector('#btn');  
const selector = document.querySelector('#menu-elements');  

btn.addEventListener("click", getApi);

   /* Getting from the input color picker */
   const colorPicker = document.getElementById("color-picker");
   let seed;
   colorPicker.addEventListener("change", watchColorPicker, false);
   function watchColorPicker(event) {
       console.log("color pick: " + event.target.value);
       seed = event.target.value.replace("#", "");
   }

function getApi(event) {
    event.preventDefault();
    console.log(selector.value);
 
    const url = 'https://www.thecolorapi.com/scheme?hex=' + 
        seed + '&mode=' + selector.value + '&count=5' ;
    console.log(url);
    document.getElementById("btn").textContent = "wait ...";
    /* 'https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5' */
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("btn").textContent = "Get color scheme";
            console.log(data.colors);
            console.log(data.colors[0].hex.value);
            console.log(data.colors[1].hex.value);
            console.log(data.colors[2].hex.value);
            console.log(data.colors[3].hex.value);
            console.log(data.colors[4].hex.value);
 
 
            document.getElementById("bar1").style.backgroundColor = data.colors[0].hex.value;
            document.getElementById("bar-value1").textContent = data.colors[0].hex.value;

            document.getElementById("bar2").style.backgroundColor = data.colors[1].hex.value;
            document.getElementById("bar-value2").textContent = data.colors[1].hex.value;

            document.getElementById("bar3").style.backgroundColor = data.colors[2].hex.value;
            document.getElementById("bar-value3").textContent = data.colors[2].hex.value;

            document.getElementById("bar4").style.backgroundColor = data.colors[3].hex.value;
            document.getElementById("bar-value4").textContent = data.colors[3].hex.value;

            document.getElementById("bar5").style.backgroundColor = data.colors[4].hex.value;
            document.getElementById("bar-value5").textContent = data.colors[4].hex.value;
        })
        .catch(error => { 
            console.log("caught error on fetch - try again: " + error)
            document.getElementById("btn").textContent = "Get color scheme";
            alert("error on fetch - try again");
            });
}
