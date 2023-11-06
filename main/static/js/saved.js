let posts = document.querySelector('.posts');
let uid = "{{user.id}}";
console.log(uid);
function get_saved(){
    fetch(`/get_saved/?uid=${uid}`)
    .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.data.length == 0){
                    posts.innerHTML = `<h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">No Saved <span style="color: #fac24e;">Recipes</span></h1>`;
                }
                let post = '';
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
get_saved();