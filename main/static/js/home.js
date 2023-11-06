function fetch_recipes() {
    fetch(`/get_recipes/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.data.reverse();
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
            document.querySelector('#posts').innerHTML += post;
        })
        .catch(error => {
            console.log(error);
        });
};

fetch_recipes();