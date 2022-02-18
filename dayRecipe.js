let url = "www.themealdb.com/api/json/v1/1/random.php";
import navbar from "./components/navbar.js";
import { getData, appendOneData } from "./scripts/showData.js";

let navbar_container = document.getElementById("navbar_container");
navbar_container.innerHTML = navbar();
let parent = document.getElementById("container");

let loadUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
let load = async () => {
  try {
    let x = await getData(loadUrl);
    appendOneData(x.meals, parent);
  } catch (e) {
    console.log("error", e);
  }
};
load(loadUrl);
