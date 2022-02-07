const colorInput = document.querySelectorAll("#input-class");

function colors(){
  let color = "";
  const red = document.getElementById("red");
  const green = document.getElementById("green");
  const blue = document.getElementById("blue");
  document.body.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
  color += document.body.style.backgroundColor;

  document.getElementById("output").innerHTML = color; 
  
  // addButton.addEventListener('click', (event) =>{
  //   event.preventDefault();
  let record = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
  // })
  const addNew = document.querySelector("#add-button")
  addNew.addEventListener("click", (event) => {
    event.preventDefault();
    const newSpan = document.createElement("span");
    newSpan.classList.add("add-color")
    document.body.appendChild(newSpan);
    newSpan.innerHTML = record;
    newSpan.style.backgroundColor =  record;
      })}

    function inputColor(){
      document.querySelectorAll("#input-class").forEach(colorInput =>{ // pętla do obsługi selectorALL
        colorInput.addEventListener("input",(event) =>{
          event.preventDefault();
          const value = event.target.value;
          if(value<=0 || value>=255 || value.match(/^[0-9]+$/) == null ){
            colorInput.value = "";
            alert("Wpisz liczby z zakresu od 0 do 255!");
          }
              
      })
      })
    }

colors();
inputColor();