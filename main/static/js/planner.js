let uid = "{{user.id}}";
        console.log(uid);
       fetch(`planner_data?uid=${uid}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let monday_morning = document.querySelector('.monday-morning');
                let monday_afternoon = document.querySelector('.monday-afternoon');
                let monday_evening = document.querySelector('.monday-evening');
                let tuesday_morning = document.querySelector('.tuesday-morning');
                let tuesday_afternoon = document.querySelector('.tuesday-afternoon');
                let tuesday_evening = document.querySelector('.tuesday-evening');
                let wednesday_morning = document.querySelector('.wednesday-morning');
                let wednesday_afternoon = document.querySelector('.wednesday-afternoon');
                let wednesday_evening = document.querySelector('.wednesday-evening');
                let thursday_morning = document.querySelector('.thursday-morning');
                let thursday_afternoon = document.querySelector('.thursday-afternoon');
                let thursday_evening = document.querySelector('.thursday-evening');
                let friday_morning = document.querySelector('.friday-morning');
                let friday_afternoon = document.querySelector('.friday-afternoon');
                let friday_evening = document.querySelector('.friday-evening');
                let saturday_morning = document.querySelector('.saturday-morning');
                let saturday_afternoon = document.querySelector('.saturday-afternoon');
                let saturday_evening = document.querySelector('.saturday-evening');
                let sunday_morning = document.querySelector('.sunday-morning');
                let sunday_afternoon = document.querySelector('.sunday-afternoon');
                let sunday_evening = document.querySelector('.sunday-evening');

                if (data.data[0].recipe_id == ""){
                    monday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    monday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[0].recipe_id}`;
                monday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[0].recipe_name}</a>`;
                monday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[0].recipe_image}" height="100%" width="100%">`;
                }
                
                if (data.data[1].recipe_id == ""){
                    monday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    monday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[1].recipe_id}`;
                monday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[1].recipe_name}</a>`;
                monday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[1].recipe_image}" height="100%" width="100%">`;
                }
                
                if (data.data[2].recipe_id == ""){
                    monday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    monday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[2].recipe_id}`;
                monday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[2].recipe_name}</a>`;
                monday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[2].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[3].recipe_id == ""){
                    tuesday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    tuesday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[3].recipe_id}`;
                tuesday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[3].recipe_name}</a>`;
                tuesday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[3].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[4].recipe_id == ""){
                    tuesday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    tuesday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[4].recipe_id}`;
                tuesday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[4].recipe_name}</a>`;
                tuesday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[4].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[5].recipe_id == ""){
                    tuesday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    tuesday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[5].recipe_id}`;
                tuesday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[5].recipe_name}</a>`;
                tuesday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[5].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[6].recipe_id == ""){
                    wednesday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    wednesday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[6].recipe_id}`;
                wednesday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[6].recipe_name}</a>`;
                wednesday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[6].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[7].recipe_id == ""){
                    wednesday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    wednesday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[7].recipe_id}`;
                wednesday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[7].recipe_name}</a>`;
                wednesday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[7].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[8].recipe_id == ""){
                    wednesday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    wednesday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }
                else{
                post_code = `/post_details/${data.data[8].recipe_id}`;
                wednesday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[8].recipe_name}</a>`;
                wednesday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[8].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[9].recipe_id == ""){
                    thursday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    thursday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[9].recipe_id}`;
                thursday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[9].recipe_name}</a>`;
                thursday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[9].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[10].recipe_id == ""){
                    thursday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    thursday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[10].recipe_id}`;
                thursday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[10].recipe_name}</a>`;
                thursday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[10].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[11].recipe_id == ""){
                    thursday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    thursday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[11].recipe_id}`;
                thursday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[11].recipe_name}</a>`;
                thursday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[11].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[12].recipe_id == ""){
                    friday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    friday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[12].recipe_id}`;
                friday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[12].recipe_name}</a>`;
                friday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[12].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[13].recipe_id == ""){
                    friday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    friday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[13].recipe_id}`;
                friday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[13].recipe_name}</a>`;
                friday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[13].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[14].recipe_id == ""){
                    friday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    friday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[14].recipe_id}`;
                friday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[14].recipe_name}</a>`;
                friday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[14].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[15].recipe_id == ""){
                    saturday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    saturday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[15].recipe_id}`;
                saturday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[15].recipe_name}</a>`;
                saturday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[15].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[16].recipe_id == ""){
                    saturday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    saturday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[16].recipe_id}`;
                saturday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[16].recipe_name}</a>`;
                saturday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[16].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[17].recipe_id == ""){
                    saturday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    saturday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[17].recipe_id}`;
                saturday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[17].recipe_name}</a>`;
                saturday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[17].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[18].recipe_id == ""){
                    sunday_morning.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    sunday_morning.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[18].recipe_id}`;
                sunday_morning.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[18].recipe_name}</a>`;
                sunday_morning.querySelector('.meal-image').innerHTML = `<img src="${data.data[18].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[19].recipe_id == ""){
                    sunday_afternoon.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    sunday_afternoon.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[19].recipe_id}`;
                sunday_afternoon.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[19].recipe_name}</a>`;
                sunday_afternoon.querySelector('.meal-image').innerHTML = `<img src="${data.data[19].recipe_image}" height="100%" width="100%">`;
                }

                if (data.data[20].recipe_id == ""){
                    sunday_evening.querySelector('.meal-link').innerHTML = `<a>No Recipe</a>`;
                    sunday_evening.querySelector('.meal-image').innerHTML = `<img src="{% static 'images/no_recipe.jpg' %}" height="100%" width="100%">`;
                }else{
                post_code = `/post_details/${data.data[20].recipe_id}`;
                sunday_evening.querySelector('.meal-link').innerHTML = `<a href="${post_code}">${data.data[20].recipe_name}</a>`;
                sunday_evening.querySelector('.meal-image').innerHTML = `<img src="${data.data[20].recipe_image}" height="100%" width="100%">`;
                }

                
            })