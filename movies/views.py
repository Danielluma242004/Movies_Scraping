from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import re

class MovieScraperView(APIView):
    def get(self, request, *args, **kwargs):
        search_query = request.GET.get('q', '')
        if not search_query:
            return Response({'error': 'Query parameter "q" is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        driver = webdriver.Chrome()

        try:
            imdb_url = f'https://www.imdb.com/find/?q=%7B{search_query}%7D&s=tt&ttype=ft&ref_=fn_ft'
            driver.get(imdb_url)

            WebDriverWait(driver, 1).until(
                EC.presence_of_all_elements_located((By.CLASS_NAME, 'ipc-metadata-list-summary-item__t'))
            )
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            movies =  soup.find_all('li', class_='ipc-metadata-list-summary-item ipc-metadata-list-summary-item--click find-result-item find-title-result')
            movies_list = []

            for movie in movies:
                title = movie.find('a', class_='ipc-metadata-list-summary-item__t').text.strip()
                year_element = movie.find('span', class_='ipc-metadata-list-summary-item__li')
                year = year_element.text.strip() if year_element else None
                cast_ul = movie.find('ul', class_='ipc-inline-list ipc-inline-list--show-dividers ipc-inline-list--no-wrap ipc-inline-list--inline ipc-metadata-list-summary-item__stl base')
                cast_span = cast_ul.find('span', class_='ipc-metadata-list-summary-item__li')
                cast = cast_span.text.strip() if cast_span else None
                img_tag = movie.find('img', class_='ipc-image')
                img_src = img_tag.get('src') if img_tag else None
                movie_obj = {'title': title, 'year': year, 'cast': cast, 'image': img_src}
                movies_list.append(movie_obj)

            return Response({'movies': movies_list})
        
        finally:
            driver.quit()

class MovieGenres(APIView):
    def get(self, request, *args, **kwargs):
        search_query = request.GET.get('genres', '')
        if not search_query:
            return Response({'error': 'Query parameter "genres" is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        driver = webdriver.Chrome()

        try:
            imdb_url=f'https://www.imdb.com/search/title/?genres={search_query}'
            driver.get(imdb_url)

            WebDriverWait(driver, 1).until(
                EC.presence_of_all_elements_located((By.CLASS_NAME, 'ipc-html-content-inner-div'))
            )
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            movies = soup.find_all('li', class_='ipc-metadata-list-summary-item')
            movies_by_genre_list = []

            for movie in movies:
                title = movie.find('h3', class_='ipc-title__text').text.strip()
                metadata_items = soup.find_all('span', class_='sc-43986a27-8 jHYIIK dli-title-metadata-item')
                year = metadata_items[0].text
                duration = metadata_items[1].text
                rating = metadata_items[2].text
                stars_span = movie.find('span', class_='ipc-rating-star ipc-rating-star--base ipc-rating-star--imdb sc-9ab53865-1 iXEijC ratingGroup--imdb-rating')
                stars = stars_span.text.strip() if stars_span else None
                
                metascore_span = movie.find('span', class_='sc-b0901df4-0 bcQdDJ metacritic-score-box')
                metascore = metascore_span.text if metascore_span else None

                movie_description = movie.find('div', class_='ipc-html-content-inner-div').text
                
                vots_div = movie.find('div', class_='sc-53c98e73-0 kRnqtn')
                vots_text = vots_div.text if vots_div else None
                vots = re.sub(r'\D', '', vots_text) if vots_text else None

                img_tag = movie.find('img', class_='ipc-image')
                img_src = img_tag.get('src') if img_tag else None

                movie_obj = {'title': title, 'year':year, 'duration':duration, 'rating':rating, 'stars': stars, 'metascore': metascore, 'movie_description': movie_description, 'vots':vots, 'image': img_src}
                movies_by_genre_list.append(movie_obj)
            
            return Response({'movies': movies_by_genre_list})
        
        finally:
            driver.quit()

