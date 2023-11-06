function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("background").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("background").style.display = "none";
}
bg = document.getElementById("background");
bg.addEventListener("click", closePopup);

function addToMealPlanner(){
    let uid = "{{user.id}}";
    let rid = "{{post.id}}";
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    // alert if day or time is not selected
    if(day == "none" || time == "none"){
        alert("Please select day and time");
        return;
    }
    console.log(uid);
    console.log(rid);
    console.log(day);
    console.log(time);
    fetch(`/add_to_meal_planner/?uid=${uid}&rid=${rid}&day=${day}&time=${time}`)
    .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status == 200){
                    alert("Added to Meal Planner");
                    closePopup();
                }
                else{
                    alert("Meal Planner already contains this recipe");
                }
            });
}

function save_item()
        {
            let uid = "{{user.id}}";
            let rid = "{{post.id}}";
            console.log(uid);
            console.log(rid);
            fetch(`/save_item/?uid=${uid}&rid=${rid}`)
            .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if(data.status == 200){
                            save = document.querySelector('.save-button');
                            save.style.backgroundColor = "#77dd77";
                            save.innerHTML = `<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Saved`;
                        }
                        else{
                            save = document.querySelector('.save-button');
                            save.style.backgroundColor = "#fac24e";
                            save.innerHTML = `<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Add to Saved items`;
                        }
                    });
        }
        function shop_item()
        {
            let uid = "{{user.id}}";
            let rid = "{{post.id}}";
            console.log(uid);
            console.log(rid);
            fetch(`/shop_item/?uid=${uid}&rid=${rid}`)
            .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if(data.status == 200){
                            shop = document.querySelector('.shop-button');
                            shop.style.backgroundColor = "#77dd77";
                            shop.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Added`;
                        }
                        else{
                            shop = document.querySelector('.shop-button');
                            shop.style.backgroundColor = "#fac24e";
                            shop.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Add to Shopping List`;
                        }
                    });
        }
        function delete_post()
        {
            let rid = "{{post.id}}";
            console.log(rid);
            fetch(`/delete_post/?rid=${rid}`)
            .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if(data.status == 200){
                            alert("Post Deleted");
                            window.location.href = "{% url 'profile_page' %}";
                        }
                    });
        }
        let uid = "{{user.id}}";
        let rid = "{{post.id}}";
        console.log(uid);
        console.log(rid);
        fetch(`/check_saved/?uid=${uid}&rid=${rid}`)
        .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(data.status == 200){
                        // change color of save button
                        save = document.querySelector('.save-button');
                        save.style.backgroundColor = "#77dd77";
                        // change text of save button
                        save.innerHTML = `<i class="fa-solid fa-bookmark"></i>&nbsp;&nbsp;Saved`;
                    }
                });
        fetch(`/check_shop/?uid=${uid}&rid=${rid}`)
        .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if(data.status == 200){
                        // change color of shop button
                        shop = document.querySelector('.shop-button');
                        shop.style.backgroundColor = "#77dd77";
                        // change text of shop button
                        shop.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;Added`;
                    }
                });
        let delete_button = document.querySelector('.delete-button');
        if (uid != "{{post.user.id}}"){
            delete_button.style.display = "none";
        }