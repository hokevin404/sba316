var menuLinks = [
    { text: 'Home', href: '/home' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'FAQ', href: '/faq' },
];

const gList = document.getElementById("groceryList");
// console.log(gList);
const gInput = document.getElementById("groceryInput");
// console.log(gInput);
const gBtn = document.getElementById("addGroceryBtn");
// console.log(gBtn);

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.style.padding = '3vh';
topMenuEl.classList.add('flex-around');

topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
})

for(let i = 0; i < menuLinks.length; i++)
{
    let anchor = document.createElement('a');
    anchor.href = Object.values(menuLinks[i])[1];
    anchor.innerText = Object.values(menuLinks[i])[0];
    topMenuEl.appendChild(anchor);
}

// Event listener when a listed item is clicked
gList.addEventListener("click", (evt) => {
    // When listed is clicked, toggle on/off text strikethrough
    evt.target.classList.toggle("strikethrough");
    console.log('strikethrough');
});

// Event listener to validate user input
gBtn.addEventListener("click", addGrocery);

// Event handler function
//  1) Retrieve user input value
//  2) If no user input, return to do nothing
//  3) Check if user input is a value
//      a) If true, append item to the list, reset the value variable and focus it
//      b) Otherwise return to do nothing if invalid
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