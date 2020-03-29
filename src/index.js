let addToy = false;
const toysUrl = 'http://localhost:3000/toys'

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", (name, image) => {
  fetchToys();
  submitToy(name, image);
  likes();
});


function likes() {
  const likeButtons = querySelectorAll(".like-btn");
  for (let i=0; i<likeButtons.length; i++) {
    if (likeButtons[i] === document.querySelector('.like-btn').addEventListener('click', function(e))) {
      somthing???.likes += 1
  }
};

// patch request
let configObj0 = {
  method: 'PATCH',
 http://localhost:3000/toys/:id
headers: 
{
  "Content-Type": "application/json",
  'Accept': "application/json"
}
 
body: JSON.stringify({
  "likes": <new number>
})
}

// prevent default needed?
function submitToy(name, image) {
  let formData = {
    name: name,
    image: image
  };
  
  //  debugger
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch(toysUrl, configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
      
    console.log(object);
  }); 
};


function fetchToys() {
  return fetch(toysUrl)
  .then(resp => resp.json())
  .then(json =>{
      renderToys(json)
  });
}

function renderToys(json) {
  const toyDivId = document.querySelector('#toy-collection')
  json.forEach(toy => {
    const divToAdd = document.createElement('div');
    divToAdd.classList.add("card");
    toyDivId.appendChild(divToAdd)
    const h2 = document.createElement('h2')
    h2.innerText = toy.name
    divToAdd.appendChild(h2)
    const img = document.createElement('img')
    img.src = toy.image
    img.classList.add('toy-avatar')
    divToAdd.appendChild(img)
    const p = document.createElement('p')
    p.innerText = `${toy.likes} Likes`
    divToAdd.appendChild(p)
    const button = document.createElement('button')
    button.classList.add('like-btn')
    button.innerText = 'Like'
    divToAdd.appendChild(button)
  })
}

