let navbar = () => {
  return `<div class="pointer" onclick="window.location.href='index.html'">Recipe</div>
          <input type="text" placeholder="Search Your recipe." id="query" />
       <div class="pointer" onclick="window.location.href='latest.html'">Latest</div>
       <div class="pointer" onclick="window.location.href='dayRecipe.html'">Recipe Of Day</div>`;
};

export default navbar;
