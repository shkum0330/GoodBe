from django.shortcuts import render
from rest_framework import viewsets
from .serializers import job_post_serializer
from .models import job_post
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_keyword_abstraction(request):
    queryset = job_post.objects.all()
    serializer = job_post_serializer(queryset,many = True)
    return Response(serializer.data)

@api_view(['GET'])
def hello_rest_api(request):
    data = {'message': 'Hello, REST API!'}
    return Response(data)