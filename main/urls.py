from django.contrib import admin
from django.urls import path
from . import views
# app_name = 'recipeshare'
urlpatterns = [
    path('',views.recipeshare,name='recipeshare' ),
    path('login/',views.login_,name='login' ),
    path('logout/',views.logout_,name='logout' ),
    path('register/',views.register,name='register' ),
    path('home/',views.home,name='home' ),
    path('create_post/',views.create_post,name='create_post'),
    path('profile_page/',views.profile_page,name='profile_page'),  
    path('explore/', views.explore, name = 'explore'),
    path('get_recipes/',views.get_recipes,name='get_recipes' ),
    path('get_user_posts/',views.get_user_posts,name='get_user_posts' ),
    path('search_recipe/',views.search_recipe,name='search_recipe' ),
    path('post_details/<int:id>',views.post_details,name='post_details' ),
    path('planner',views.planner,name='planner' ),
    path('shopping',views.shopping,name='shopping' ),
    path('saved',views.saved,name='saved' ),
    path('get_saved/',views.get_saved,name='get_saved' ),
    path('save_item/',views.save_item,name='save_item' ),
    path('check_saved/',views.check_saved,name='check_saved' ),
    path('shop_item/',views.shop_item, name="shop_item"),
    path('check_shop/',views.check_shop,name='check_shop' ),
    path('get_shop/',views.get_shop,name='get_shop' ),
    path('add_to_meal_planner/',views.add_to_meal_planner,name='add_to_meal_planner' ),
    path('planner_data/',views.planner_data,name='planner_data' ),
]