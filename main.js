const colorInput = document.querySelector(".input-class");

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

      colorInput.addEventListener("submit", (event) => {
        let record = event.target.value;
        if(record <= 0 && record >= 255){
          alert("only record from 0 to 255")
          console.log(record)
  };

})


// const addNew = document.querySelector("#add-button")
// addNew.addEventListener("click", addColor);

// function addColor(event){
// event.preventDefault();
// const newSpan = document.createElement("span");
// newSpan.classList.add("add-color")
// document.body.appendChild(newSpan);
// }

colors();