from django.shortcuts import render, redirect
from Users.models import CustomUser
from .models import UserPost, Saved, Shopping, MealPlanner

#import messages
from django.contrib import messages
from django.http import JsonResponse

from django.contrib.auth import authenticate, login, logout
from django.db.models import Q

# Create your views here.
def recipeshare(request):
    return render(request, 'recipeshare.html')

def login_(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid Credentials')
            return redirect('login')
        
    return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        first_name = request.POST.get('firstname')
        last_name = request.POST.get('lastname')
        user = CustomUser.objects.create_user(email=email, password=password, first_name=first_name, last_name=last_name)
        if user is not None:
            messages.success(request, 'Account created successfully')
            return redirect('login')
        else:
            messages.error(request, 'Account creation failed')
            return redirect('register')
    return render(request, 'register.html')

def home(request):
    if request.user.is_authenticated:
        return render(request, 'home.html')
    
def create_post(request):
    if request.user.is_authenticated:
        return render(request, 'create_post.html')

def profile_page(request):
    if request.user.is_authenticated:
        return render(request, 'profile_page.html')

def post_details(request, id):
    if request.user.is_authenticated:
        post = UserPost.objects.get(id=id)
        return render(request, 'post_details.html', {'post': post})

def create_post(request):
    if request.method == 'POST':
        recipe_name = request.POST.get('recipe_name')
        recipe_image = request.FILES.get('recipe_image')
        recipe_time = request.POST.get('recipe_time')
        description = request.POST.get('description')
        ingredients = request.POST.get('ingredients')
        steps = request.POST.get('steps')
        recipe_type = request.POST.get('recipe_type')
        user = request.user
        recipe = UserPost.objects.create(user=user, recipe_name=recipe_name, recipe_image=recipe_image, recipe_time=recipe_time, description=description, ingredients=ingredients, steps=steps, recipe_type=recipe_type)
        if recipe is not None:
            return redirect('home')
        
    return render(request, 'create_post.html')

def explore(request):
    return render(request,'explore.html')

def logout_(request):
    logout(request)
    return redirect('login')

def get_recipes(request):
    if request.method == 'GET':
        recipes = UserPost.objects.all()
        data = []
        for recipe in recipes:
            data.append({
                'recipe_id': recipe.id,
                'recipe_name': recipe.recipe_name,
                'recipe_image': recipe.recipe_image.url,
                'recipe_time': recipe.recipe_time,
                'description': recipe.description,
                'ingredients': recipe.ingredients,
                'steps': recipe.steps,
                'recipe_type': recipe.recipe_type,
                'date': recipe.date,
                'user_id': recipe.user.id,
                'user_first_name': recipe.user.first_name,
                'user_last_name': recipe.user.last_name,
            })
            print(recipe)
        return JsonResponse({'data':data})

def search_recipe(request):
    if request.method == 'GET':
        recipe_name = request.GET.get('search','') 
        recipe = UserPost.objects.filter(Q(recipe_name__icontains=recipe_name))
        data = []
        for recipe in recipe:
            data.append({
                'recipe_id': recipe.id,
                'recipe_name': recipe.recipe_name,
                'recipe_image': recipe.recipe_image.url,
                'recipe_time': recipe.recipe_time,
                'description': recipe.description,
                'ingredients': recipe.ingredients,
                'steps': recipe.steps,
                'recipe_type': recipe.recipe_type,
                'date': recipe.date,
                'user_id': recipe.user.id,
                'user_first_name': recipe.user.first_name,
                'user_last_name': recipe.user.last_name,
            })
            print(recipe)
        return JsonResponse({'data':data})

def get_user_posts(request):
    if request.method == 'GET':
        user = request.GET.get('user','') 
        recipes = UserPost.objects.filter(user_id=user)
        data = []
        for recipe in recipes:
            data.append({
                'recipe_id': recipe.id,
                'recipe_name': recipe.recipe_name,
                'recipe_image': recipe.recipe_image.url,
                'recipe_time': recipe.recipe_time,
                'description': recipe.description,
                'ingredients': recipe.ingredients,
                'steps': recipe.steps,
                'recipe_type': recipe.recipe_type,
                'date': recipe.date,
                'user_id': recipe.user.id,
                'user_first_name': recipe.user.first_name,
                'user_last_name': recipe.user.last_name,
            })
        return JsonResponse({'data':data})


def planner(request):
    if request.user.is_authenticated:
        return render(request, 'planner.html')

def shopping(request):
    if request.user.is_authenticated:
        return render(request, 'shopping.html')
    
def saved(request):
    if request.user.is_authenticated:
        return render(request, 'saved.html')

def get_saved(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        print(user) 
    saved = Saved.objects.filter( user_id = user)
    print(saved)
    data = []
    for recipe in saved:
        data.append({
            'recipe_id': recipe.recipe.id,
            'recipe_name': recipe.recipe.recipe_name,
            'recipe_image': recipe.recipe.recipe_image.url,
            'recipe_time': recipe.recipe.recipe_time,
            'description': recipe.recipe.description,
            'ingredients': recipe.recipe.ingredients,
            'steps': recipe.recipe.steps,
            'recipe_type': recipe.recipe.recipe_type,
            'date': recipe.recipe.date,
            'user_id': recipe.recipe.user.id,
            'user_first_name': recipe.recipe.user.first_name,
            'user_last_name': recipe.recipe.user.last_name,
        })
        print(recipe)
    return JsonResponse({'data':data})

def save_item(request):
    
    if request.method == 'GET':
        user = request.GET.get('uid','')
        recipe = request.GET.get('rid','')
        print(user,recipe)

        try:
            if Saved.objects.filter(user_id = user, recipe_id = recipe).exists():
                Saved.objects.filter(user_id = user, recipe_id = recipe).delete()
                return JsonResponse({'status':400})
            saved = Saved.objects.create(user_id = user, recipe_id = recipe)
            # send STATUS 200
            return JsonResponse({'status':200})
        except:
            return JsonResponse({'status':400})

def check_saved(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        recipe = request.GET.get('rid','')
        print(user,recipe)
        if Saved.objects.filter(user_id = user, recipe_id = recipe).exists():
            return JsonResponse({'status':200})
        else:
            return JsonResponse({'status':400})

def get_shop(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        print(user) 
    shop = Shopping.objects.filter( user_id = user)
    print(shop)
    data = []
    for recipe in shop:
        data.append({
            'recipe_id': recipe.recipe.id,
            'recipe_name': recipe.recipe.recipe_name,
            'recipe_image': recipe.recipe.recipe_image.url,
            'recipe_time': recipe.recipe.recipe_time,
            'description': recipe.recipe.description,
            'ingredients': recipe.recipe.ingredients,
            'steps': recipe.recipe.steps,
            'recipe_type': recipe.recipe.recipe_type,
            'date': recipe.recipe.date,
            'user_id': recipe.recipe.user.id,
            'user_first_name': recipe.recipe.user.first_name,
            'user_last_name': recipe.recipe.user.last_name,
        })
        print(recipe)
    return JsonResponse({'data':data})

def shop_item(request):
    
    if request.method == 'GET':
        user = request.GET.get('uid','')
        recipe = request.GET.get('rid','')
        print(user,recipe)

        try:
            if Shopping.objects.filter(user_id = user, recipe_id = recipe).exists():
                Shopping.objects.filter(user_id = user, recipe_id = recipe).delete()
                return JsonResponse({'status':400})
            shop = Shopping.objects.create(user_id = user, recipe_id = recipe)
            # send STATUS 200
            return JsonResponse({'status':200})
        except:
            return JsonResponse({'status':400})

def check_shop(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        recipe = request.GET.get('rid','')
        print(user,recipe)
        if Shopping.objects.filter(user_id = user, recipe_id = recipe).exists():
            return JsonResponse({'status':200})
        else:
            return JsonResponse({'status':400})
        
def add_to_meal_planner(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        recipe = request.GET.get('rid','')
        day = request.GET.get('day','')
        time = request.GET.get('time','')
        print(user,recipe,day,time)
        try:
            if MealPlanner.objects.filter(user_id = user, recipe_id = recipe, day = day, time = time).exists():
                MealPlanner.objects.filter(user_id = user, recipe_id = recipe, day = day, time = time).delete()
                return JsonResponse({'status':400})
            meal = MealPlanner.objects.create(user_id = user, recipe_id = recipe, day = day, time = time)
            # send STATUS 200
            return JsonResponse({'status':200})
        except Exception as e:
            print(e)
            return JsonResponse({'status':400})
        
def planner_data(request):
    if request.method == 'GET':
        user = request.GET.get('uid','')
        print(user)
        data = []
        for day in ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']:
            for time in ['breakfast','lunch','dinner']:
                if MealPlanner.objects.filter(user_id = user, day = day, time = time).exists():
                    recipe = MealPlanner.objects.get(user_id = user, day = day, time = time)
                    data.append({
                        'recipe_id': recipe.recipe.id,
                        'recipe_name': recipe.recipe.recipe_name,
                        'recipe_image': recipe.recipe.recipe_image.url,
                        'recipe_time': recipe.recipe.recipe_time,
                        'description': recipe.recipe.description,
                        'ingredients': recipe.recipe.ingredients,
                        'steps': recipe.recipe.steps,
                        'recipe_type': recipe.recipe.recipe_type,
                        'date': recipe.recipe.date,
                        'user_id': recipe.recipe.user.id,
                        'user_first_name': recipe.recipe.user.first_name,
                        'user_last_name': recipe.recipe.user.last_name,
                        'day': day,
                        'time': time,
                    })
                else:
                    data.append({
                        'recipe_id': '',
                        'recipe_name': '',
                        'recipe_image': '',
                        'recipe_time': '',
                        'description': '',
                        'ingredients': '',
                        'steps': '',
                        'recipe_type': '',
                        'date': '',
                        'user_id': '',
                        'user_first_name': '',
                        'user_last_name': '',
                        'day': day,
                        'time': time,
                    })
        print(data)
        return JsonResponse({'data':data})

def delete_post(request):
    if request.method == 'GET':
        recipe = request.GET.get('rid','')
        print(recipe)
        try:
            UserPost.objects.filter(id = recipe).delete()
            return JsonResponse({'status':200})
        except:
            return JsonResponse({'status':400})

