const gList = document.getElementById("groceryList");
// console.log(gList);
const gInput = document.getElementById("groceryInput");
// console.log(gInput);
const gBtn = document.getElementById("addGroceryBtn");
// console.log(gBtn);
 
gList.addEventListener("click", (evt) => {
  evt.target.classList.toggle("strikethrough");
  console.log('strikethrough');
});

function addGrocery() {
  const newItem = gInput.value;

    if (newItem === "") 
    return;

    if(gInput.validity.valid)
    {
        gList.appendChild(document.createElement("li")).textContent = newItem;
        gInput.value = "";
        gInput.focus();
    }
    else
        return;
}

gBtn.addEventListener("click", addGrocery);