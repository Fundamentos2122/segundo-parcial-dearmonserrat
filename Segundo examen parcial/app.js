const formRecipe = document.getElementById("form-recipe");
const ingredientName = document.getElementById("ingredient-name");
const ingredientTempList = document.getElementById("ingredient-temp-list");

const keyList = "ingredient-temp-list";

document.addEventListener("DOMContentLoaded", function () {
    formRecipe.addEventListener("submit", submitRecipe);

    paintRecipeList();
});

function submitRecipe(e){
    e.preventDefault();
    e.stopPropagation();

    let name ={
        text: formRecipe["name"].value
    };

    let description ={
        text: formRecipe["description"].value
    };

    /*let picture ={
        img: formRecipe["picture"].value
    };*/

    let ingredient ={
        text: formRecipe["ingredient"].value
    };

    let list = getIngredients();

    list.push(ingredient);

    localStorage-setItem(keyList, JSON.stringify(list));

    paintRecipeList();
}

function paintRecipeList(){
    let list = getIngredients();

    let html = '';

    for(var i = 0; i < list.lenght; i++){
        html += 
         `<div class="card" id="${list[i].id}">
        <div class="card-img">
            <img src="http:\\picsum.photos\600" alt="">
        </div>
        <div class="card-text">
            ${list[i].text}
        </div>
        <button class="close" onclick="deleteRecipe(${list[i].id})">X</button>
    </div>`;
    }



    ingredientList.innerHTML = html;
}

function getIngrecients(){
    let list = JSON.parse(localStorage.getItem(keyList));


    if(list === null){
        return[];
    }
    else{
    return list;
    }
}

function deleteRecipe(id){
    let list =getRecipelist();

    list = list.filter(i => i.id !== id);

    localStorage.setItem(keyList, JSON.stringify(list));

    let tweet = document.getElementById(id);

    tweet.className += 'hide';
    setTimeout(() =>{
    tweet.remove();
    }, 300);
}