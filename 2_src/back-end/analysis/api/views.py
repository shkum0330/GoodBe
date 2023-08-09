from django.shortcuts import render
from rest_framework import viewsets
from .serializers import job_post_serializer
from .models import job_post
from rest_framework.decorators import api_view
from rest_framework.response import Response
from nlp import keyword_abstraction as ka

@api_view(['GET'])
def get_keyword_abstraction(request, keyword):
    ab_words = ka.keyword_abstraction(keyword)
    return Response(ab_words)
