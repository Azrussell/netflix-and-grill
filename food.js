//cuisine: chinese, mexican, etc
//dietary: gluten-free, vegetarian,vegan

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "c75ba3c861msh01fc0d0b12d2fabp1a6133jsndf3982f95ef3",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};
let name = document.querySelector('#name')
let ingredients = document.querySelector('#ingredients')
let directions = document.querySelector('#directions')
let post = document.querySelector("#posts");
fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=chinese", options)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(
            result => {
                let name = result.name
                let ingredients = result.sections[0].components
                
                console.log(ingredients)
                let recipeHTML = 
                `<h3 id="name">${name}</h3>
                <p id="ingredients">${ingredients}</p>
                <p id="directions">${result.instructions[0].display_text}</p>
                `
                let sec = document.createElement('section')
                sec.innerHTML = recipeHTML
                post.append(sec)
            }
        )
    })
    .catch((err) => console.error(err));
