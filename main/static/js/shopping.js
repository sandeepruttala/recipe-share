let posts = document.querySelector('.posts');
let uid = "{{user.id}}";
console.log(uid);
function get_saved(){
    fetch(`/get_shop/?uid=${uid}`)
    .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.data.length == 0){
                    posts.innerHTML = `<h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                    >Shopping List is <span style="color: #fac24e;">Empty</span></h1>`;
                }
                let post = '';
                data.data.forEach(element => {
                    console.log(element);
                    post_code = `/post_details/${element.recipe_id}`;
                    post += `
                        <div class="post"
                                <span style="font-size: 2.0rem; font-weight: 500; color: #333;">
                                Ingredients for 
                                <b style="color: #fac24e;">${element.recipe_name}</b>
                                </span>
                                <div class="ingredients" style="margin-top: 20px;"> 
                                    <span style="font-size: 1.5rem; font-weight: 500; color: #505050;">
                                    ${element.ingredients}
                                    </span>
                                </div>
                                <div class="post-link" style="text-align:right;">
                                <a href="${post_code}" style="text-decoration: none;color:white">
                                    <button style="margin-top: 10px; padding: 15px 30px; background-color: #fac24e; border: none; border-radius: 50px; cursor: pointer; outline: none; color: #fff; font-size: 1.2rem; font-weight: 500;">
                                        Recipe&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </button>
                                </a>
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