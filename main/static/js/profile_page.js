let posts = document.querySelector(".posts");
const user_id = "{{user.id}}";
function fetch_user_posts()
{
  fetch(`/get_user_posts/?user=${user_id}`)
                .then(response => response.json())
                .then(data => {
                  if(data.data.length == 0){
                        posts.innerHTML = `<h1 style="margin: 0 auto;">No <span style="color: #fac24e;">Recipes</span> Found</h1>`;
                    }
                    console.log(data);
                    let post = '';
                    // posts.innerHTML = '';
                    data.data.forEach(element => {
                        console.log(element);
                        post_code = `/post_details/${element.recipe_id}`;
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
                    document.querySelector('.posts').innerHTML += post;
                })
                .catch(error => {
                    console.log(error);
                });
        };
fetch_user_posts();