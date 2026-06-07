from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()
    tech_stack = models.CharField(max_length=500)
    github_link = models.URLField(blank=True)
    live_demo = models.URLField(blank=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    proficiency = models.IntegerField(default=80)

    def __str__(self):
        return self.name

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.created_at}"
