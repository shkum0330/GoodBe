FROM python:3.11

RUN pip install requests
RUN pip install pandas
RUN pip install django
RUN pip install djangorestframework
RUN pip install drf-yasg
RUN pip install krwordrank
RUN pip install kiwipiepy
RUN pip install lxml
RUN pip install keybert

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/analysis

CMD ["python3", "manage.py", "runserver","--noreload", "0:8000"]

EXPOSE 8000
