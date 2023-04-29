from rest_framework import serializers
from .models import Teacher, Course, CourseCategory, Student

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'