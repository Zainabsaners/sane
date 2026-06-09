from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.project_list),
    path('skills/', views.skill_list),
    path('contact/', views.contact_submit),
]
