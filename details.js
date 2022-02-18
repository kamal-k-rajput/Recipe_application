import navbar from "./components/navbar.js";
import { getData, appendOneData } from "./scripts/showData.js";

let navbar_container = document.getElementById("navbar_container");
navbar_container.innerHTML = navbar();
let parent = document.getElementById("container");

// let loadUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

let load = async () => {
  try {
    let id = JSON.parse(localStorage.getItem("recipe_id"));
    let loadUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.idMeal}`;
    let x = await getData(loadUrl);

    let div = document.createElement("div");
    let ingredients = document.createElement("div");
    ingredients.setAttribute("id", "ingredients");
    let ing = x.meals[0];
    let i1 = ing.strIngredient1;
    let i2 = ing.strIngredient2;
    let i3 = ing.strIngredient3;
    let i4 = ing.strIngredient4;
    let i5 = ing.strIngredient5;
    let i6 = ing.strIngredient6;
    let i7 = ing.strIngredient7;
    let i8 = ing.strIngredient8;
    let arr_name = [i1, i2, i3, i4, i5, i6, i7, i8];
    let arr_qty = [
      ing.strMeasure1,
      ing.strMeasure2,
      ing.strMeasure3,
      ing.strMeasure4,
      ing.strMeasure5,
      ing.strMeasure6,
      ing.strMeasure7,
      ing.strMeasure8,
    ];
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let ind_name = document.createElement("th");
    ind_name.textContent = "INGREDIENTS";
    let ind_qty = document.createElement("th");
    ind_qty.textContent = "QUANTITY";

    tr.append(ind_name, ind_qty);
    thead.append(tr);
    //  strMeasure1
    let tbody = document.createElement("tbody");
    for (let i = 0; i < 8; i++) {
      let tbody_row = document.createElement("tr");
      let name = document.createElement("td");
      name.textContent = arr_name[i];
      let qty = document.createElement("td");
      qty.textContent = arr_qty[i];
      tbody_row.append(name, qty);
      tbody.append(tbody_row);
    }

    table.append(thead, tbody);
    ingredients.append(table);

    parent.append(div, ingredients);

    appendOneData(x.meals, div);

    // return data;
  } catch (e) {
    console.log("error", e);
  }
};
load();
