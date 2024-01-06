from django.urls import path
from .views import MovieScraperView, MovieGenres

urlpatterns=[
    path('scrape/', MovieScraperView.as_view(), name='movie_scrape'),
    path('list/', MovieGenres.as_view(), name='MovieGenres'  ),
]