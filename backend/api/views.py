from django.shortcuts import render

from .models import Teacher, Course, CourseCategory, Student
from .serializers import TeacherSerializer

from rest_framework import generics


class TeacherListAPI(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
# 
class TeacherDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer