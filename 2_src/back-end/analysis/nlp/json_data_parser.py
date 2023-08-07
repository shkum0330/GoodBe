import requests
from bs4 import BeautifulSoup
import pandas as pd
import json

def get_all_job_post():
    url = "http://localhost:8083/api/search/all"
    req = requests.get(url)
    if req.status_code == 200:
        # JSON 데이터를 문자열로 가져옴
        json_data = req.text

        # JSON 데이터를 Python 데이터 구조로 파싱
        parsed_data = json.loads(json_data)

        # 파싱된 데이터를 사용하여 원하는 작업 수행
        return parsed_data
    else:
        return "API 요청에 실패하였습니다."

