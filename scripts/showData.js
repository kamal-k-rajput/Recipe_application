let getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};
let appendData = (data, parent) => {
  parent.innerHTML = "";
  data?.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    div.addEventListener("click", ()=>{
      localStorage.setItem("recipe_id", JSON.stringify(el));
      console.log(el.idMeal);
      window.location.href = "details.html";
    })
    let p = document.createElement("p");
    p.setAttribute("id", "title");
    p.innerText = el.strMeal;

    let img = document.createElement("img");
    img.setAttribute("id", "thumb");

    let category = document.createElement("p");
    category.innerText = el.strCategory;

    let tag = document.createElement("div");
    tag.setAttribute("id", "tag");
    if (el.strTags !== null) {
      tag.innerText = el.strTags.split(",").join(" ");
    }
    img.src = el.strMealThumb;
    div.append(img, p, category, tag);
    parent.append(div);
  });
};
let appendOneData = (data, parent) => {
  parent.innerHTML = "";
  data?.forEach((el) => {
    let upper_div = document.createElement("div");
    upper_div.setAttribute("id", "day_container");
    let div_left = document.createElement("div");

    div_left.setAttribute("id", "left_card");
    let p = document.createElement("p");
    p.setAttribute("id", "title");
    p.innerText = el.strMeal;

    let img = document.createElement("img");
    img.setAttribute("id", "thumb");

    let category = document.createElement("p");
    category.innerText = el.strCategory;

    let tag = document.createElement("div");
    tag.setAttribute("id", "tag");
    if (el.strTags !== null) {
      tag.innerText = el.strTags.split(",").join(" ");
    }
    img.src = el.strMealThumb;
    div_left.append(img, p, category, tag);

    let div_right = document.createElement("div");
    div_right.setAttribute("id", "right_card");

    let instruction = document.createElement("p");
    instruction.setAttribute("id", "instruction");
    instruction.style.textAlign = "justify";
    instruction.textContent = ` ${el.strInstructions}`;

    let iframe = document.createElement("iframe");
    iframe.innerHTML = `<iframe width="400px" height="400px"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>`;
    let videoId = el.strYoutube.split("=")[1];
    // console.log(videoId);
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    div_right.append(instruction, iframe);
    // parent.append(div_left, div_right);
    upper_div.append(div_left, div_right);
    parent.append(upper_div);
    // console.log(el);
  });
};

// src="https://www.youtube.com/embed/78XTurtubFw"

export { getData, appendData, appendOneData };
