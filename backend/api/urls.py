from django.urls import path
from .views import TeacherListAPI, TeacherDetailAPI

urlpatterns = [
    path('teachers/', TeacherListAPI.as_view(), name='teacher_list'),
    path('teachers/<int:pk>', TeacherDetailAPI.as_view(), name='teacher_detail')
]
