import navbar from "./components/navbar.js";

import { getData, appendData } from "./scripts/showData.js";
let navbar_container = document.getElementById("navbar_container");
navbar_container.innerHTML = navbar();

let search_input = document.getElementById("query");

let timerId;
let x;
let parent = document.getElementById("content_container");
let deb = async (func, delay) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(async () => {
    x = await func;

    appendData(x.meals, parent);
  }, delay);
};

let value;
search_input.addEventListener("input", () => {
  value = search_input.value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  deb(getData(url), 1000);
});

let loadUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
let load = async (loadUrl) => {
  let x = await getData(loadUrl);
  appendData(x.meals, parent);
};
load(loadUrl);

