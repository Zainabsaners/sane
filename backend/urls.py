from django.contrib import admin
from django.urls import path
from sane import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/projects/', views.project_list),
    path('api/skills/', views.skill_list),
    path('api/contact/', views.contact_submit),
]
