const addButton = document.querySelector("#add-button")
//console.log(red.value)


function colors(){
  let color = "";
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  color += document.body.style.backgroundColor;

  document.getElementById("output").innerHTML = color; 
  
  addButton.addEventListener('click', (event) =>{
    event.preventDefault();
    const record = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    console.log(record)
  })
}

colors();