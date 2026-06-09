from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, Skill, ContactMessage
from .serializers import ProjectSerializer, SkillSerializer, ContactSerializer

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all()
    return Response(ProjectSerializer(projects, many=True).data)

@api_view(['GET'])
def skill_list(request):
    skills = Skill.objects.all()
    return Response(SkillSerializer(skills, many=True).data)

@api_view(['POST'])
def contact_submit(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        # Save to database
        serializer.save()
        
        # Send email
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        message = serializer.validated_data['message']
        
        try:
            send_mail(
                subject=f"Portfolio Contact from {name}",
                message=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['zainabsaners@gmail.com'],
                fail_silently=False,
            )
            return Response({'message': '✨ Message sent successfully! I will get back to you soon.'}, status=201)
        except Exception as e:
            return Response({'message': 'Message saved but email failed. I will still see your message.'}, status=201)
    
    return Response(serializer.errors, status=400)
