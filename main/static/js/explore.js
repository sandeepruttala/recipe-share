const searchIcon = document.querySelector(".fa-search");
const searchInput = document.querySelector("input[name='search-input']");
const posts = document.querySelector(".posts");
const heading1 = document.querySelector(".heading1");

function fetch_searched_recipes(){
  fetch(`/search_recipe/?search=${searchInput.value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let post = '';
    if (data.data.length === 0) {
      heading1.innerHTML = '<h1></h1>';
      post += `<h1 style="margin: 20px 0;">No results found for <span style="color:#fac24e">'${searchInput.value}'</span></h1>`;
          }
    else{
    data.data.forEach(element => {
      console.log(element);
      post_code = `/post_details/${element.recipe_id}`;
      heading1.innerHTML = `<h1>Search Results for <span style="color:#fac24e">'${searchInput.value}'</span></h1>`;
      post += `<a class="post-link" href="${post_code}"><div class="post">
              <img class="recipe-image" src="${element.recipe_image}" alt="recipe-image">
              <div class="post-info">
                  <h3>${element.recipe_name}</h3>
                  <div class="author-details">
                      <img src="{% static 'images/profile.png'%}" width="25px" height="25px" style="border-radius:50%;">&nbsp;${element.user_first_name} ${element.user_last_name}        
                  </div>
                  <div class="time">
                      <i class="fa-regular fa-clock"></i>&nbsp;${element.recipe_time} minutes
                  </div>
                  <div class="type">
                      <i class="fa-solid fa-burger"></i>&nbsp;${element.recipe_type}
                  </div>
              </div>
              </div>
          `;
    });
  }
    posts.innerHTML = post;
  });
}
var input = document.querySelector("input[name='search-input']");
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      fetch_searched_recipes();
  }
});