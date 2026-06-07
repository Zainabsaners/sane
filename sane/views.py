from rest_framework.decorators import api_view
from rest_framework.response import Response
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
        serializer.save()
        return Response({'message': '✨ Message sent! I will get back to you soon.'}, status=201)
    return Response(serializer.errors, status=400)
